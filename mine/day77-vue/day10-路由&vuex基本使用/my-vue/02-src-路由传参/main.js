import Vue from "vue";

import router from "./router";

import App from "./App.vue";

/*
  router-view
    1.希望组件显示在哪里，就在那里写上router-view
  注册路由插件
    2.new VueRouter之后的实例化对象会被放在Vue的配置选项中
      router为选项名 VueRouter的实例化对象为值
    3.在使用<router-link>修改了地址栏地址后
    4.home下面的两个组件
      点击News时，News组件中的内容出现在页面中
    5.路由参数:params参数和query参数
      1.定义
      2.传入
        1.message有3个链接，点击相应的链接在Detail组件中显示相应的内容
        2.重点在于点击时访问的是同一个地址，是同一个组件，只是这个组件中的内容结构相似，所以可以仅通过路由参数就可以确定哪个内容填入到这个结构中来显示
    地址栏改变了，但没有显示对应的组件内容
      点击链接修改路径的时候就会把路由参数传过去，然后在子组件接收，根据路由参数确定渲染哪一条数据
    6.props
      组件内获取传入的参数的一种方式
    7.命名路由
      1.给路由取一个名字
    8.<router-view>的属性
      1.在这个位置渲染和路径匹配的组件
      2.这里传入进去的参数所有组件都能接收到
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
