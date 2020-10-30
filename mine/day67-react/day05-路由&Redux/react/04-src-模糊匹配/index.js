/* 
    模糊匹配
        1.默认情况下所有的Route都会进行匹配，然后把匹配上的所有都进行渲染
        2.Link中的地址是显示在地址栏的，Route中的地址去跟Link中的地址匹配，如果Route中的地址是Link中地址的头部则匹配上
            每一个/为一个单位

*/

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
