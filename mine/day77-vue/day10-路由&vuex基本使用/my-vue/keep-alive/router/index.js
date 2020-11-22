import Vue from "vue";

import VueRouter from "vue-router";

import About from "../views/About";

import Home from "../views/Home";

import News from "../views/Home/News";

import Message from "../views/Home/Message";

import Detail from "../views/Home/Message/Detail";

/*

  1.引入VueRouter这个插件
  2.安装插件
      一旦安装了这个插件，就在Vue的全局上引入了两个插件，在任何地方都能使用
      <router-link>
      <router-view>
  3.VueRouter构造调用，得到的对象被注册在Vue中
*/
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/about",
      component: About,
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          // path: "/home/news",
          // 在配置子路由时，如果想要在父路径上直接添加，子路径就不能以 / 开头
          path: "news",
          component: News,
        },
        {
          // path: "/home/message",
          path: "/home/message/",
          component: Message,
          children: [
            {
              /*
                是不是只要路径最后是数字就都是路由参数
                可以理解成，我是这样子来设计它的，让它最后是数字表示路由参数，所以你才能看到在后面是数字时表示路由参数
              */
              name: "Detail",
              path: "/home/message/detail/:id",
              component: Detail,
              /*
                props是一个配置选项，此时是一个函数，当它是一个函数的时候，有一个返回值，返回值就相当于从父组件传子组件的那个props上，也就是说需要在组件内部接收才能使用
                参数就是$route对象
              */
              // props(route) {
              //   return {
              //     ...route.query,
              //     ...route.params,
              //   };
              // },
            },
          ],
        },
      ],
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
});
export default router;
