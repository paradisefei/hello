<template>
  <div>
    <h1>App</h1>
    <p>{{ num }}</p>
    <!--
      组件在使用时，在组件中绑定事件
      子组件要如何使用这个函数
        1.组件实例的_events上可以找到plusName
        2._events是一个对象，这个对象中保存了从组件标签中传入进来的事件，键是事件名，值是一个数组，数组中可以包含多个事件函数
        3.$listeners上可以找得到，$listeners是一个对象，对象中的键为plusName，值为plusFunc
     -->
    <Child @plusName="plusFunc" />
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
