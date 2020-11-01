// import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, NavLink, withRouter,Switch } from "react-router-dom"

import Home from "./page/Home"
import Detail from "./page/Detail"


export default function App(props) {
    return (
        <Router>

            <Link to="/home">首页</Link>　
            <Link to="/detail">详情页</Link>

            {/* 设置默认路由
                打开服务器，由于没有加斜杠，所以会先当作文件处理，找不到文件，浏览器会在网址后面自动添加一个斜杠表示一个文件夹，然后找这个文件夹下的默认文件
            */}
                {/* <Route path="/" component={Home} exact></Route> */}
                <Route path="/home" component={Home} exact></Route>
                <Route path="/detail" component={Detail}></Route>
                {/* <Route path="/" component={Home}></Route> */}
                
                {/*             <Route path="/" component={Home}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/detail/:id" component={Detail}></Route> */}
        </Router>

    )
}