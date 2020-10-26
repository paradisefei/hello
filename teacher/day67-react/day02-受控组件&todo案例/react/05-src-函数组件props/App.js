import React, { Component } from 'react'
import Header from './Header'
export default class App extends Component {
  state = {
    msg: 'app里面的数据'
  }
  render() {
    return (
      <div>
        {/* 组件经常使用组件外部的数据,如何将外部数据传递给组件呢? 使用标签属性的方式传递 */}
        <Header
          list={[1, 2, 3, 4]}
          name={'1'}
          gender={'男'}
          obj={{ name: 'zs' }}
          // age={'18'}
        ></Header>
      </div>
    )
  }
}
