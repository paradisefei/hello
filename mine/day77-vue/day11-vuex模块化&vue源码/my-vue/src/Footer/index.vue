<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAllData" />
    </label>
    <span>
      <span>已完成{{ finishedItem }}</span> / 全部{{ allItem }}
    </span>
    <button class="btn btn-danger" @click="CLEAR_CHECKED">清除已完成任务</button>
  </div>
</template>
<script>
/*
    1.每一次添加删除，数组长度都会自动变化，使用计算属性实现
    2.点击这里的复选框，改变checkedLength
    3.点击底部复选框，根据得到的值来修改源数据中所有item中的check
*/
import { mapGetters, mapMutations } from "vuex";

import { CHECK_ALL, CLEAR_CHECKED } from "../store/mutation-type.js";

export default {
  name: "Footer",
  props: {
    clearCheckedApp: Function,
  },
  computed: {
    ...mapGetters(["finishedItem", "allItem"]),
    checkAllData: {
      get() {
        return this.finishedItem && this.finishedItem === this.allItem;
      },
      set() {
        this.CHECK_ALL(this.checkAllData);
      },
    },
  },
  methods: {
    ...mapMutations([CHECK_ALL, CLEAR_CHECKED]),
  },
};
</script>
<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
