/*
  todo案例
    1.入口文件main.js
    2.静态页面
      App组件
    3.关闭浏览器再打开，渲染的是上一次的数据记录
    4.原则
      数组源在哪里，就只能在那里修改数据，保证在其它组件中只读取不修改，涉及到修改这些数组的组件都通过数据源组件中的方法进行修改，避免由于多处修改造成混乱
*/

import Vue from "vue";

import App from "./App";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
