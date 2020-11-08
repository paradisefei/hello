/* 
    注册中设置密码界面
*/
import React, { Component } from 'react'
import { NavBar, Icon, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from "rc-form"

import msg from "./msg.png"
import "./index.css"
class RegisterPassword extends Component {
    state = {
        isOpen: false,
        isDisable: true
    }
    //文本框右侧眼睛开闭控制的事件处理函数
    handleEyeOpen = () => {
        const isOpen = this.state.isOpen;
        this.setState({
            isOpen: !isOpen
        })
    }
    //校验
    validator = (rules, value, cb) => {
        let isDisable = true;
        if (/^[\w\d]{8,20}$/.test(value)) {
            isDisable = false;
        }
        this.setState({
            isDisable
        })
    }
    //点击下一步事件函数
    handleNext = () => {
        this.props.history.replace("/home")
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
                        onLeftClick={() => this.props.history.replace("/register/code")}>
                        尚硅谷注册
                    </NavBar>
                    <div className='img'>
                        <img src={msg} alt='' />
                    </div>
                    <p style={{
                        textAlign: "center"
                    }}>请设置登录密码</p>
                    {/* 填入密码的文本框及眼睛 */}
                    <WingBlank size="lg" >
                        <WhiteSpace size="xs" />
                        <InputItem
                            {...getFieldProps('focus', {
                                rules: [
                                    {
                                        validator: this.validator
                                    }
                                ]
                            })}
                            clear
                            type={this.state.isOpen ? "text" : "password"}
                            placeholder="请输入8~20位密码"
                            ref={el => this.inputRef = el}
                            extra={<span onClick={this.handleEyeOpen} className={this.state.isOpen ? "iconfont icon-yanjing" : "iconfont icon-close-eye"}></span>}
                        ></InputItem>
                        <div style={{ padding: "20px" }}>密码由8-20位字母、数字或半角符号组成，不能是10位以下纯数字/字母/半角符号，字母需区分大小写</div>
                    </WingBlank>
                    <WingBlank size="lg" >
                        <WingBlank size="lg" >
                            <Button type="warning" disabled={this.state.isDisable} className="login_button" onClick={this.handleNext}>下一步</Button>
                        </WingBlank>
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
export default createForm()(RegisterPassword);