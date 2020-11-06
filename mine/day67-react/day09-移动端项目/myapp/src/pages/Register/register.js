import React, { Component } from 'react'
import { NavBar, Icon, List, InputItem, WingBlank, Button, Modal } from 'antd-mobile';
const alert = Modal.alert
export default class Register extends Component {
    componentDidMount() {
        /* 
            1.弹窗
                1.使用库中组件
        */
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
    render() {
        /* 
            注册界面
            1.租界直接使用登录界面的东西
            2.弹窗
                1.在该页面挂载成功时弹窗
        */
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
                    {/* 下一步按钮 */}
                    <WingBlank size="lg" >
                        <Button type="warning" disabled className="login_button">下一步</Button>
                    </WingBlank>
                </WingBlank>
            </>
        )
    }
}