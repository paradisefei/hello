import { connect } from "react-redux"
import action from "./redux/action.js"



function Counter(props) {
    /* 
        1.Counter组件中要用到redux数据
        2.connect高阶组件
        3.固定格式写redux代码
        4.定义一个函数放在connect中第一次调用的参数
            如果没有给参数，那么这里只能拿到一个dispatch方法
            如果想拿数组，则要定义函数
    */
    console.log(props)
    return (
        <>
            <h3>{props.count}</h3>
            <button onClick={() => {
                /* 
                    依然要使用dispatch方法触发reducer函数的执行
                */
                props.onincrement(action)
                console.log(props)
            }}>按钮+1</button>
        </>
    )
}
// console.log(props)
function mapStateToProps(state) {
    /* 
        1.connect第一次执行函数时的第一个参数
        2.return的内容会添加到props身上而不是整个替换
    */
    return {
        count: state.count + 1
    }
}
function mapDispatchToProps(dispatch) {
    /* 
        1.connect第一次执行函数时的第二个参数
        2.包裹dispatch函数，以免其暴露
        3.return的内容会代替原本props中的dispatch函数
    */
    return {
        onincrement(){
            dispatch(action);
        }
    };
}

const WithCounter = connect(mapStateToProps,mapDispatchToProps)(Counter);
export default WithCounter