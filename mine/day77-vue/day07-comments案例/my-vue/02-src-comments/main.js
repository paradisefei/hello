/*
    1.main.js文件
    2.App组件
    3.组件导出的是一个对象，这个对象是怎么变成一个组件的
*/

import Vue from "vue";

import App from "./App.vue";

console.log(App);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
