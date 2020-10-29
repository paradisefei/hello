import React, { Component } from 'react'

import CatUrl from "../assets/cat.gif"
//引入自定义hook
import useMyHook from "../myhooks.js"

export default function Cat() {
    /* 
        使用自定义hook
    */
   let { x, y } = useMyHook();
    x += 200;
    y -= 50;
    return (
        <>
            <img src={CatUrl} style={{ position: "absolute", left: x, top: y }}></img>
        </>
    )

}