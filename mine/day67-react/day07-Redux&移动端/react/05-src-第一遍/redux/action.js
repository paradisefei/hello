/* 
    1.定义一个异步请求数据的需求
    2.定义一个同步获取数据的需求函数
    3.点击ray按钮的筛选需求
*/
import axios from "axios"

import {GET_USER_SUCCESS,SET_FILTER} from "./constants"
export function  getData(data){
    /* 
        1.同步的话就返回一个对象
    */
   return {
       type:GET_USER_SUCCESS,
       data
   }
}
export function getDataAsync(data) {
    console.log(1)
    /* 
        1.返回到redux组件
        2.List组件中得到这个函数并执行
        3.执行的最终结果是要获取我们要使用的数据并返回到redux组件中，所以就会用到dispatch函数
        4.需求中写异步请求的基本格式
        5.请求是异步，但获取数据是同步的
        6.异步请求要用到中间件
        return (dispatch) => {

        }
    */
    return dispatch => {
        axios
            .get('http://localhost:5000/search/users', {
                params: {
                    searchname: data
                }
            })
            .then(res => {
                /* 
                    1.得到数据，通过dispatch将数据返回到redux组件中
                    2.dispatch中的参数是一个需求，所以要定义一个获取数的同步需求函数
                
                */
                // console.log(res)
                // console.log(res.data.items)
                //   this.setState({
                //     users: res.data.items,
                //     loading: false
                //   })
                dispatch(getData(res.data.items));
            }).catch((err) => {
                console.log(err);
            })
    }
}
export function filterRay(data){
    return {
        type:SET_FILTER,
        data
    }
}
