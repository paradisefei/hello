```js
<template>

</template>
<script>

export default {
  name: "",
};
</script>
<style>
</style>
```

## `v-slot`

### 默认插槽

```js
    <AChild>
      我没有用标签包裹
      <header>我是header标签</header>
      <main>我是main标签</main>
      <div>{{ msg }}</div>
      <footer>我是footer标签</footer>
    </AChild>
```

1. `<AChild>`子组件在`App`组件中使用
2. 在子组件中使用`<slot></slot>`得到分发的插槽内容
   1. 在没有给`<slot></slot>`标签`name`属性时，`name`默认为`default`

### 具名插槽

```js
    <BChild>
      <template v-slot:header>
        <!-- <template slot="header"> -->
        <header>我是header标签</header>
      </template>

      <main slot="main">我是main标签</main>
      <div>{{ msg }}</div>
      <footer slot="footer">我是footer标签</footer>
    </BChild>
```

1. `<BChild>`子组件在`App`组件中使用
2. 使用`<template>`包裹内容，使用`v-slot`指令为内容块取名
3. 在`<BChild>`子组件中使用`<slot name="header">`可以在这个标签位置导出该名字分发的内容
4. 在普通标签或`<template>`中也可以使用`slot`属性添加名字
   1. `v-slot`指令只能用在`<template>`或组件标签中



### 作用域插槽

```js
    <CChild>
      <!-- <template v-slot:list="slotProps"> -->
      <!-- <template #list="slotProps"> -->

      <!-- <ul>
          <li v-for="item in slotProps.hobby" :key="item.id">
            {{ item.like }}
          </li>
        </ul> -->

      <!--
          多层解构
            解构之后如果还是一个对象，冒号后面可以继续解构
            解构之后可以直接给解构出来的这个属性一个新的名字，冒号之后直接跟新的名字，不需要使用引号，如果取了新的名字的话，之前的那个名字就不能再用了
            1.继续结构
            2.解构的同时给对应的变量取一个别名
            3.解构出来的是一个对象的话还可以继续解构
         -->
      <template #list="{ person: { name, age: newAge } }">
        <ul>
          <li>
            {{ person }}
          </li>
          <li>
            {{ name }}
          </li>
          <li>
            {{ newAge }}
          </li>
          <!-- <li>
            {{ sex }}
          </li> -->
        </ul>
      </template>
    </CChild>
```

1. 让子组件中的数据在父组件的内容插槽中可见
2. 在子组件的`<slot>`标签中添加属性将数据绑定上去
3. 父组件插槽可以接收子组件通过`slot`传递的`props`来接收子组件的数据，`v-slot`这里接收到的就是一个包含所有插槽`props`的对象