/*
  计算已完成和全部
*/
const getter = {
  finishedItem(state) {
    return state.allItems.reduce((p, c) => p + (c.check ? 1 : 0), 0);
  },
  allItem(state) {
    return state.allItems.length;
  },
};
export default getter;
