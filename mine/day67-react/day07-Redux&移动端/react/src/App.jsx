import React, { Component } from "react";
import {Provider} from 'react-redux'
/*
  1. 将class --> className
  2. 将没有结束符标签加上结束符：input img
  3. 将style改成{{}}
*/

// import List from "./pages/List";
import Search from "./pages/Search";
import WithList from './container/WithList'

import store from './redux/store'
console.log(store.getState())
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          {/* Search没有被connect处理，所以这个组件里面得不到redux数据 */}
          <Search />
          {/* <List /> */}
          <WithList></WithList>
        </div>
      </Provider>
    );
  }
}
