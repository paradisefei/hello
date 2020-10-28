import React, { Component } from 'react'



export default class Register extends Component {
    // #region
    // state = {
    //     username: "",
    //     password: "",
    //     repassword: ""
    // }
    // handle = (name) => {
    //     /* 
    //         根据name类型选择修改什么值
    //     */
    //     return (e) => {
    //         this.setState({
    //             [name]: e.target.value
    //         })
    //     }
    // }
    // #endregion
    render() {
        const {username,password,repassword,handle} = this.props;
        return (
            <>
                <h1>注册</h1>
                <div>{username}</div>
                <div>{password}</div>
                <div>{repassword}</div>
        用户名:<input type="text" value={username} onChange={handle("username")}></input>
                <br></br>
        密　码:<input type="password" value={password} onChange={handle("password")}></input>
        <br></br>
        确认密码:<input type="password" value={repassword} onChange={handle("repassword")}></input>
            </>
        )
    }
}