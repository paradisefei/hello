import React from "react"

export default class Test extends React.Component{
    constructor(){
        super();
        console.log("我是Test中的constructor函数")
    }

    render(){
        console.log("我是Test中的render函数")
        return (<>
            <div>我是Test组件</div>
        </>)
    }
    componentDidMount(){
        console.log("我是Test中的componentDidMount函数")
    }
    componentDidUpdate(){
        console.log("我是Test中的componentDidUpdate函数")
    }
    componentWillUnmount(){
        console.log("我是Test中的componentWillUnMount函数")
    }
}