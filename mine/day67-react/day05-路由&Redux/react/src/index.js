/* 
    withRouter
        1.只有被Route控制渲染的组件中，props对象上才能得到history，location和match
        2.withRouter组件引入的目的就是，即使组件不被Route控制也能获得这三个属性

*/

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router} from "react-router-dom"
import App from './App'

import "./app.css"

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'))
