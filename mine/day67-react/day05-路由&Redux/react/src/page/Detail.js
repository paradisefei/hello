import React, { Component } from 'react'
export default function Detail(props) {
    // console.log(props)
    return (
        <>
            <h1>详情页</h1>
            <button onClick={() => {
                // props.history.push("/home");
                props.history.replace("/home");
            }}>按钮</button>
        </>

    )
}