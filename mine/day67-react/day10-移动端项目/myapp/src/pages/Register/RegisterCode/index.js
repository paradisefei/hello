/* 
    硅谷注册输入手机验证码界面
*/
import React, { Component } from 'react'
import { NavBar, Icon, List, InputItem, WingBlank, Button } from 'antd-mobile';
import { createForm } from "rc-form"

import msg from "./msg.png"
import { getVerifyCode, isCodeCorrect } from "../../../api/registerNext"
import "./index.css"
class RegisterCode extends Component {
    /* 
        1.该页面挂载成功时向后台请求发送验证码
        2.获取验证码按钮的样式
            1.5s时可点击，样式为红色
            2.小于5s时不可点击，样式为灰色
            3.开关
        3.给按钮注册点击事件
        4.如何让button禁用
        5.校验输入验证码
    */
    state = {
        second: 5,
        isShow: true,
        isDisable: true
    }
    componentDidMount() {
        /* 
             1.后台发送验证码，所以要发送请求
             2.该方法需要参数：号码
             3.页面刚挂载成功时，按钮是不可以点击的

             从密码界面返回到验证码界面时，出现错误

        */
        this.downCount();
        const phone = this.props.location.state.phone
        getVerifyCode(phone);
    }
    /* 获取验证码按钮点击事件 */
    getVCode = () => {
        /* 
         1.如果时间小于5s，不可点击，直接返回，相当于禁用的效果
        */
        if (this.state.second < 5) return;
        this.downCount();
    }
    // 按钮的倒计时
    downCount = async () => {
        this.state.isShow = false;
        let second = this.state.second;
        const res = await getVerifyCode(this.props.location.state.phone)
        if (res.data.success) {
            this.timer = setInterval(() => {
                second--;
                this.setState({
                    second: second
                })
                if (second < 1) {
                    this.setState({
                        second: 5,
                        isShow: true
                    })
                    clearInterval(this.timer)
                    return
                }
            }, 1000)
        }
    }
    //校验输入验证码
    validator = (rules, value, cd) => {
        let isDisable = true;
        if (/^\d{6,6}$/.test(value)) {
            isDisable = false
        }
        this.setState({
            isDisable
        })
    }
    //点击按钮跳转到填写密码界面
    toPassword = async () => {
        /* 
            只有验证码正确的情况才能实现跳转
        */
        const phone = this.props.location.state.phone;
        const code = this.props.form.getFieldValue("phoneCode");
        const res = await isCodeCorrect(phone, code);
        if (res.data.success) {
            this.props.history.replace("/register/password");
        }
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <>
                {/* 顶部 */}
                <WingBlank size="sm" >
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" className="NavBar_icon" />}
                        onLeftClick={() => this.props.history.replace("/register/phone")}>
                        尚硅谷注册
                    </NavBar>
                    <div className='img'>
                        <img src={msg} alt='' />
                    </div>
                    <WingBlank size="lg" >
                        <p style={{
                            margin: "20px"
                        }}>
                            我们将以短信或电话的形式将验证码发送给您，请注意接听0575/025/0592/010等开头的电话
                        </p>
                    </WingBlank>
                    <div className="btn_getVerify">
                        <InputItem
                            placeholder="请输入手机验证码"
                            ref={el => this.labelFocusInst = el}
                            {...getFieldProps('phoneCode', {
                                rules: [
                                    {
                                        validator: this.validator
                                    }
                                ]
                            })}
                        >
                        </InputItem>
                        {/* <button className="canGet">获取验证码</button> */}
                        {/* <button className="canNotGet">{this.state.second + "s后重发"}</button> */}
                        <button className={this.state.isShow ? "canGet" : "canNotGet"} onClick={this.getVCode}>{this.state.second + "s后重发"}</button>
                    </div>
                    <WingBlank size="lg" >
                        <Button type="warning" disabled={this.state.isDisable} className="login_button" onClick={this.toPassword}>下一步</Button>
                    </WingBlank>
                    <WingBlank size='lg' style={{ margin: "20px" }}>
                        遇到问题了?
                        <a href=''>请联系客服</a>
                    </WingBlank>
                </WingBlank>
            </>
        )
    }
}
export default createForm()(RegisterCode);