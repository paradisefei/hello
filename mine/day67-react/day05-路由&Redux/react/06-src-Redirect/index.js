/* 
    Redirect
        1.重定向
        2.有from和to两个属性，如果请求的时from这个地址，最后会跳转到to的地址
        3.页面加载时Route也是会去比对的，如果满足条件就会重定向发生跳转

*/

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
