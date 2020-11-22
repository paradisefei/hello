<template>
  <div>
    <p>click:{{ $store.state.num }} times,count is xxx</p>
    <!--
      select中选择的数表示每次加几默认为1
     -->
    <select v-model="everyTime">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="handlePlus">+</button>
    <button @click="handleMinus">-</button>
    <button @click="handleIfOdd">odd</button>
    <button @click="handleIfAsync">async</button>
  </div>
</template>
<script>
/*
  1.数据是从vuex中拿到的
  2.引入vuex插件
*/
export default {
  name: "App",
  data() {
    return {
      everyTime: "1",
    };
  },
  methods: {
    handlePlus() {
      /*
        根据下拉列表的值来确定每次加几
        修改vuex中的num的值
          触发action中的函数，使用dispatch
      */
      this.$store.dispatch("handlePlus", this.everyTime);
    },
    handleMinus() {
      this.$store.dispatch("handleMinus", this.everyTime);
    },
    handleIfOdd() {
      /*
        如果自身是奇数，就计算
        如果自身不是奇数，就不计算
      */
      this.$store.dispatch("handleIfOdd", this.everyTime);
    },
    handleIfAsync() {
      /*
        如果如何是异步的，就计算
        如果不是异步的，就不计算
      */
      this.$store.dispatch("handleIfAsync", this.everyTime);
    },
  },
};
</script>
<style>
</style>
