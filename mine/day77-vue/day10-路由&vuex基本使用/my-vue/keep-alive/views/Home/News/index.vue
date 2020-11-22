<template>
  <div>
    <h3>News</h3>
    <ul>
      <li>new01</li>
      <li>new02</li>
      <li>new02</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "News",
  beforeCreate() {
    console.log("我是News组件的beforeCreate");
  },
  created() {
    console.log("我是News组件的Createed");
  },
  beforeMount() {
    console.log("我是News组件的beforeMounte");
  },
  mounted() {
    console.log("我是News组件的Mounted");
  },
  beforeDestroy() {
    console.log("我是News组件的beforeDestroy");
  },
};
</script>
<style>
</style>
