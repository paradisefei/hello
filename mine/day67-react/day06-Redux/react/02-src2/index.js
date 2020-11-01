/* 
    react中使用redux
        1.导包 react-redux
        2.connect函数将redux和react联系起来
        3.先写redux,再写react
            所说的先写redux再写react是说在进行redux管理的时候按这样的顺序进行，而不是叫你一上来就先写，啥也没有的时候就写
    需求
        1.点击按钮，实现递增
    逻辑
        1.先写redux

    1.直接操作的是react组件中的东西，里面有个很重要的属性props
    2.props接收从redux中传过来的数据，有变量和方法
        变量用来显示
        方法中，本质上就是使用dispatch来触发reducer函数执行，改变redux中的数据，然后程序中所有使用到该数据的地方就都被修改了
    3.返回就是从connect第一次执行时的两个参数处返回的(哪个组件被connect函数处理了，就可以用到Redux中的数据了)

*/

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


ReactDOM.render(<App />, document.getElementById('root'))
// //reducer函数的初始化数据
// let initState = {
//     count:0
// }
// //创建store
// const store = createStore(counter);
// //定义reducer函数
// //reducer函数中return的是什么，redux中的state就是什么，可以理解redux中原本什么都没有，即使它原本有什么，只要return了，原本有的东西就全没了，变成新的return回去的东西了
// function counter(state = initState,action){
//     switch(action.type){
//         case "INCREMENT":
//             return {
//                 count:state.count + action.data
//             }
//         default:
//             return state;
//     }
// }
// //定义需求，需求本质就是一个对象，如果有多个需求怎么办
// //比如说要+1，并不是在这里加的，这里的需求只是指明了要加和加的是1，具体的执行是在reducer函数中去执行的
// const countAction = {
//     type:"INCREMENT",data:1
// }
// //获取redux数据
// //得到的redux数据是一个对象，而不是把initState整个放进到redux数据对象中
// console.log(store.getState())

// /* 
//     store.dispatch()方法触发reducer执行
//         1.功能
//             触发reducer函数的执行
//         2.参数
//             传入需求
// */
// store.dispatch(countAction);
// console.log(store.getState())