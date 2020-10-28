/* 
    Hooks
        1.函数组件不能定义状态
        2.钩子函数就是在函数组件中模拟出的一系列生命周期钩子函数
        3.api
            useState
                数组解构，左边数组中是为右边这个位置的值取的一个变量名，习惯性成对，第一个是一个变量，第二个是一个方法
            useEffect
*/

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
