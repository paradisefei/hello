import React, { Component } from 'react'


export default function WithForm(WrappedComponent) {
    /* 
        高阶组件
            是一个函数
            调用这个函数会返回一个类组件，把业务中共有的逻辑放在这个类组件中

 
    */
    return class extends Component {
        static displayName = "with" + WrappedComponent.name;

        state = {
            username: "",
            password: "",
            repassword:""
        }
        handle = (name) => {
            /* 
                根据name类型选择修改什么值
            */
            return (e) => {
                this.setState({
                    [name]: e.target.value
                })
            }
        }
        render() {
            console.log(this.props.msg)
            /* 
                this.state是一个对象
                解构之后还是一个对象
                效果是把对象中每个键值对一个一个拿出来放在组件标签中作为props的键值对传入到子组件中
            */
            return (
                <>
                    <WrappedComponent {...this.state} handle={this.handle}></WrappedComponent>
                </>
            )
        }
    }
}