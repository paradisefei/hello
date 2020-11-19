<template>
  <div>
    <h2>Child</h2>
    <button @click="$bus.$emit('add')">Child按钮</button>
    <!--
      解绑
如果没有提供参数，则移除所有事件监听器，也就是移除所有on的绑定，也就是没有绑定事件
如果只提供了事件，则移除该事件所有的监听器，也就是相当于说没有绑定该事件了
如果同时提供了事件与回调，则只移除这个回调的监听器
     -->
    <button @click="$bus.$off('add')">Child解绑</button>

  </div>
</template>
<script>
/*
  1.在Vue.prototype上绑定事件,绑定到的是传入的这个Vue对象上
  2.挂载成功时绑定事件
  3.点击按钮触发绑定的事件
*/
// import Vue from "vue";

export default {
  name: "Child",
  mounted() {
    // this.$on("child", () => {
    //   console.log("我是Child");
    // });
    // this.$bus.$on("child", () => {
    //   console.log("我是Child，这是通过事件总线绑定的第一个函数");
    // });
    // this.$bus.$on("child", () => {
    //   console.log("我是Child，这是通过事件总线绑定的第二个函数");
    // });
  },
  methods: {
    handle() {
      // this.$emit("child");
      // 执行的是会也一定要记得在事件总线上触发，因为在某个实例上绑定的事件，只能在这个实例上触发
      // this.$bus.$emit("child");
    },
  },
};
</script>
<style></style>
