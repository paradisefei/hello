import React, { Component } from 'react'

import MouseUrl from "../assets/mouse.gif"
//引入自定义hook
import useMyHook from "../myhooks.js"


export default function Mouse() {

    let { x, y } = useMyHook()
    return (
        <>
            <img src={MouseUrl} width={100} style={{ position: "absolute", left: x, top: y }}></img>
        </>
    )

}