/* 
    
*/
import axios from "axios"

//封装函数验证手机号是否被注册过
export function getDataNext(phone){
    /* 
        1.axios请求
        2.格式
        3.要把手机号传到后端去
            如果手机号存在，则保存
    */
   return axios("/regist/verify_phone",{
       method:"POST",
       data:{
        phone
       }
   })
}
//向后端请求发送验证码
export function getVerifyCode(phone){
    return axios("/login/digits",{
        method:"POST",
        data:{
         phone
        }
    })
}

//验证验证码是否正确
export function isCodeCorrect(phone,code){
        return axios("/regist/verify_code",{
            method:"POST",
            data:{
                phone,
                code
            }
        })

}