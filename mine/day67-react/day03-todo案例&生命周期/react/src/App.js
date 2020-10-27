import React from "react"

import Son from "./Son"


export default class App extends React.Component {

/*     state = {
        count: 0,
        name:"张三"
    } */
/*     handle = () =>{
        this.setState({
            count: this.state.count + 1 
        })
    } */

    render() {
        /* 
            App中的状态改变了，会重新渲染，子组件Son也会重新渲染
            App中的状态没有改变，也会重新渲染，子组件Son也会重新渲染
            现在有一个问题 
                父组件什么时候会重新渲染，也就是说一个组件在什么情况下会被重新渲染
                    有新的props
                    执行了setState函数
                        是不是只要执行了setState函数就会重新渲染
                        还有就是重新创建数组，把修改后的数组赋给state中，内部的比较是怎么比较的
                            是因为很多第三方是继承了PureComponent，这里面会对状态中的两个值进行比较，如果比较得到前后值是一样的就不让重新渲染，但它进行的是浅比较
                    执行了forceUpdate函数
            父组件重新渲染时其中的子组件也重新渲染了，它没有得到新的props，也没有执行setState
                父组件重新渲染时，传入的props是一个新的对象，所以子组件也会重新渲染，它是得到了新的props的
            每一个组件的实例化对象上都有一个props的属性，是一个对象
            
        */
        console.log("我是App中的render函数")
        // console.log("this.props",this.props)
        console.log("App的this",this)
        return (
            <>
                <Son a="hello"></Son>
                <button onClick={this.handle}>点击</button>
            </>
        )
    }
}