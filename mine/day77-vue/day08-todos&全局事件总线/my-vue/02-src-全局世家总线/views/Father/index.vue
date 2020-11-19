<template>
  <div>
    <h2>Father</h2>
    <button @click="$bus.$emit('child')">Father按钮</button>
  </div>
</template>
<script>
export default {
  name: "Father",
  beforeDestroy() {
    this.$bus.$emit("child");
  },
};
</script>
<style></style>
