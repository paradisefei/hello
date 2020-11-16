/* 
    自定义插件
        是一个函数，最终扩展到window上

*/
// function MyPlugin(Vue){
//     /* 
//         在Vue上扩展方法或属性，扩展Vue原有的功能
//     */
//    //扩展全局方法
//    Vue.h = function(){
//        console.log("hello");
//    }
//    //扩展实例化对象上的方法
//    Vue.prototype.$instanceMethod = function(){
//     console.log("instanceMethod");
//    }
// }

const MyPlugin = {}
MyPlugin.install = function (Vue){
    /* 
        在Vue上扩展方法或属性，扩展Vue原有的功能
    */
   //扩展全局方法
   Vue.globalMethod = function(){
       console.log("globalMethod");
   }
   //扩展实例化对象上的方法
   Vue.prototype.$instanceMethod = function(){
    console.log("instanceMethod");
   }
}

window.MyPlugin = MyPlugin;