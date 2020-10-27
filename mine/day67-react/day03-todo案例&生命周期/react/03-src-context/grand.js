import React from "react"
import context from "./context"
export default class Grand extends React.Component{

    render(){
    
        return (
        <>
        <context.Consumer>{(data) => {
            return <div>{data}</div>
        }}</context.Consumer>
        <div>fucking</div>
        </>)
    }
}