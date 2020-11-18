<template>
  <div>
    <h2>Child</h2>
    <!-- <button @click="$listeners.plusName">Child按钮</button> -->
    <button @click="handle">Child按钮</button>
  </div>
</template>
<script>

export default {
  name: "Child",
  data() {
    console.log(this);
    return {

    };
  },
  methods: {
    handle() {
      this.$emit('plusName');
    },
  },
};
</script>
<style></style>
