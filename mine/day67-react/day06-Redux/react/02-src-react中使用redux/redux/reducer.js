/* 
    1.是一个函数
    2.两个参数，需要给state初始化
*/
let initState = {
    count: 0,
    msg: 'hehe',
    arr: [1, 2, 3]
}
export default function reducer(state = initState, action) {

    // console.log(action)
    console.log(state)
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + action.data
                // count: state.count + 1
            }
        default:
            return state
    }
}