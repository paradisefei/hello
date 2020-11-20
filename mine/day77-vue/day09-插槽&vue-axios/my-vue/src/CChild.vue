<template>
  <div>
    <h3>CChild...</h3>
    <!--
      这个是子组件，<slot>是分发内容的出口，在这个出口处解析子组件中的数据，此时
  为了让hobby这个数据在父级的内容插槽中可见
      这里hobby是作为<slot>元素的一个属性绑定上去的
     -->
    <slot name="list" :person="person"></slot>
  </div>
</template>
<script>
export default {
  name: "CChild",
  data() {
    return {
      // hobby: [
      //   { id: 1, like: "抽烟" },
      //   { id: 2, like: "喝酒" },
      //   { id: 3, like: "烫头" },
      // ],
      person: {
        name: "张三",
        age: 23,
        sex: "男,",
      },
    };
  },
};
</script>
<style>
</style>
