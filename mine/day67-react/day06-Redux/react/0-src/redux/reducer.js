/* 
    定义reducer函数
    reducer函数只是一个函数而已，并不需要导入包
    两个参数
        state需要初始化
        action不是从reducer中传进去的，而是从dispatch中传进去的，在定义的时候这里只是一个形参而已
*/
const initState = {
    count:0
}
export default function reducer(state = initState,action){
    console.log("reducer");
    switch(action.type){
        case "INCREMENT":
            return {
                count:state.count + action.data
            }
        case "DECREMENT":
            return {
                count:state.count - action.data
            }
        default:
            return state;
    }
}