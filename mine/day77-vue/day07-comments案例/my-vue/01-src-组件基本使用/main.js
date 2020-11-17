/*
    1..vue文件
    2.vue组件开发
    3.入口文件
        渲染根组件到页面
            怎么找到元素对下个
            这个js文件是怎么根vue组件结合的，要添加到哪个元素上那么就得通过el找到那个元素，那就得new一个Vue实例，所以要引入Vue
    4.根组件
    5.
*/
import Vue from "vue";
import App from "./App.vue";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
