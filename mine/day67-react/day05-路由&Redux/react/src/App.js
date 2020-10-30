import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect,NavLink ,withRouter} from "react-router-dom"

import Home from "./page/Home"
import Detail from "./page/Detail"
function App(props) {
    console.log(props)
    return (
        <>

            <Router>

                <Link to="/home">首页</Link>
                <br></br>
                <Link to="/detail/1">详情页</Link>
                <br></br>
                {/* <NavLink to="/home" activeClassName="selected">首页</NavLink>
                <br></br>
                <NavLink to="/detail" activeClassName="selected">详情页</NavLink> */}
                <br></br>
                {/* <NavLink to="/">空白页</NavLink> */}

                <Route path="/" component={Home}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/homee" component={Home}></Route>
                <Route path="/detail/:id" component={Detail}></Route>
                {/* 
                只要路径是/，然后代码执行到这一行时，就会把路径重定向到to的这个地址
            */}
                {/* <Redirect from="/" to="/detail"></Redirect> */}
            </Router>
        </>

    )
}
const WithApp = withRouter(App);
export default WithApp;