import React, { Component } from 'react'
import { Link } from "react-router-dom"
console.log("home加载了")
export default class Home extends Component {
    render() {
        return (
            <>
                <div>
                    home
            </div>
                <h1>
                    <Link to="/login">注册</Link>
                </h1>
            </>
        )
    }
}