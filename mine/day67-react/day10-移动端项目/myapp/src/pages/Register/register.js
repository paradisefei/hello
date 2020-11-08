import React, { Component } from 'react'
import { createForm } from "rc-form"
import { NavBar, Icon, List, InputItem, WingBlank, Button, Modal, Toast } from 'antd-mobile';


import { getDataNext } from "../../api/registerNext"
const alert = Modal.alert
class Register extends Component {

    state = {
        inputValue: "",
        isDisable: true
    }
    /* 
        1.输入框校验
            1.正则校验，输入11位数字符合号码格式时，按钮可以点击
            2.导包rc-form，解构得到createForm
            3.props的form属性中可以解构出getFieldProps
            4.固定格式，定义一个函数，在函数中进行校验
    
    */
    componentDidMount() {
        /* 
            1.弹窗
                1.使用库中组件
        */
        if (!this.props.location.state) {
            alert(
                '注册协议及隐私政策',
                <span>
                    在您注册成为硅谷用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，
          <span className='policy-text'>
                        请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：
          </span>
                </span>,
                [
                    { text: '不同意', onPress: () => this.props.history.replace('/login') },
                    { text: '同意', style: { backgroundColor: 'red', color: '#fff' } }
                ]
            )
        }

    }
    //让表单变成受控组件
    // handleInputValue = (e) => {
    //     console.log(e)
    //     const value = e.target.value;
    //     console.log(value)
    //     this.setState({
    //         inputValue: value
    //     })
    // }
    //输入手机号时进行校验
    //在input中字段发生变化时就会触发，所以不需要使用受控组件
    validator = (rules, value, cb) => {
        // console.log(rules);
        // console.log(value);
        // console.log(cb);
        /* 
            1.正则校验
                以1开头
                第二位数是出2以外
                后面9位任意数
            2.满足正则校验时，按钮禁用解除
                按钮的disable属性动态变化
                保存在state数据中
            3.获取到表单中的数据，所以要让表单变成受控组件
        */
        //    const res = /^1[3,9]\d{9}$/.test(value);
        //    console.log(res);
        let isDisable = true;
        if (/^1[3456789]\d{9}$/.test(value)) {
            /* 
                1.满足正则，则按钮禁用接触
                2.将状态中的值修改为false
            */
            isDisable = false;
        }
        this.setState({
            isDisable
        })
    }
    //处理点击下一步事件函数
    handleNext = async () => {
        const phoneNum = this.props.form.getFieldValue("phoneNumber");
        console.log(phoneNum);
        /* 
            1.请求数据
                1.封装api函数
                2.返回数据并打印
                3.要把手机号码一并发送到后端
            2.如果手机号已存在，则显示手机号已注册弹窗
            3.如果手机号不存在，则显示将要发送验证码弹窗
            4.在进入到填写验证码页面，该页面挂载成功时就发送验证码
        */
        const res = await getDataNext(phoneNum);
        console.log(res)
        if (res.data.success) {
            alert(
                '',
                "我们将短信验证码发送到了手机号" + phoneNum,
                [
                    { text: '取消', },
                    {
                        text: '确认', style: { backgroundColor: 'red', color: '#fff' }, onPress: () => this.props.history.replace('/register/code', {
                            phone: phoneNum
                        })
                    }
                ]
            )
        } else {
            Toast.fail('手机号已经注册了,请直接登录', 3)
        }
    }
    //跳转到选择国家和地区界面
    toCountry = () => {
        this.props.history.replace("/register/country")
    }
    render() {
        /* 
            注册界面
            1.组件直接使用登录界面的东西
            2.弹窗
                1.在该页面挂载成功时弹窗
            发送手机号给后台
                1.注册按钮点击事件
                    点击按钮，将手机号发送到后台请求数据，得到后台返回的数据并打印
                    弹窗组件
        */
        // console.log(this.props.location.state)
        const newCodeState = this.props.location.state;
        console.log(newCodeState)
        const { getFieldProps } = this.props.form;
        return (
            <>
                {/* 顶部 */}
                <WingBlank size="sm" >
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" className="NavBar_icon" />}
                        onLeftClick={() => this.props.history.replace("/login")}>
                        尚硅谷注册
                    </NavBar>
                    {/* 请输入手机号 */}
                    <List>
                        <InputItem
                            {...getFieldProps('phoneNumber', {
                                rules: [
                                    {
                                        validator: this.validator
                                    }
                                ]
                            })}
                            clear
                            placeholder="请输入手机号"
                            ref={el => this.labelFocusInst = el}>
                            <div onClick={this.toCountry}>
                                <div className="inputPhoneNum_icon">
                                    {/* <span>+86</span> */}
                                    <span>+{newCodeState ? newCodeState.code : "86"}</span>
                                    <Icon type="down" />
                                </div>
                            </div>
                        </InputItem>
                    </List>
                    {/* 下一步按钮 */}
                    <WingBlank size="lg" >
                        <Button type="warning" disabled={this.state.isDisable} className="login_button" onClick={this.handleNext}>下一步</Button>
                    </WingBlank>
                </WingBlank>
            </>
        )
    }
}
export default createForm()(Register);