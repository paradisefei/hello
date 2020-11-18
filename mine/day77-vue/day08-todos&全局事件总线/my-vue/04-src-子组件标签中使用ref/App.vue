<template>
  <div>
    <h1>App</h1>
    <p>{{ num }}</p>
    <!-- <button @click="handleApp">App中的按钮</button> -->
    <!--
      1.在子组件绑定一个事件
      2.父组件通过ref找到子组件实例，然后触发子组件中绑定的方法
      3.在父组件中给子组件实例绑定事件，然后子组件来触发这个事件
    -->
    <Child ref="child" />
    <Father />
  </div>
</template>
<script>
import Child from "./views/Child";

import Father from "./views/Father";

export default {
  name: "App",
  data() {
    return {
      num: 0,
    };
  },
  mounted() {
    this.$refs.child.$on("plusName2", () => {
      this.num += 1;
    });
  },
  methods: {
    plusFunc() {
      this.num += 1;
    },
  },
  components: {
    Father,
    Child,
  },
};
</script>
<style></style>
