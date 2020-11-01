import { connect } from "react-redux"
import Counter from "../Counter"
import { inc,dec } from "../redux/action.js"
// function mapStateToProps(state) {
//     /* 
//         1.在connect底层调用mapDispatchToState函数时，会监听到Redux中状态的变化，然后把最新的数据返回给到react组件中
//         2.return的内容会添加到props中，而不是整个替换
//     */
//     return {
//         count: state.count,
//         msg: "hello"
//     }
// }
// function mapDispatchToProps(dispatch) {
//     /* 
//         1.返回一个对象，对象中是一些方法
//         2.为了不暴露dispatch，可以将dispatch放在一个函数中保护起来
//     */
//     return {
//         onIncrement() {
//             dispatch(inc(2))
//         }
//     }
// }
const WithCounter = connect((state) =>
    ({
        count: state.count,
        msg: "hello"
    })
    /* 
        第二个参数的简写形式
            1.将需求函数传进来
            2.底层会自动进行封装
                function inc(data){
                    dispatch(inc(data))
                }
            3.外面这个函数的名字会用传进来的名字，底层会对里面的名字进行处理以免递归
            4.最终把外面这个函数返回给到props
            5.在props中执行和传入参数，最终dispatch的就是这个参数
    */
    , { inc,dec })(Counter);
export default WithCounter;