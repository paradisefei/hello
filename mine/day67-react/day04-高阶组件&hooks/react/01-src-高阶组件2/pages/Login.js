import React, { Component } from 'react'



export default class Login extends Component {

    /* 
        登录
            1.页面
            2.变成受控组件

    */
    //    #region

    // state = {
    //     username: "",
    //     password: ""
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
        /* 
            解构得到高阶组件中传过来的数据
        */
       const {username,password,handle} = this.props;
       console.log(this.props.msg)
        return (
            <>
                <h1>登录</h1>
                <div>{username}</div>
                <div>{password}</div>
        用户名:<input type="text" value={username} onChange={handle("username")}></input>
                <br></br>
        密　码:<input type="password" value={password} onChange={handle("password")}></input>
            </>
        )
    }
}