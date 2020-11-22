import Vue from "vue";

import router from "./router";

import App from "./App.vue";

/*
  keep-alive
    默认情况下，在单页面应用中，每一次的切换导航，基本过程都是上一个组件的卸载和新组建的重新创建
    为了让组件能被缓存，所以使用keep-alive将组件包起来
    keep-alive本质也是一个组件
*/
// Vue.prototype.$bus = new Vue();
new Vue({
  render: (h) => h(App),
  /*
    只要在实例化Vue实例时配置了router选项，该选项的值是一个VueRouter实例，每个子组件实例上都会被注册两个属性
    也就是说配置了VueRouter的话，子组件实例上就会注册下面这两个属性
      $router：访问路由实例
      $route：访问当前激活的路由的状态信息
      这样的话组件就可以使用路由相关功能的api
        路由对象
  */
  router,
}).$mount("#app");
