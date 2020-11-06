/* 
    rem适配-设置跟字体大小
        1.适配函数
        2.页面加载进来时就会执行一次
        3.onresize事件
*/
function adapter(){
    /*
        1.字体大小
        2.赋值
    */
   const fontSize = document.documentElement.clientWidth / 10;
    document.documentElement.style.fontSize = fontSize + "px";
}
adapter();

window.onresize = adapter;
