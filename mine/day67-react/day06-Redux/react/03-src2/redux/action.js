/* 
    action其实就是一个对象
*/
function inc(data){
    return {
        type:"INCREMENT",data
    }
}
function dec(data){
    return {
        type:"DECREMENT",data
    }
}

export {inc,dec}