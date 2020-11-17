

## `_props`

1. 功能

   数组可以从父组件传输到子组件

   ```js
   <Father :appDataPar="appData"/>
   ```

   在这里，`<Father />`是`<App />`中的子组件，通过这种方式可以将该`App`实例中的数据`"appData"`传输到`<Father />`中

2. 通过这种方式传输的数据，子组件需要接收了之后才能使用，接收的方式有

   1. 数组

      ```js
      props: ["appDataPar"]
      ```

      这里数组的引号中的值就是父组件传入数据时等号左边的那个自定义的变量

   2. 对象

      1. 方式一：键值对中的值表示传入进来的数据的类型

         ```js
           props: {
               appaaData: String,
           }
         ```

      2. 方式二：键值对中的值表示对传入进来的数据的配置项

         ```js
           props: {
               appaaData: {
                   type: String,
                   required: true,
              }
          }
         ```

3. 通过`props`传递到子组件中，会被代理到组件实例，在子组件的实例上可以访问的到，在`js`中要通过`this`调用，在页面中不需要通过`this`调用

   

## `_data`

1. 为什么在`vue`组件中，选项data必须得是函数而不能是对象？
   1. 组件是可以被多次复用的
   2. 如果data使用的是对象的话，那组件在不同地方被使用的时候，这些个组件使用的是同一份数据，那如果要修改的话是会相互之间有影响的
   3. 如果data使用的是函数，每次复用的时候调用这个函数得到的是一份新的数据，所以在使用的时候就不会相互影响

## `render`

```js
new Vue({
  render: (h) => h(App),
}).$mount("#app");
```

```js
new Vue({
  render: (createElement) => createElement(App),
}).$mount("#app");
```



1. `render`是`Vue`配置对象中与`DOM`相关的一个选项
2. `render`函数接收一个`createElement`方法来创建一个`VNode`(虚拟节点Virtual Node)，这个方法返回的不是一个实际的DOM元素，返回的信息会告诉`Vue`页面需要渲染什么样的节点