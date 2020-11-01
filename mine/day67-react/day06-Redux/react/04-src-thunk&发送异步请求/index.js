/* 
    redux写异步请求
        1.使用中间件
        2.在store中使用中间件
        3.在action中写异步请求函数，导出
            在这个异步请求中最终dispatch的是inc这个增加的函数，所以在reducer中不需要另加实现

*/

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


ReactDOM.render(<App />, document.getElementById('root'))

