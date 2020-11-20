<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="searchContent"
      />
      <button @click="handler">Search</button>
    </div>
  </section>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      searchContent: "",
    };
  },
  methods: {
    handler() {
      this.$bus.$emit("getResult", this.searchContent);
    },
  },
};
</script>
<style>
</style>
