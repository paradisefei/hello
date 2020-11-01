/* 
    action其实就是一个对象
*/
function inc(data){
    return {
        type:"INCREMENT",data
    }
}

export {inc}