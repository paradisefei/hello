/*
  vuex管理
    1.可以由vuex管理，也可以由组件自己管理
    2.添加
    3.删除
    4.点击每一个文本框，取反check
*/

import Vue from "vue";

import App from "./App";

import store from "./store";

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
