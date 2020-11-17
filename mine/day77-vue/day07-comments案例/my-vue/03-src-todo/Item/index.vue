<template>
  <li
    @mouseenter="showButton = !showButton"
    @mouseleave="showButton = !showButton"
  >
    <label>
      <input type="checkbox" v-model="eachItem.check" />
      <span>{{ eachItem.content }}</span>
    </label>
    <button
      class="btn btn-danger"
      v-show="showButton"
      @click="delItemApp(eachItem.id)"
    >
      删除
    </button>
  </li>
</template>
<script>
/*
    1.鼠标移入item时，显示属于该Item的删除按钮
    2.点击删除按钮，将该条Item从数据中删除
    3.复选框被选中，修改已完成数，已完成数=全部，则footer复选框被选中
      在原始数据中给每一条数据添加一个checked属性，初始值为false，把这个值传入到checkbox中来确定这个复选框是否被选中
*/
export default {
  name: "Item",
  data() {
    return {
      showButton: false,
    };
  },
  props: {
    eachItem: Object,
    delItemApp: Function,
  },
};
</script>
<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  /* float: left; */
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
