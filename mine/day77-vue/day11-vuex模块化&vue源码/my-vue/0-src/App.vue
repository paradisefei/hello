<template>
  <div>
    <p>
      click:{{ num }} times,count is {{ oddOrEven }}
    </p>
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
  1.直接在组件实例上使用mutations和action函数
  2.mapState映射到data中，但是需要在computed中结构出来
  3.mapGetter映射到computed中，也是需要在computed中结构出来
*/

import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "App",
  data() {
    return {
      everyTime: "1",
    };
  },
  computed: {
    /*
      mapState和mapGetters在computed中获取
      mapState是一个函数，该函数返回一个对象
        参数是一个数组时：
        参数是一个对象时：

    */
    ...mapState(["num"]),
    /*
      1.mapState得到一个对象
      2.将这个对象结构，里面的东西就到外面来了
      3.在computed中的属性就是直接代理带vm上的
      mapState中的属性是映射到computed中来的

      state中存放的数据是响应式的，state中的数据对应的就是data中的数据，只是把它映射到computed中
      {
        num() {
          return this.$store.state.num;
        }
      }
    */
    ...mapGetters(["oddOrEven"]),
  },
  methods: {
    /*
      mapActions，mapMutations中的函数是映射到methods中来的
    */
    ...mapActions(["handleIfOdd", "handleIfAsync"]),
    ...mapMutations(["HANDLEPLUS", "HANDLEMINUS"]),
    handlePlus() {
      /*
        store上的属性有
          dispatch
          commit
          getter
          state
        1.页面调用dispatch触发action函数执行，收集数据，然后将数据提交到mutation中，但action只是为了收集数据，如果数据不需要另外收集，也可以不通过action函数，直接在mutation中进行修改
      */
      console.log(this);
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
