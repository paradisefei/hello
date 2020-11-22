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
  mounted() {
    console.log(this.$router);
  },
};
</script>
<style>
</style>
