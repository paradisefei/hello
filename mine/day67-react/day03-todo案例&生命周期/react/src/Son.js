import { Component } from 'react'
export default class Son extends Component {

    state = {
        name:"李四",
        countSon:0
    }
    shouldComponentUpdate(nextProps, nextState) {
        /* 
            参数
                nextProps
                    1.是一个对象
                    2.保存的是新传入的props
                nextState
                    1.是一个对象
                    2.保存的是更新后的state
            这个函数只有在更新阶段才会执行，创建阶段不会执行
        */
        console.log("this.Props", this.props)
        console.log("nextProps", nextProps)
        console.log("nextProps===this.Props", nextProps===this.Props)
        console.log("this.State", this.state)
        console.log("nextState", nextState)
        console.log("nextState===this.State", nextState===this.State)
        if (this.state.count === nextState.count) {
            return false
        }
        else
            return true
    }
    render() {
        console.log("Son的this",this)
        console.log("我是Son中的render函数")
        return (
            <>
                <div>我是Son组件</div>
            </>
        )
    }
}
