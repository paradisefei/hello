## 条件渲染

### `v-if`

```js
<div id="app">
  <p v-if="isShow === 'a' ">Welcome to the new World</p>
  <p v-else-if="isShow === 'b' ">It sucks</p>
  <p v-else>But you gonna love it</p>
</div>

<script>
 new Vue({
   el:"#app",
   data:{
     isShow:""
   }
 })
</script>
```

1. `v-if='表达式'`
   1. 当表达式的结果为`true`时，该元素会被渲染
   2. 当表达式结果为`false`时，该元素从DOM树上移除，因此不会被渲染
2. `v-else-if='表达式'`
   1. 处理结果与`v-if`类似
3. `v-else`
   1. 不需要表达式
   2. 前一兄弟元素必须有`v-if`或`v-else-if`，如果没有，那么这个元素将会被忽略
4. 和`if`语句比较
   1. 在`if`语句中，逻辑代码可以根据需求自己确定
   2. 在`v-if`指令中，就相当于逻辑代码只有一种情况：元素不从`DOM`树上移除



### `v-show`

```js
<p v-show="myShow === 'a'">How you doing</p>

new Vue({
   el:"#app",
   data:{
     myShow:"a"
   }
 })
```

1. `v-show='表达式'`
   1. 表达式结果为`false`，则该元素的`display:none`
   2. 表达式结果为`true`，则该元素正常显示，原本是块级元素还是块级元素，原本是行内元素还是行内元素
2. 和`v-if`的区别
   1. `v-if`会从`DOM`树上移除
   2. `v-show`不会从`DOM`树上移除，单纯的只是通过`display`来确定元素的显示隐藏

## 列表渲染

### 遍历数组

```js
  <div id="demo">
    <h2>测试: v-for 遍历数组</h2>
    <ul>
      <li v-for="(item,index) in users" :key="item.id">
        {{item.id}} - {{item.name}} - {{item.age}} - {{a}} 
      </li>
    </ul>
  </div>
  <script type="text/javascript">
    new Vue({
      el: "#demo",
      data: {
        users: [
          { id: 1, name: "peihua", age: 38 },
          { id: 2, name: "jingge", age: 48 },
          { id: 3, name: "leige", age: 68 },
        ],
        a:"hello"
      }
    })
  </script>
```

1. `v-for`遍历数组时
   1. 基于源数据多次渲染元素或模板块，把一个数组对应为一组元素
   2. 该指令的值必须使用特定语法 `alias in expression`
      1. 此时`item`表示数组元素，`index`表示数组下标
2. `v-for`块中，我们可以访问所有父作用域的`property`
   1. 把使用了v-for指令的这里称为v-for块，可以理解为这个v-for块是有自己的作用域的
   2. 在v-for的值中相当于定义了两个变量item和index，每一次循环时就给它们赋值，由于是在这个作用域中，所以:key这个指令中通过解析可以得到对应的值；标签内部也可以访问到item和index这两个变量
   3. 父作用域的话就说明根据demo可以访问到该`Vue`实例对象上的数据

### 遍历对象

```js
  <div id="demo">
    <h2>测试: v-for 遍历对象</h2>
    <ul>
      <li v-for="(value,key,index) in person">
        {{value}} - {{key}} - {{index}}
      </li>
    </ul>
  </div>
  <script type="text/javascript">
    new Vue({
      el: "#demo",
      data: {
        person: {
          age: 18,
          name: "zs",
          hobby: ["抽烟", "喝酒", "烫头"]
        },
      }
    })
  </script>
```

1. `v-for`遍历对象时
   1. 遍历的顺序就是按照我们写的对象的顺序进行遍历
      1. 按 `Object.keys()` 的结果遍历
   2. `v-for="(value,key,index) in person"`
      1. 第一个参数    `value`     这个键值对中的值
      2. 第二个参数      `key`       这个键值对中的键
      3. 第三个参数    `index`      这个键值对在对象中的索引

### 练习

1. 事件函数传参问题

   ```js
   <button @click="sort">原序</button>
   <button @click="sort()">降序</button>
   <button @click="sort(1)">升序</button>
   ```

   1. 加了括号和没加括号，事件函数都是在触发时执行，而不是像之前理解的那样会自己直接执行
   2. 这里加括号只是为了给事件函数传参数而已
   3. 区别
      1. 没加括号时，事件函数在执行时内部打印`arguments`的长度为`1`，是事件对象
      2. 加了括号没传参数时，打印`arguments`的长度为`0`
      3. 加了括号传了参数时，`arguments`的长度就是传入参数的个数

2. 需求
   1. 将数据渲染
   2. 在文本框中输入，被匹配上的元素被渲染
   3. 点击对应的排序按钮，排序后的数据被渲染

