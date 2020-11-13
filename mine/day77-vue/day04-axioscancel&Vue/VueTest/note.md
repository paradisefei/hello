## `1.HelloWorld`

### 1.1 创建`Vue`对象

1. `new Vue(配置对象)`

   ```js
   new Vue({
     	  el: "#root",
         data: {
           msg: "Hello World"
         }
   })
   ```

   

   1. `el`:使用选择器指定的根元素
   2. `data`:用于初始化的数据
      1. **数据代理**:最终会将`data`对象中的每一个属性代理到`vm`实例化对象上

2. `MVVM`

   1. `MVC`
      1. 组成
         1. `M` - `Model` 数据层
         2. `V - View`  视图层
         3. `C - Controller` 控制层
      2. 数据由控制层去操作，读取数据层的数据，渲染到视图层的页面上，返回
   2. `MVVM`
      1. 组成
         1. `M - Model` 数据层`(data)`
         2. `V - View`  视图层
         3. `VM - ViewModel` 视图模型层`(vm)`
      2. 数据由`ViewMode`l控制
         1. 可以从数据层读取数据，加载到视图层上，返回
         2. 也可以从视图层上读取修改的数据，修改数据层的数据，从而达到双向绑定（响应式）

### 1.2 双向数据绑定

1. 指令为

   ```js
   v-model
   ```

2. 作用：用作双向数据绑定（数据既能从`JS`流向页面，也能从页面流向`JS`）

## 2.模板语法

### 2.1 模板

1. 双大括号表达式（插值语法）
   1. 语法：`{{JS表达式}}`或`{{{JS表达式}}}`
      1. 表达式
         1. 有返回值（返回值可以是`undefined`）
         2. 没有分号
      2. 语句
         1. 没有返回值
         2. 末尾有分号（编译会自动加上）
   2. 作用：用来显示`JS`动态数据的
   3. 程序在模板页面中碰到插值语法时，就会把里面的东西作为表达式来解析，如果`JS`表达式中涉及到"变量"，会去`Vue`的配置中找（`vue`的实例对象上找）

### 2.2 指令

1. 指令
   1. 以`v-`开头的自定义标签属性
   2. 是`vue`指令的话，后面引号中的东西会当作表达式来解析，如果是变量的话，就会去`Vue`的配置中找

2. 强制数据绑定
   1. 指令语法：`v-bind:propName="xxx"`
      1. `v-bind`为强制数据绑定的指令
      2. `propName`表示`DOM`元素的属性，既可以是原有属性，也可以是自定义属性
      3. `xxx`会被当作表达式解析
   2. 简写
      1. `:propName="xxx"`
   3. 作用：**给`DOM`元素的某一个属性绑定数据**
   4. 此时数据只能从`js`流向页面，不能从页面流向`js`
   5. 示例

   ```js
   <input type="text" v-bind:value="msg">
   <input type="text" :value="msg">
   ```

3. 绑定事件监听
   1. 指令语法：`v-on:eventName="事件函数"`
      1. `v-on`为绑定事件监听的指令
      2. `eventName`表示具体事件，所有字母都小写
      3. 事件函数定义在配置对象的`methods`中
   2. 简写
      1. `@eventName="事件函数"`

### 2.3 `methods`

```js
new Vue({
  	  el: "#root",
      methods: {
        handleClick1(){
          console.log("我是简写的");
          console.log(this);
        },
        handleClick2:function(){
          console.log("我没简写")
        }
      }
})
```

1. `methods`中的函数可以在`Vue`实例中访问的到
2. 供页面中的事件指令来绑定回调
3. 函数中的`this`指向`Vue`实例
4. 不要用箭头函数来定义这里面的函数，用箭头函数得话`this`就不指向`Vue`实例了，而是指向`window`

## 3.计算属性和监视属性

### 3.1 `computed`

1. 计算属性配置在`computed`中

   ```js
   new Vue({
     el:"#app",
     data:{
       first:"xu",
       last:"yaoFei"
     },
     computed:{
       fullName:{
         get:function(){
           return this.first + " " + this.last;
         },
         set:function(newVal){
           const [firstName,lastName] = newVal.split(" ");
           this.first = firstName;
           this.last = lastName;
         }
       },
       /* 只读的话就是没有get方法 */
       // fullName1:{
       //   get:function(){
       //     return this.first + " " + this.last;
       //   }
       // }
       /* 没有get可以直接写成下面这种 */
       fullName1(){
         return this.first + " " + this.last;
       }
     }
   })
   ```
   1. 计算属性可以从`Vue`实例中访问得到
   2. 这里的属性值本质上就是数据（区别于方法），只是这个数据是通过对其他数据的操作后得到的新的数据，或者通过该数据可以修改其它的数据
   3. `get`方法可以获取到该属性的值
   4. `set`方法可以设置该属性的值
      1. 没有`set`方法的话，该属性只读，直接`return`

### 3.2 `watch`

1. 监视属性配置在`watch`中

   ```js
   const vm = new Vue({
     el:"#app",
     data:{
       first:"xu",
       last:"yaoFei",
       fullName1:"xu yaoFei"
     },
     watch:{
       first:function(){
         // console.log("徐")
         this.fullName1 = this.first + " " + this.last;
       },
       last:function(){
         // console.log("耀飞")
         this.fullName1 = this.first + " " + this.last;
       }
     }
   })
   console.log(vm)
   ```

   1. 是一个对象，键是需要观察的表达式，值是对应回调函数
   2. 一旦被监视的数据发生变化时就会触发相应的回调来执行
   3. `Vue`实例化时会调用`$watch()`，遍历`watch`对象的每一个`property`，那如果`watch`对象中有不是`data`中的数据的话就会报错了

## `4.class`与`style`绑定

### 4.1 `class`绑定

```js
<div id="app">
  <h2>1. class绑定: :class='xxx'</h2>
  <!-- 
    要改变颜色，则被渲染的应该是动态的数据
    要让引号中的东西当成是表达式来解析，那就需要将其放在vue指令的后面
    v-bind的作用是为元素的某个属性绑定表达式，也就是说v-bind可以把表达式要绑定到某个属性上
   -->
  <p :class="flag ? 'r' : 'g' ">这是一段文字~</p>
  <button @click="changeColor">改变颜色</button>
</div>

<script>

  const vm = new Vue({
    el:"#app",
    data:{
      flag:true
    },
    methods:{
      changeColor:function(){
        this.flag = !this.flag
        console.log(this.flag)
      }
    }
  })
</script>
```

1. `v-bind`的两种方式的理解

   1. 给元素的某个属性绑定具体表达式
   2. 把表达式绑定到元素的某个属性上

2. 给元素添加多个类名

   1. 表达式中是一个对象

      `<p :class="{ r:!flag,g:flag,fontSize:'1'}">这是一段文字~</p>`

   2. 表达式中是一个数组

      `<p :class="['g','r','f']">这是一段文字~</p>`

### 4.2 style绑定

```js
<div id="app">
  <h2>2. style绑定</h2>
  <p :style="{fontSize:fontSize+'px',color:activeColor}">这是一段文字~</p>
  <input type="text" placeholder="请输入字体大小" />
</div>

<script src="../js/vue.js"></script>
<script>
  const vm = new Vue({
    el:"#app",
    data:{
        fontSize:40,
        activeColor:'green'
    }
  })
</script>
```

1. 绑定数据的目的就是为了动态的渲染页面