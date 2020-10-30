/* 
    React路由
        1.导包react-router-dom，包中可以解构出三个核心组件
        2.Router
        3.Link
            仅仅只是修改地址栏
        4.Route
            匹配地址栏，然后引入对应的组件
        5.路径
            加/是绝对路径,直接加在端口号后面
            不加/是相对路径，相当于是加./，相对来说

*/

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
