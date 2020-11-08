/* 
    向后台请求数据，获取所有城市
*/
import axios from "axios"
export function getAllRegion(){
    return axios("/common/countryData",{
        method:"GET"
    })
}