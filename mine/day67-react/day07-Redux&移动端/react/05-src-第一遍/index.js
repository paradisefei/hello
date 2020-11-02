/* 
    1.使用redux管理项目数据
        要把数据最终放入到redux中
        从redux中拿到数据来进行渲染
    2.List组件中需要用到最终的数据
    3.创建redux文件夹存放redux相关文件
        容器组件
    4.得到redux数据
        要经过connect处理
    5.在文本框中输入内容，点击search进行请求
    6.需求
        点击search执行异步请求获取数据
            定义一个异步函数，并返回到redux中
    7.筛选
        点击ray，只显示ray的相关图片
        redux中渲染的数据不变，只要再加一个数据filter，再根据这个数据去到数组中筛选出需要的数据即可
*/
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
