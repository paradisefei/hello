/* 
    1.创建store对象
    2.createStore中要传入reducer函数
*/
import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"

import reducer from "./reducer"


const store = createStore(reducer,applyMiddleware(thunk));
console.log("store")
export default store;