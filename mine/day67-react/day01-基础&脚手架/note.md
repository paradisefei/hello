#### `api`

1. `React.createElement(a,b,c)`
   1. 功能
      1. 创建新的React元素
   2. 参数
      1. 第一个参数`a`
         1. 表示元素的类型，如`h1,div`等
      2. 第二个参数`b`
         1. 表示该元素上的属性
         2. 使用`js`对象方式表示，对象上每个属性的值都要用引号引起来
      3. 第三个参数`c`
         1. 子节点
2. `ReactDOM.render(element,container[,callback])`
   1. 功能
      1. 在`container`里渲染一个`React`元素，并返回对该组件的引用
      2. 将React元素转成真正的`dom`元素
      3. 把`dom`元素渲染到页面上
   2. 参数
      1. `element`
         1. 要被渲染的React元素
      2. `container`
         1. 容器节点
         2. 当首次调用时，容器节点里的所有 DOM 元素都会被替换
      3. `callback`
         1. 组件被渲染后执行的回调函数
3. `this.setState(updater/stateChange[,callback])`
   1. 功能
      1. 对组件的`state`的更改排入队列，并通知`React`需要使用更新后的`state`重新渲染此组件及其子组件
      2. 可将其理解为请求而不是立即更新
   2. 参数
      1. 第一个参数有两种情况
         1. `updater`是一个带有形参的函数`(state,props) => stateChange`
            1. `state和props`都是普通的`js`对象
         2. `stateChange`
            1. 这是一个对象
      2. `callback`
         1. 回调函数
         2. 它将在 `setState` 完成合并并重新渲染组件后执行
4. `&&`和`&`的区别
   1. `&&`是逻辑与
   2. `&`是按位与
5. `JSX`中在`{}`放入数组，`React.js `会帮你把数组里面一个个元素罗列并且渲染出来。

#### 事件绑定中的`this`指向

1. `babel`编译`jsx`后得到的是严格模式的代码状态
2. `react`在在事件触发执行`this.handle`函数时，`babel`处理过之后在内部是找到`handle`这个函数然后对它进行普通调用
3. 因此`handle`中的`this`指向undefined



### `Ajax`请求

#### `get`

1. 逻辑
   1. `Ajax`请求是前端向后端服务器请求数据
   2. 创建一个`Ajax`请求
   3. 连接
   4. 向服务器发送请求
   5. 接收请求
   6. 使用表单，但并不是通过提交表单来提交数据，而是通过Ajax请求
      1. 事件驱动
      2. 表单
         1. get请求
         2. 用户名
         3. 密码
         4. 按钮
   7. 点击按钮触发提交事件