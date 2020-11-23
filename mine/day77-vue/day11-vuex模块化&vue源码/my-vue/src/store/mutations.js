import { ADD_CONTENT, DELETE_ITEM, TOGGLE_CHECK, CHECK_ALL, CLEAR_CHECKED } from "./mutation-type.js";

const mutations = {
  /*
    1.添加数据的操作
  */
  [ADD_CONTENT](state, content) {
    state.allItems.unshift({ id: Date.now(), check: false, content });
  },
  [DELETE_ITEM](state, id) {
    if (confirm("确定要删除吗？")) {
      state.allItems = state.allItems.filter((eachItem) => eachItem.id !== id);
    }
  },
  /*
    点击复选框，改变该项数据中的check
  */
  [TOGGLE_CHECK](state, id) {
    state.allItems.forEach((item) => {
      if (item.id === id) {
        item.check = !item.check;
      }
    });
  },
  [CHECK_ALL](state, checkAllData) {
    // 根据得到的复选框的值，修改数据源中所有的check
    state.allItems.forEach((item) => {
      item.check = !checkAllData;
    });
  },
  [CLEAR_CHECKED](state) {
    state.allItems = state.allItems.filter((item) => !item.check);
  },
};

export default mutations;
