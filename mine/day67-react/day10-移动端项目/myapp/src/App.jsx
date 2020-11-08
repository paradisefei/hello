import React, { Component,Suspense } from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import { Button } from 'antd-mobile';
// import { Button} from 'antd-mobile';

// npx create-react-app 项目名称

import './utils/fixed.js'
//引入routes列表
import routes from "./config/routes.js"

// 引入css
import './app.css'
//把整个东西做出来是最重要的，但不是说不学，学你需要的
export default class App extends Component {
  render() {
    /* 
        1.把routes列表中的对象引入并成功渲染
            home
            login
        2.路由
          1.嵌套在Router中
        3.页面加载进来时显示home
        4.
    */

    return (
      <Suspense fallback={<div>loading...</div>}>
        <Router>
          {
               routes.map((item) => {
                return <Route key={item.path} path={item.path} component={item.component} exact={item.exact}></Route>
              })
          }
        </Router>
      </Suspense>
    )
  }
}
