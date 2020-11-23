const mutations = {
  HANDLEPLUS(state, everyTime) {
    state.num += +everyTime;
  },
  HANDLEMINUS(state, everyTime) {
    state.num -= +everyTime;
  },
};

export default mutations;
