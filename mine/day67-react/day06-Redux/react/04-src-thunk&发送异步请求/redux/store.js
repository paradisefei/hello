/* 
    1.创建store
    2.store需要传入reducer函数
*/
import { createStore,applyMiddleware } from 'redux'
import reducer from './reducer'
//这个thunk是一个函数
import thunk from "redux-thunk"

const store = createStore(reducer,applyMiddleware(thunk));

export default store