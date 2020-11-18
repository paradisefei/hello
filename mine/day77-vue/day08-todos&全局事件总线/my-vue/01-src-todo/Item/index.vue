<template>
  <li @mouseenter="showButton = true" @mouseleave="showButton = false">
    <label>
      <!--
        1.在checkbox中，如果没有给value的话，默认为on，即value="on"
        2.单个复选框，绑定到布尔值；
          值为true时，表示勾选中；
          值为false时，表示不选中；
          点击文本框，值会取反
          文本框被选中时，该布尔值变为true
          文本框取消选中，该布尔值变为false
        3.多个复选框，绑定到数组
          文本框被选中时，将该文本框的value值传入到数组中，在:checked中比较之后为true，所以选中
          文本框取消选中，该文本框的value值从数组中删除，在:checked中比较之后为false，所以显示没有选中

        1.在App定义函数，改变当前Item的check
        2.点击修改isChecked，这个isChecked表示该checkbox是否被选中的标志，不要尝试在其它组件直接修改数据源组件的中数据
       -->
      <input type="checkbox" v-model="isChecked" />
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
  computed: {
    isChecked: {
      get() {
        return this.eachItem.check;
      },
      set() {
        this.toggleCheckApp(this.eachItem.id);
      },
    },
  },
  props: {
    eachItem: Object,
    delItemApp: Function,
    toggleCheckApp: Function,
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
