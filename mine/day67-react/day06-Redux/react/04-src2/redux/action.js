/* 
    action其实就是一个对象
*/
function inc(data) {
    return {
        type: "INCREMENT", data
    }
}
function dec(data) {
    return {
        type: "DECREMENT", data
    }
}
//异步请求
function asyncInc(data) {
    /* 
        最终需要通过dispatch来触发reducer修改数据，所以这里可以返回一个函数
        异步请求时返回的不是一个对象，而是一个函数
            这个函数会接收到一个函数，就是我们redux组件上的dispatch函数
    */
    return dispatch => {
        setTimeout(() => {
            dispatch(inc(data))
        }, 2000)
    }
}
export { inc, dec,asyncInc }