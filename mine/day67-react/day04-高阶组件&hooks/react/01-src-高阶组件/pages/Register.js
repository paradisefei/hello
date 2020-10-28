import React, { Component } from 'react'

export default class Register extends Component {
  /* 
    接收从父组件中传入的参数

  */
   
  render() {
    const {username,password,handleChange} = this.props;
    console.log(username)
    // console.log(username,password,handleChange)
    return (
      <div>
        <h1>注册</h1>
        <form>
          用户名:
          <input
            type='text'
            value={username}
            onChange={handleChange("username")}
          />
          <br />
          密码:
          <input
            type='password'
            value={password}
            onChange={handleChange('password')}
          />
          <br />
          <input type='button' value='注册' />
        </form>
      </div>
    )
  }
}
