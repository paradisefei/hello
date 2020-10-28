/* 
    高阶组件
*/
import React, { Component } from 'react'

export default function withForm(WithComponent) {
    
    /* 
        函数
        函数中返回一个匿名组件
    */
    return class extends Component {
        static displayName = "with" + WithComponent.name
        /* 
             最终要渲染组件的父组件
             状态和共同的逻辑
        */
        state = {
            username: '',
            password: ''
        }

        handleChange = name => {
            return e => {
                this.setState({
                    [name]: e.target.value
                })
            }
        }

        render(){
            // console.log({...this.state})
            /* 
                最终渲染的是实参组件
                将数据通过props传给实参组件
            */
            return (
                <WithComponent
                    {...this.state}
                    handleChange={this.handleChange}
                >
                </WithComponent>
            )
        }
    }
}