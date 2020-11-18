/*
  1.子组件向父组件的通信方式
*/
import Vue from "vue";

import App from "./App";

Vue.prototype.$bus = new Vue();
const vm = new Vue({
  render: (h) => h(App),
}).$mount("#app");
console.log(vm);
