import React, { Component } from 'react'

import MouseUrl from "../assets/mouse.gif"


export default class Mouse extends Component {


    render() {
        /* 
            1.引图片
            2.数据传过来之后
        */
        const { x, y } = this.props.position;
        return (
            <>
                <img src={MouseUrl} width={100} style={{ position: "absolute", left: x, top: y }}></img>
            </>
        )
    }
}