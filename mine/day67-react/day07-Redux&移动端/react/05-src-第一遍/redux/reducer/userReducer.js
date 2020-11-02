/* 
    1.reducer是纯函数
    2.state需要初始化 
*/
import { GET_USER_SUCCESS} from "../constants"
const initState = {
    //初始化数据，未来返回回来的数据是一条一条的，最终会将这些数据批量进行渲染，所以会将数据存入到数组中，因此可以在state初始化的时候定义一个属性是一个数组
    user: []
}
export default function userReducer(state = initState, action) {
    switch (action.type) {
        case GET_USER_SUCCESS:
            /* 
                1.获取数据成功时，action中的数据就是我们需要的数据
                2.这是返回给到redux组件中的数据
            */
            return {
                ...state,
                user: action.data
            }
        default:
            return state;
    }
}