import Vue from "vue";

import Vuex from "vuex";

/*
  1.使用插件
  2.最终导出的是什么store
    store是Vuex.Store的实例化对象
    构造函数的参数是一个配置对象，属性有
      state
        存放数据
      action
      mutation
*/
Vue.use(Vuex);

const state = {
  num: 0,
};

const actions = {
  handlePlus(store, everyTime) {
    /*
      action中的函数怎么写
        我要知道我要触发的是哪一个函数，函数名就是在dispatch中指定的具体函数
        执行
          num根据单位每次加几
        action中的每一个函数都有第一个参数store，指的是什么
        把新数据提交给mutation函数
    */
    store.commit("HANDLEPLUS", everyTime);
  },
  handleMinus(store, everyTime) {
    store.commit("HANDLEMINUS", everyTime);
  },
  handleIfOdd(store, everyTime) {
    if (store.state.num % 2 !== 0) {
      store.commit("HANDLEPLUS", everyTime);
    }
  },
  handleIfAsync(store, everyTime) {
    /*
      如何确定是异步还是同步
    */
    setTimeout(() => {
      store.commit("HANDLEPLUS", everyTime);
    }, 1000);
  },
};

const mutations = {
  HANDLEPLUS(state, everyTime) {
    /*
      这里就相当于是绑定了一个自定义事件，在actions中提交就相当于是触发事件
      回调函数中会接受state作为第一个参数，第一个参数是一定要有的，你在写的时候不管要不要写，这个位置都会接受一个state
        只是如果你不写的话，里面的state直接就是用和该mutations一起被注册的那个state中的数据
        如果你定义接收了，它也同样是和mutations一起注册的这个state传到这里
      action中的函数提交到这里
      数据操作是放在mutation中进行的，action中只是负责收集数据

      mutation函数
        第一个参数
          state,表示所有状态数据
        第二个参数及之后
          从action中传过来的
      mutation函数执行完之后，状态数据就改变了，页面就会直接的重新渲染
    */
    // console.log(everyTime);
    state.num += +everyTime;
  },
  HANDLEMINUS(state, everyTime) {
    state.num -= +everyTime;
  },
};
const store = new Vuex.Store({
  state,
  actions,
  mutations,
});

export default store;
