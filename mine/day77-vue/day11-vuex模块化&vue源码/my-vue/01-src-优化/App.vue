<template>
  <div>
    <p>click:{{ $store.state.num }} times,count is {{$store.getters.oddOrEven}}</p>
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
        store上的属性有
          dispatch
          commit
          getter
          state
        1.页面调用dispatch触发action函数执行，收集数据，然后将数据提交到mutation中，但action只是为了收集数据，如果数据不需要另外收集，也可以不通过action函数，直接在mutation中进行修改
      */
      console.log(this.$store);
      this.$store.commit("HANDLEPLUS", this.everyTime);
    },
    handleMinus() {
      this.$store.commit("HANDLEMINUS", this.everyTime);
    },
    handleIfOdd() {
      /*
        如果自身是奇数，就计算
        如果自身不是奇数，就不计算
      */
      this.$store.dispatch("handleIfOdd", this.everyTime);
    },
    handleIfAsync() {
      /* 异步计算 */
      this.$store.dispatch("handleIfAsync", this.everyTime);
    },
  },
};
</script>
<style>
</style>
