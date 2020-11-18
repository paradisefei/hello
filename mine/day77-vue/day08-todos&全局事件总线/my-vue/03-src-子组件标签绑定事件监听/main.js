/*
  1.组件在使用时，在组件中绑定事件
*/
import Vue from "vue";

import App from "./App";

Vue.prototype.$bus = new Vue();
const vm = new Vue({
  render: (h) => h(App),
}).$mount("#app");
console.log(vm);
