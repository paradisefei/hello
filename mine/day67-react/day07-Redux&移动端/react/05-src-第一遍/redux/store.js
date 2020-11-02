/* 
    1.创建store
    2.需要传入reducer函数
        导入
    3.引入中间件实现异步请求
    4.合并reducer
*/
import { createStore,applyMiddleware,combineReducers } from 'redux';
import thunk from "redux-thunk"
import userReducer from "./reducer/userReducer";
import filterReducer from "./reducer/filterReducer";
const rootReducer = combineReducers({
    userReducer,
    filterReducer
})
const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;