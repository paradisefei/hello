import Vue from "vue";

import App from "./App.vue";

import store from "./store";

/*
  vuex
    1.dispatch,action,commit,mutation,store
    2.action负责收集数据，发送请求就是放在这里
    3.mutation负责修改数据
    4.dispatch就是用于触发哪一个action函数执行，action函数会进行提交，将收集到的数据提交到mutation中，mutation中会进行重新渲染
    5.vuex就是用于实现在Vue中的状态集中管理的这样一种机制，那现在的问题就在于哪里会用到数据，会用到什么数据，如何使用这里面的数据
    6.用最基本的形式实现vuex的数据管理
*/
new Vue({
  render: (h) => h(App),
  /*
    store的值会被代理到组件的实例化对象上，所以可以通过$store来获取到vuex中的数据
  */
  store,
}).$mount("#app");
