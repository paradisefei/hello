/* 
    redux
        1.创建store
            绑定reducer函数
            导包
            createStore()
            传参
        2.定义reducer函数
            传入action
        3.action就是一个对象，提供的一个需求

*/

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from "redux"


ReactDOM.render(<App />, document.getElementById('root'))

let initState = {
    count:0
}
//1.创建store
const store = createStore(counter);
/* 
    2.定义reducer
        参数
            state:修改前的最新数据，初始化
            action:需求
                在初次调用时，action会得到一个字符串，但这个字符串不可能回何case中的匹配，所以最终会返回默认的数据，也就是说此时并不是你传进来的action
        基本解构为switch语句,和action中的type匹配
*/

function counter(state = initState, action) {
    switch (action.type) {
        case "ADD":
            /* 
                在原来的数字上加1
            */
            return {
                ...state,
                count:state.count + 1
            }
        default:
            return state;
    }
}
//得到数据
console.log(store.getState())

/* 
    需求
*/
const countAction = {
    type:"ADD",
    data:1
}
//执行reducer函数
store.dispatch(countAction)
// store.dispatch()

console.log(store.getState())