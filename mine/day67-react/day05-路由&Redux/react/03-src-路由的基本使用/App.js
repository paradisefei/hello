import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from "react-router-dom"

import Home from "./page/Home"
import Detail from "./page/Detail"
export default function App() {
    return (
            <Router>
                <Link to="/home">首页</Link>
                <br></br>
                <Link to="/detail">详情页</Link>

                <Route path="/home" component={Home}></Route>
                <Route path="/detail" component={Detail}></Route>

            </Router>
        )
}
