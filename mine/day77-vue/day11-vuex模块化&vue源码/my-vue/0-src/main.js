import Vue from "vue";

import App from "./App.vue";

import store from "./store";

/*
  模块化
*/
console.log(store);
new Vue({
  render: (h) => h(App),
  /*
    store的值会被代理到组件的实例化对象上，所以可以通过$store来获取到vuex中的数据
  */
  store,
}).$mount("#app");
