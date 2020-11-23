<template>
  <ul class="todo-main">
    <Item
      v-for="eachItem in allItems"
      :key="eachItem.id"
      :eachItem="eachItem"
    />
  </ul>
</template>
<script>
/*
  Mainer组件
    1.包含Item组件，导入Item组件
    2.在App定义数据并成功渲染
    3.把从App中传过来的数据遍历
    4.点击删除按钮删除数据
*/
import { mapState } from "vuex";

import Item from "../Item";

export default {
  name: "Mainer",
  computed: {
    ...mapState(["allItems"]),
  },
  components: {
    Item,
  },
};
</script>
<style>
/*main*/
.todo-main {
  margin-left: 0px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
