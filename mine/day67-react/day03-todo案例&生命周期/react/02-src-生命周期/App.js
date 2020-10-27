import React from "react"
import Test from "./Test"

export default class App extends React.Component{
    constructor (){
        super();
        this.state = {
            count:0
        }
        console.log("我是App中的constructor函数")
    }
    handle = () => {
        this.setState({
            count:this.state.count + 1
        })
    }
    render() {
        console.log("我是App中的render函数")
        return (
            <>
            {/* 满足某个条件时Test组件（App的子组件）更新 */}
                {/* {this.state.count%2===0&&<Test></Test>} */}
                <Test></Test>
                <div>{this.state.count}</div>
                <button onClick={this.handle}>按钮</button>
            </>
        )
    }
    componentDidMount(){
        console.log("我是App中的componentDidMount函数")
    }
    componentDidUpdate(){
        console.log("我是App中的componentDidUpdate函数")
    }

}