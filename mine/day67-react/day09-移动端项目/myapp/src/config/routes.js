import {lazy} from 'react'
/* 
    1.定义数组
    2.数组中的每一项是一个对象，对象中保存的是Route组件中的path和component属性及其值
    3.全部渲染在跟组件中
*/
// import Home from "../pages/Home/home.js"
// import Login from "../pages/Login/login.js"
/* 
    实现模块懒加载
        1.原本导入模块是直接使用import导入
        2.懒加载需要调用函数，在函数中导入
        3.配合suspense组件使用，嵌套在suspense中
*/
const Home = lazy(() => {
    return import("../pages/Home/home.js")
})
const Login = lazy(() => {
    return import("../pages/Login/login.js")
})
const Register = lazy(() => {
    return import("../pages/Register/register.js")
})
const routes = [
    {
        /* 
            1.在渲染的时候实现exact的效果
                1.先在对象中添加exact的属性
                2.渲染时判断
        */
        path:"/",
        component:Home,
        exact:true
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/login",
        component: Login
    },
    {
        /* 
            1.添加一项手机快速注册的页面路由
        */
       path:"/Register/register.js",
       component:Register
    }
]
// console.log(routes)
export default routes;
