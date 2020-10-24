// 包含ES6的高级语法的转换
import '@babel/polyfill';
//导入分别导出
import {foo,a} from "./module1.js";
//导入统一导出
import {bar,b} from "./module2.js";
//导入默认导出
import obj from "./module3.js";

//导入css
import "../css/index.css";
//导入less
import "../less/index.less";
import "../less/iconfont.less";
foo();
bar();
console.log(a);
console.log(b);
console.log(obj);
console.log(hello);
// console.log(1==2);
/* new Promise(resolve => {
    setTimeout(() => {
        console.log("hello");
        resolve()
    },1000)
}) */