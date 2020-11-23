const actions = {
  // handlePlus(store, everyTime) {
  //   /*
  //     action中的函数怎么写
  //       我要知道我要触发的是哪一个函数，函数名就是在dispatch中指定的具体函数
  //       执行
  //         num根据单位每次加几
  //       action中的每一个函数都有第一个参数store，指的是什么
  //       把新数据提交给mutation函数
  //   */
  //   store.commit("HANDLEPLUS", everyTime);
  // },
  // handleMinus(store, everyTime) {
  //   store.commit("HANDLEMINUS", everyTime);
  // },
  handleIfOdd(store, everyTime) {
    if (store.state.num % 2 !== 0) {
      store.commit("HANDLEPLUS", everyTime);
    }
  },
  handleIfAsync(store, everyTime) {
    setTimeout(() => {
      store.commit("HANDLEPLUS", everyTime);
    }, 1000);
  },
};

export default actions;
