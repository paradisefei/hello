<template>
  <div>
    <h1>App</h1>
    <!--
      在子组件点击按钮，这里的num递增
      在子组件中把事件绑定到事件总线上，事件总线上就有了这个事件，并且所有的实例都可以触发这个事件
      在子组件中绑定，在每一个子组件上绑定有什么区别
        每一个this不一样，所以在每一次绑定事件中都是只能访问到自己这个组件的数据的

      Child中点击，App中递增
        任意组件绑定，任意组件触发
        绑定组件的地方是被修改的，触发组件的地方是修改的
     -->
    <p>{{num}}</p>
    <button @click="$bus.$off('add')">App解绑</button>
    <Child />
    <Father />
  </div>
</template>
<script>
import Child from "./views/Child";

import Father from "./views/Father";

export default {
  name: "App",
  mounted() {
    /*
      在事件总线上绑定事件
     */
    this.$bus.$on("add", () => {
      this.num += 1;
    });
    // this.$bus.$once("add", () => {
    //   this.num += 2;
    // });
  },
  data() {
    return {
      num: 0,
    };
  },
  components: {
    Father,
    Child,
  },
};
</script>
<style></style>
