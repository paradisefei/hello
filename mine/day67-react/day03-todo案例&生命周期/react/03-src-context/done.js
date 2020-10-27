/* 
    context第二种实现
        1.扩展一个类的静态属性
        2.把context对象赋给该属性
        3.底层会在组件实例上添加一个context属性保存这个值
*/
import React from "react"
import context from "./context"
export default class Done extends React.Component{
    static contextType = context;
    render(){
        console.log(this)
        return (
        <>
        <div>{this.context}</div>
        </>)
    }
}