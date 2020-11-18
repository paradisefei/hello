<template>
  <div>
    <h2>Child</h2>
    <!-- <button @click="$listeners.plusName">Child按钮</button> -->
    <button @click="handleChild">Child按钮</button>
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
  mounted() {
    this.$on("plusName2", () => {
      /*
        触发这个函数，使App这个父组件中的数字递增
      */
      console.log("我是Child中绑定的函数，通过ref在App中使用");
    });
  },
  methods: {
    handleChild() {
      this.$emit('plusName2');
    },
  },
};
</script>
<style></style>
