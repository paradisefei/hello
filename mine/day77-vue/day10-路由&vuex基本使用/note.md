## 路由

### 基本使用

1. 步骤

   1. 引入`VueRouter`插件

   2. 安装`VueRouter`插件

   3. 构造调用`VueRouter`，参数中是一个配置对象，并且会得到一个实例化对象`router`

      ```js
      const router = new VueRouter({
        routes: [
          {
            path: "/about",
            component: About,
          },
          {
            path: "/home",
            component: Home,
          },
        ],
      });
      ```

   4. 在实例化`Vue`时，将该实例化对象放入到配置对象中，选项为`route`



## 路由传参

### `param`s参数

1. 在定义时需要定义路由参数

   ```js
   {
     path: "/home/message/detail/:id",
     component: Detail,
   }
   ```

2. 在点击链接时，每个链接的路由参数是确定好了的，此时传递`params`参数是通过`<router-link>`来实现

   ```js
   <li v-for="choice in choices" :key="choice.id">
       <router-link :to="`/home/message/detail/${choice.id}`">
           {{choice.content}}
       </router-link>
   </li>
   ```

3. 在子组件中使用监视属性，根据实例上的`$route.params`对象获取到具体的参数值，再根据该值确定渲染哪一条数据

   ```js
     watch: {
       $route: {
         handler() {
           this.people = this.person.find((people) => +this.$route.params.id === people.id);
         },
         immediate: true,
       },
     },
   ```

### `query`参数

1. 直接添加在`<router-link>`中`to`属性的链接上

   ```js
   <router-link :to="`/home/message/detail/${choice.id}?name='张三'&age='23'`">{{
     choice.content
   }}</router-link>
   ```

2. 子组件通过`$route.query`来获取



### `props`函数

1. 参数传入的方式同样是通过`<router-link>`中`to`属性实现

   ```js
   <router-link :to="`/home/message/detail/${choice.id}?name='张三'&age='23'`">{{
     choice.content
   }}</router-link>
   ```

2. 路由配置中，在要接收`props`值的组件中添加`props`配置选项，此时`props`是一个函数，返回一个对象

   ```js
   {
     path: "/home/message/",
     component: Message,
     children: [
       {
         path: "/home/message/detail/:id",
         component: Detail,
         props(route) {
           return {
             ...route.query,
             ...route.params,
           };
         },
       },
     ],
   },
   ```

3. 在对应组件中需要接收才能使用，就和从父组件传数据到子组件那样接收后才能用一样

   ```js
   props: ["id", "name", "age"],
   ```

### 命名路由

1. 在配置路由时给路由取一个名字

   ```js
   {
     path: "/home/message/",
     component: Message,
     children: [
       {
         name: "Detail",
         path: "/home/message/detail/:id",
         component: Detail,
       },
     ],
   },
   ```

2. 在`<router-link>`的`to`属性中使用对象的形式传参

   ```js
       <router-link :to="{name:'Detail', query: {
         name: '张三',
         age: 23,
       },
       params: {
         id: choice.id,
       }}">{{
         choice.content
       }}</router-link>
   ```

   

3. 在子组件中使用监视属性，根据实例上的`$route.params`对象获取到具体的参数值，再根据该值确定渲染哪一条数据

### route-view标签的属性

1. 渲染在这一位置的所有组件(最外层)都能接收到这里的数据
   `<router-view aName="aValue"></router-view>`

2. 在子组件使用props方式接收就能得到这个值

   ```js
     props: ["aName"],
   ```

   

## 编程式导航

1. 使用`$router`上的`push`和`replace`

   ```js
     methods: {
       handlePush(id) {
         this.$router.push(`/home/message/detail/${id}?name='张三'&age='18'`);
       },
       handleReplace(id) {
         this.$router.replace(`/home/message/detail/${id}?name='张三'&age='18'`);
       },
     },
   ```

   注意：在点击`<router-link>`的本质也就是调用了`router`对象上的`push`方法