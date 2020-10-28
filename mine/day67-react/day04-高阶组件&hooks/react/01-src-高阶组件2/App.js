import React, { Component } from 'react'

import WithForm from "./WithForm"
import Login from "./pages/Login"
import Register from "./pages/Register"
/* 
  1.登录
  2.注册
  3.两个业务有实现逻辑有相同的部分，可以把共同的逻辑提取出来放在高阶组件中
*/

//调用函数得到高阶组件
const WithLogin = WithForm(Login);
const WithRegister = WithForm(Register);
export default class App extends Component {
  
  render() {
    return (
      <>
        <WithLogin msg="hello"></WithLogin>
        <WithRegister></WithRegister>
      </>
    )
  }
}
