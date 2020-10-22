/* 
    需求：页面需要30张图片，书写一个进度条
        当图片标签被创建，拥有src属性，就开始去下载了

*/

//创建一个计数器，用来保存加载的图片数量
var oContent = document.querySelector(".content");
var count = 0;
//创建30个img标签
for (var i = 1; i <= 30; i++) {
    //创建img标签 可以直接实例化Image对象即可
    var newImg = new Image();
    //给img添加路径(元素自有属性 可以直接通过.操作符进行获取或者设置)
    var num = i < 10 ? "0" + i : i;
    newImg.src = "../images/" + num + ".jpg";

    //img也有onload事件，当图片资源加载完成后触发
    newImg.onload = function(){
        //让计数器加1
        count ++;
        //计算百分比
        var percent = parseInt(count / 30 * 100) + "%";
        oContent.style.width = percent;
        console.log(percent)
    }

}