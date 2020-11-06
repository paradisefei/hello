import React, { Component } from 'react'
import { NavBar, Icon, List, InputItem, WingBlank, Button } from 'antd-mobile';
import { Link } from "react-router-dom"
// console.log("login加载了")//应该写在模块顶层作用域才能测试出该模块是否执行，而不是写在组件中，模块执行了组件不一定执行，我们要的效果是整个文件都不执行

import "./login.css"
export default class Login extends Component {
    render() {

        return (
            <>
                {/* 顶部 */}
                <WingBlank size="sm" >
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" className="NavBar_icon" />}
                        onLeftClick={() => console.log('onLeftClick')}>
                        尚硅谷注册登录
                    </NavBar>

                    {/* 请输入手机号 */}
                    <List>
                        <InputItem
                            placeholder="请输入手机号"
                            ref={el => this.labelFocusInst = el}>
                            <div onClick={() => this.labelFocusInst.focus()}>
                                <div className="inputPhoneNum_icon">
                                    <span>+86</span>
                                    <Icon type="down" />
                                </div>
                            </div>
                        </InputItem>
                    </List>
                    {/* 请输入手机验证码 */}
                    <div className="btn_getVerify">
                        <InputItem
                            placeholder="请输入手机验证码"
                            ref={el => this.labelFocusInst = el}>
                        </InputItem>
                        <button>获取验证码</button>
                    </div>
                    {/* 登录按钮 */}
                    <WingBlank size="lg" >
                        <Button type="warning" disabled className="login_button">登录</Button>
                    </WingBlank>
                    {/* 登录按钮下的左右文字 */}
                    <div className="login_and_register">
                        {/* 
                            1.编程式页面跳转
                            2.第一个只是一个空连接
                            3.第二个会跳转到快速注册页面
                                1.地址为"/Register/register.js""
                            4.在路由列表中添加一项
                            5.使用flex布局
                        */}
                        <Link to="/login">账号密码登录</Link>
                        <Link to="/Register/register.js">手机快速注册</Link>
                    </div>
                    {/* 其他方式登录
                        1.不需要使用组件，自己写即可
                        2.3个盒子
                        3.使用flex布局
                    
                    */}
                    <div className="other-login">
                        <div className="other-login-line"></div>
                        <div>其它登录方式</div>
                        <div className="other-login-line"></div>
                    </div>
                    {/* 字体图标
                        1.链接的方式引入
                        2.flex布局
                    */}
                    <div className="other-login-iconfont">
                        <i className='iconfont icon-github'></i>
                        <i className='iconfont icon-wechat'></i>
                        <i className='iconfont icon-qq'></i>
                    </div>
                    {/* 注册界面底部文件 */}
                    <div className="login-bottom">
                        未注册的手机号验证后将自动创建硅谷账号, 登录即代表您已同意
                        <a href=''>硅谷隐私政策</a>
                    </div>
                </WingBlank>
            </>
        )
    }
}