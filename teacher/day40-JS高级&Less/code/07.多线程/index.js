//onmessage事件用来接收主线程传递过来的数据 数据保存在事件函数的第一个参数上（event对象）
// console.log(this)
onmessage = function (e) {
    console.log(e.data) //主线程传递过来的数据
    var num = 0;
    for (var i = 0; i < e.data; i++) {
        num += Math.sqrt(i)
    }
    postMessage(num);

    //关闭当前分线程
    close();
}