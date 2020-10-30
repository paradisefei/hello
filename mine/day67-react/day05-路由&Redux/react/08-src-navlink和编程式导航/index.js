/* 
    编程式导航
        1.被Route控制渲染的组件，通过props可以获取到history,location和match三个属性
        2.history
            push
                在当前历史记录上加一条
            replace
                替换当前的历史记录
        3.路由参数
            在Route中定义
            在Link中传递

*/

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import "./app.css"

ReactDOM.render(<App />, document.getElementById('root'))