```js
  <div id="root">
    <input type="text" v-model="searchText">
    <ul>
      <li v-for="item in resultUsers">
        {{item.id}} - {{item.name}} - {{item.age}}
      </li>
    </ul>
    <button @click="orderType = 1">升序</button>
    <button @click="orderType = -1">降序</button>
    <button @click="orderType = 0">原本的顺序</button>
  </div>
  <script type="text/javascript" src="../js/vue.js"></script>
  <script type="text/javascript">
    new Vue({
      el: "#root",
      data: {
        users: [
          { id: 1, name: "jack", age: 38 },
          { id: 2, name: "rose", age: 16 },
          { id: 3, name: "tom", age: 27 },
          { id: 4, name: "jerry", age: 40 },
          { id: 5, name: "lucy", age: 22 },
          { id: 6, name: "lilei", age: 29 },
        ],
        searchText: "",
        orderType: 0
      },
      //渲染的是计算属性中的数据而不是原始数据
      /*
      	根据文本框中的文本得到新的要被渲染的数据
      	文本框中的文本为空时同样也要得到对应的数据
      	被渲染的数据是根据文本来确定的
      		文本为空
      			渲染原始数据
      		文本不为空
      */
      
      computed: {
        resultUsers: function () {
          const filterUsers = this.users.filter((item) => {
            return item.name.includes(this.searchText)
          })
          if (this.orderType === 0) return filterUsers;

          const sortUsers = filterUsers.sort((item1, item2) => {
              return this.orderType === 1 ? item1.age - item2.age : item2.age - item1.age
          })
          return sortUsers;
        }
      }
    })
  </script>
```

## 事件处理

### 绑定监听

```js
<button @click="sort">原序</button>
<button @click="sort()">降序</button>
<button @click="sort(1)">升序</button>
```

1. 加了括号和没加括号，事件函数都是在点击时执行，而不是像之前理解的那样会自己直接执行
2. 这里加括号只是为了给事件函数传参数而已
3. 区别
       没加括号时，事件函数在执行时内部打印arguments的长度为1，是事件对象
       加了括号没传参数时，打印arguments的长度为0
       加了括号传了参数时，arguments的长度就是传入参数的个数

### 事件修饰符

1. `.stop`
   1. 阻止传播
2. `.prevent`
   1. 阻止默认事件



### 按键修饰符

1. enter键抬起事件

   ```js
   <input @keyup.enter="handleEnter">
   <input @keyup.13="handleEnter">
   ```

   也就是说，可以用特殊的单词，也可用使用该键的键码值

## 表单输入绑定

```js
    new Vue({
      el: "#demo",
      data: {
        users: {
          username: "",
          password: "",
          sex: "男",
          hobby:["basket"],
          city:"北京",
          textArea:""
        }
      }
    })
```



### `select`

```js
      <select v-model="users.city">
        <option value="">未选择</option>
        <option value="北京">北京</option>
        <option value="上海">上海</option>
        <option value="广州">广州</option>
        <option value="深圳">深圳</option>
      </select>
```

给`select`绑定`v-model`，该表达式的值是哪个`value`，哪个`option`就被选中

### `radio`和`checkbox`

1. `checkbox`

   ```js
         <input type="checkbox" id="basket" value="basket" v-model="users.hobby">
         <label for="basket">篮球</label>
         <input type="checkbox" id="foot" value="foot" v-model="users.hobby">
         <label for="foot">足球</label>
         <input type="checkbox" id="pingpang" value="pingpang" v-model="users.hobby">
         <label for="pingpang">乒乓</label><br>
   ```

   1. `users.hobby`是`data`中定义的一个存放`checkbox`数据的数组，默认情况下为空则所有复选框都不被选中；如果数组中有某个框的value，则这个复选框被选中
   2. 某个框被选中，则将它的value值从后面添加到数组中，数组中的顺序就是点击选择的顺序
   3. 某个选中的框被取消，则数组中将该框的value值移除，后面的元素会自动向前移来补齐

2. `radio`

   ```js
   <input type="radio" id="female" value="女" v-model="users.sex">
   <label for="female">女</label>
   <input type="radio" id="male" value="男" v-model="users.sex">
   <label for="male">男</label><br>
   ```

   1. value和v-model一起使用

   2. 因为在radio中v-model是通过checked和change事件来实现的，所以这里就相当于是

      ```js
      <input type="radio" id="female" name="sex" value="女" :checked="users.sex === '女'" @change="(e) => {users.sex = e.target.value}">
      ```

      如果value值和`users.sex`的值相同，该文本框就被选中

      

### `text`和`textarea`

```js
<input type="text" v-model="users.username"><br>
<textarea rows="10"  v-model="users.textArea"></textarea>
```

## 生命周期钩子函数

1. 初始化显示

   1. `beforeCreate()`
   2. `created()`
   3. `beforeMount()`

   4. `mounted()`

2. 更新状态
   1. `beforeUpdate()`
   2. `updated()`

3. 销毁`vue`实例`:vm.$destory()`
   1. `beforeDestory()`
   2. `destoryed()`

