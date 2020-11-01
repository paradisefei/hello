/* 
    redux基础使用
        1.redux不依赖于任何框架存在，它自己也是正常的程序，用于保存数据，还可以从redux中获取数据
        2.store
            管理
            传入需求
            执行reducer函数
        3.action
            需求
            是一个对象
        4.reducer函数
            实现需求
        5.我就写在入口文件就行了
        6.导入redux包
        7.过程
            1.创建store
                要想store中传入reducer函数，所以要先写reducer函数
            2.定义reducer函数
                state初始化
                action
                    第一次加载到store会触发reducer执行时，此时并没有传入我们自己定义的action需求，代码内部会生成一个不可能和case条件相同的action.type字符串，这一次的执行就会匹配到default，最终的结果就是给redux中的state数据初始化
*/

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
// import App from './App'


// ReactDOM.render(<App />, document.getElementById('root'))
// //reducer函数的初始化数据
let initState = {
    count:0
}
//创建store
const store = createStore(counter);
//定义reducer函数
//reducer函数中return的是什么，redux中的state就是什么，可以理解redux中原本什么都没有，即使它原本有什么，只要return了，原本有的东西就全没了，变成新的return回去的东西了
function counter(state = initState,action){
    switch(action.type){
        case "INCREMENT":
            return {
                count:state.count + action.data
            }
        default:
            return state;
    }
}
//定义需求，需求本质就是一个对象，如果有多个需求怎么办
//比如说要+1，并不是在这里加的，这里的需求只是指明了要加和加的是1，具体的执行是在reducer函数中去执行的
const countAction = {
    type:"INCREMENT",data:1
}
//获取redux数据
//得到的redux数据是一个对象，而不是把initState整个放进到redux数据对象中
console.log(store.getState())

/* 
    store.dispatch()方法触发reducer执行
        1.功能
            触发reducer函数的执行
        2.参数
            传入需求
*/
store.dispatch(countAction);
console.log(store.getState())