// @ts-nocheck
import Vue from "vue";

import App from "./App";

// 关闭生产环境提示
Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    // 绑定全局事件总线对象
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
}).$mount("#app");
