/* 
    1.创建store对象
    2.createStore中要传入reducer函数
*/
import {createStore} from "redux"

import reducer from "./reducer"


const store = createStore(reducer)
console.log("store")
export default store;