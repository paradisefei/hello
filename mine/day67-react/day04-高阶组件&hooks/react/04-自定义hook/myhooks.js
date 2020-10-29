/*
    自定义hook
        1.是一个函数
        2.内部会用到useState和useEffect两个hook函数
        3.可以在组件中使用，在函数组件中可以使用自定义hook
        4.可以在hook中复用状态和逻辑，然后在不同的组件中使用
*/
import React, { useState, useEffect } from "react"

export default function useMyHook() {
    /* 
        1.定义状态
            用到useState
        2.把逻辑放入到useEffect中
    */
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handle = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(() => {
        window.addEventListener("mousemove", handle)
        return () => {
            window.removeEventListener("mousemove",handle);
        }
    })

    return { x, y }
}

