import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom"

import Home from "./page/Home"
import Detail from "./page/Detail"
export default function App() {
    return (
        <>

            <Router>

                <Link to="/home">首页</Link>
                <br></br>
                <Link to="/detail">详情页</Link>
                <br></br>
                <Link to="/">空白页</Link>

                <Route path="/" component={Home}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/homee" component={Home}></Route>
                <Route path="/detail" component={Detail}></Route>
                {/* 
                只要路径是/，然后代码执行到这一行时，就会把路径重定向到to的这个地址
            */}
                <Redirect to="/detail"></Redirect>
            </Router>
        </>

    )
}
