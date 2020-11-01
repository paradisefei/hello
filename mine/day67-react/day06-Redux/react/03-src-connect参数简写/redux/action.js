const action = {
    type: 'INCREMENT',
    data: 1
}
function inc(data) {
    /* 
        封装函数，调用这个函数返回对应的需求
    */
    return {
        type: 'INCREMENT',
        data: data
    }
}
function dec(data) {
    /* 
        封装函数，调用这个函数返回对应的需求
    */
    return {
        type: 'DECREMENT',
        data: data
    }
}
export { inc,dec };