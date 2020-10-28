/* 
    render props
        是一种技术
        1.作用和高阶组件一样实现状态和逻辑的复用
        2.是一个类组件，状态和逻辑复用的代码在这个类组件中，该类组件的渲染就只是执行了一个render函数
*/

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
