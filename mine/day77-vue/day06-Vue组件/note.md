## 过滤器

### 局部`filters`



```js
    const vm = new Vue({
      el: "#test",
      data: {
        data: Date.now()
      },
      filters: {
        formatDate(value) {
          return dayjs(value).format("YYYY-MM-DD HH:m:ss");
        }
      }
    })
```

1. 把所有过滤器配置在`filters`选项中，定义时相当于只有`getter`没有`setter`，但必须是这种函数的形式，不能是只有`getter`没有`setter`的对象的形式如

   ```js
   formatDate: {
     get: function (value,str) {
       return dayjs(value).format(str);
     }
   }
   ```

2. 过滤器的作用就是格式化要显示的数据

3. 使用

   ```js
   <div>{{data | formatDate("YYYY-MM-DD")}}</div>
   <div>{{data | formatDate("HH:mm:ss")}}</div>
   ```

   1. 竖线左边的为该过滤器函数的第一个参数
   2. 从第二个参数开始从过滤器函数后括号中传入

### 全局`Vue.filter()`

```js
    Vue.filter("formatDate", (value, str) => {
      return dayjs(value).format(str);
    })
```

1. `Vue.filter()`中定义的过滤器属于全局过滤器，所有的实例都可以使用
2. 第一个参数表示该过滤器函数名
3. 回调函数就是该函数体
4. 使用时和在`filters`中定义的过滤器函数一样



## 指令

### `Vue`原生指令

```js
  v-text : 更新元素的 textContent
  v-html : 更新元素的 innerHTML
  v-if : 如果为true, 当前标签才会输出到页面
  v-else: 如果为false, 当前标签才会输出到页面
  v-show : 通过控制display样式来控制显示/隐藏
  v-for : 遍历数组/对象
  v-on : 绑定事件监听, 一般简写为@
  v-bind : 强制绑定解析表达式, 可以省略v-bind
  v-model : 双向数据绑定
  ref : 为某个元素注册一个唯一标识, vue对象通过$els属性访问这个元素对象
  v-cloak : 使用它防止闪现表达式, 与css配合: [v-cloak] { display: none }
```



### 自定义指令

#### 局部`directives`

1. 注册局部指令，该指令只能在该实例中使用

   ```js
   directives: {
       "upper-text": function (el, binding) {
         console.log(el, binding)
         el.innerText = binding.value.toUpperCase();
       }
     }
   ```

   1. `upper-text`是自定义指令名

   2. 函数参数

      1. `el`

         1. 表示该自定义指令所在的`DOM`元素对象

      2. `binding`

         1. 是一个对象

            ```js
            {
                def: {bind: ƒ, update: ƒ}
                expression: "msg",//表示该指令被解析的变量
                modifiers: {},
                name: "upper-text",
                rawName: "v-upper-text",
                value: "Hello World"//表示该指令后面的变量被解析后得到的值
            }
            ```

2. 使用，注意前面要加`v-`

   ```js
       <p v-upper-text="msg"></p>
       <span v-upper-text="a"></span>
   ```

   

#### 全局`Vue.directive()`

```js
Vue.directive("upper-text",function (el, binding) {
      console.log(el, binding)
      el.innerText = binding.value.toUpperCase();
    })
```

1. 全局指令在所有的实例中都能使用



## 插件

### `Vue.use(plugin)`

1. 如果`plugin`是一个函数，在自定义插件时需要传入`Vue`作为参数

   ```js
   function MyPlugin(Vue) {
     // 当你使用插件时，会调用插件函数，传入Vue作为参数
   
     // 扩展Vue功能
   
     // 扩展全局功能
     Vue.globalMethod = function () {
       console.log("globalMethod");
     };
   
     // 扩展实例对象功能
     Vue.prototype.$instanceMethod = function () {
       console.log("$instanceMethod");
     };
   }
   
   window.MyPlugin = MyPlugin;
   ```

   

2. 如果`plugin`是一个对象，在自定义时必须要有`install`方法

   ```js
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
   ```

3. 在引入插件之后，必须要调用`Vue.use(引入的插件)`才能使用

## 响应式

1. 什么叫响应式

   1. 当你更新数据的时候，数据会变化，同时用户界面也会更新
   2. `data`中的数据才是响应式数据

2. 对象

   ```js
   new Vue({
     el: "#demo",
     data: {
       person: {
         name: "zs",
         age: 23
       }
     }
   ```

   1. 直接改变对象中的值，就会响应式

   2. 添加属性

      1. 直接使用点添加`this.person.score = 100;`，不会有响应式

      2. 要想有响应式需要使用

         ```js
         this.$set(this.person,"score",100)添加的属性是响应式的
         Vue.set(this.person,"score",100)也是响应式的
         ```

3. 数组

   ```js
   new Vue({
     el: "#demo",
     data: {
       hobby: [
         { id: 1, name: "jack" },
         { id: 2, name: "rose" }
       ]
     }
   ```

   1. 后台返回来的数据一般来说都是有`id`的
   2. 修改时直接修改有响应式
   3. 添加时使用`push`





## `组件`

### `Vue.extend()`

```js
    const TestComponent = Vue.extend({
      data() {
        return {
          msg: "Hello",
          num:0
        }
      },
      methods:{
        plus:function(){
          console.log(this);
          this.num++
        }
      }
      template: "<div><p>{{num}}</p><button @click='plus'>按钮</button></div>"
    });
```

1. `Vue.extend(option)`

   1. 参数
      1. 是一个包含组件选项的对象
   2. 返回值
      1. 返回一个构造器

2. 构造器的两种使用

   1. 传入`vm`实例中

      ```js
          const vm = new Vue({
            el: "#demo",
            data: {
              msg: "Hello World"
            },
            //components中的东西不会代理到vm上
            components: {
              "test-component": TestComponent
            }
          })
      ```

   2. `new`构造调用，然后再挂载到某个元素上

      ```js
      new TestComponent().$mount("#demo")
      ```

### `Vue.component()`

```js
       Vue.component("test-component",{
         data(){
            return {
              msg:"hello"
            }
         },
         template:"<div>{{msg}}</div>"
       })
```

1. 参数
   1. 参数一：组件名
   2. 参数二：选项对象
2. 该组件在所有组件实例中都能使用，要记得先有组件实例，然后再进去使用