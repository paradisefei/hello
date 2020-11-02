import { createStore, applyMiddleware,combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import  filterXXX  from './reducer/filterXXX.js';
import  userXXX  from './reducer/userXXX';
// 创建store,传入reducer
import users from './reducer/userXXX'
// 导入redux-thunk,可以在redux中,写异步请求
import thunk from 'redux-thunk'

/* 
    1.导入所有reducer函数
    2.合并所有的reducer函数
    3.这样子合并的话，执行reducer函数后，返回值给到combineReducers中，然后再把combineReducers中的每个键值对返回到redux组件中，再从那个数据的基础上来获取和操作数据
*/
// const rootReducer = combineReducers({
//     filterXXX:filterXXX,
//     userXXX:userXXX
// })
const rootReducer = combineReducers({
    filterXXX,
    userXXX
})

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
  ))
export default store
