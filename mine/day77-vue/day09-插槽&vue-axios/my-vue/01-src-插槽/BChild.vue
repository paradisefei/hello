<template>
  <div>
    <h3>BChild...</h3>

    <p>-----头部------</p>
    <slot name="header"></slot>
    <p>-----主体------</p>
    <slot name="main"></slot>
    <p>-----尾部------</p>
    <slot name="footer"></slot>
  </div>
</template>
<script>
/*
  1.使用命名插槽选择在这个位置放某一个标签
*/
export default {
  name: "BChild",
};
</script>
<style>
</style>
