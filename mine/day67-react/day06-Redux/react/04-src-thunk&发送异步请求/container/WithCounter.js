/* 
    1.把原本在Counter中和connect中定义函数的相关代码放在这里
*/
import { connect } from "react-redux"
import Counter from "../Counter"
import { inc,dec,asyncInc } from "../redux/action.js"


/* 
    connect
        第一个参数
            是一个函数
            执行这个函数，监听到state的变化，将state数据返回给redux组件
            简写一个箭头函数
        第二个参数
            是一个函数
            最终会返回一个对象
            返回的对象最终会添加到props上
            最终会执行dispatch方法触发reduce实现需求
            直接简写一个对象

*/
const WithCounter = connect((state) => {
    console.log(state);
    return {
        count: state.count + 1
    }
},
    { inc,dec,asyncInc }
)(Counter);

export default WithCounter