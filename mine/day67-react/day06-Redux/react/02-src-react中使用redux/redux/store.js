/* 
    1.创建store
    2.store需要传入reducer函数
*/
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

export default store