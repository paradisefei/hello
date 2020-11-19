/*
    使用全局事件总线实现
    1.在Vue的原型上扩展全局事件总线
      任意组件绑定事件，任意组件触发
      数据保存在哪个位置
      哪些地方会操作到数据
    2.数据放在ul中，在右边组件绑定事件，在左边组件触发
    3.数据
    4.添加功能
    5.删除
*/

import Vue from "vue";

import App from "./App.vue";

Vue.prototype.$bus = new Vue();
new Vue({
  render: (h) => h(App),
}).$mount("#app");
