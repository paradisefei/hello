import Vue from "vue";

import App from "./App.vue";

/*
  Vue的Ajax请求
  1.静态页面
    所有结构放入App组件
  2.拆分组件
  3.List组件
    没有内容显示时，显示文字
    在请求过程中，显示Loading...
    得到数据来渲染
  4.点击按钮请求数据-全局事件总线
    List定义
    Search触发
      文本作为参数
  5.Vue中实现跨域-正向代理
    配置 proxy 告诉开发服务器将任何未知请求代理到这里
    客户端
    代理服务器
    请求服务器
    客户端使用Ajax请求数据，由于违反了同源规则，所以有跨域问题
*/
Vue.prototype.$bus = new Vue();
new Vue({
  render: (h) => h(App),
}).$mount("#app");
