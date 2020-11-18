/*
  1.Vue的原型对象上保存一个vm实例对象
  2.要实现的是在任意组件上绑定，在任意组件上都能触发
    所有组件
      Vue的实例，vm实例
      VueComponent的实例，组件实例
  3.$on()
    在构造函数的原型对象上，也就是在Vue.prototype上
    1.实例对象上的方法，是只有组件实例才能调用的方法，给哪个组件实例绑定了事件，就只有这个组件能触发
    2.在要绑定事件函数的地方就调用这个$on方法，在各个地方绑定的事件最终都是添加事件总线上
    3.Vue.prototype是每个实例对象都可以访问得到的，在要绑定的地方直接Vue.prototype.$on来绑定其他地方能不能使用
    4.在最开始的时候就在Vue的原型对象上添加，那么之后的所有实例都可以使用的到了
      不加对象
        1.两个子组件之间

    在某个实例上绑定事件，只能在这个实例上被触发
    绑定事件在mounted中，触发事件在beforeDestroy中

*/
import Vue from "vue";

import App from "./App";

Vue.prototype.$bus = new Vue();
const vm = new Vue({
  beforeCreate() {
    /*
      1.在初始化之前在Vue原型对象上扩展事件总线，为当前Vue的实例对象
      2.之后在每个组件都可以访问到这个事件总线，然后在这个上面绑定事件
    */
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
}).$mount("#app");
console.log(vm);
