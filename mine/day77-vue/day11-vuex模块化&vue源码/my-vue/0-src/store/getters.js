// 存放只读的计算属性
const getters = {
  oddOrEven(state) {
    return state.num % 2 === 0 ? "偶数" : "奇数";
  },
};

export default getters;
