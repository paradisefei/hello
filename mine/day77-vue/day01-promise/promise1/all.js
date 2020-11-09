/* 
    Promise.all()
    1.参数是一个数组，数组中保存的是多个promise实例化对象
    2.功能：返回一个promise1，如果数组中所有的promiseN对象都都成功，则promise1的状态为成功，值为所有promise对象的值组成的数组
        如果有一个promise对象失败，则promise1失败，失败的原因是第一个失败的promise的结果
    3.最终如何使用
        将该文件引入到HTML文件中
*/
