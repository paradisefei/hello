//IIFE 需要把匿名函数括起来 然后后边加小括号调用，当然也可以使用一元运算符 ~!+- 等加到匿名函数前，可以省略括号
; //防止其他插件没有添加末尾的分号 影响自身
! function (w) {
    /* 封装自己的函数库，
        为了避免过多使用全局变量，需要使用IIFE封装
        把window对象传递进入IIFE中，给全局扩展一个对象my
        把所有的方法全部封装到my上。方便未来使用
    */
    w.my = {};


    /* 
        getWinScroll:获取系统滚动条的距离
        @param {} 
        @return {object}  {x:x,y:y}
    */
    my.getWinScroll = function () {
        var doc = document.documentElement;
        var dob = document.body;
        var x = window.pageXOffset || doc.scrollLeft || dob.scrollLeft;
        var y = window.pageYOffset || doc.scrollTop || dob.scrollTopt;
        return {
            x: x,
            y: y
        }
    }

    /* 
        getFirstChild:获取某个元素的第一个子元素
        @param {object}  第一个参数是 父元素
        @return {object}  返回的是第一个子元素对象
    */
    my.getFirstChild = function (ele) {
        return ele.firstElementChild || ele.firstChild;
    }

}(window)