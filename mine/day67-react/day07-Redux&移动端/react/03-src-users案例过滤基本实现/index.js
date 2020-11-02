/* 
    1.增加按钮，ray和all，点击ray只显示ray的图片
    2.在redux中增加一个标识数据filter，更具标识的值从请求回来的数据中筛选出需要的数据渲染进页面
    3.初始化数据
        filter默认值为all

*/
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
