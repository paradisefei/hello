<template>
  <div>
    <!-- 默认插槽 -->
    <AChild>
      我没有用标签包裹
      <header>我是header标签</header>
      <main>我是main标签</main>
      <div>{{ msg }}</div>
      <footer>我是footer标签</footer>
    </AChild>

    <!--
      命名插槽
        1.默认插槽使用slot接收时，就是把整个从父组件传过来的标签数据都放在一个位置
        2.命名插槽实现方式
          使用template包裹，在该标签属性中使用v-slot指令，冒号后面的就是自己取的名字
          使用template包裹，在该标签属性中直接使用slot属性，等号后面的字符串中是自己取得名字
          直接在某一个标签中使用slot，注意不能直接在某一个标签中使用v-slot指令
    -->
    <BChild>
      <template v-slot:header>
        <!-- <template slot="header"> -->
        <header>我是header标签</header>
      </template>

      <main slot="main">我是main标签</main>
      <div>{{ msg }}</div>
      <footer slot="footer">我是footer标签</footer>
    </BChild>
    <!--
      作用域插槽
        1.插槽模板中可以使用数据，父组件中，碰到插值语法会解析得到数据，把结果传给子组件，父组件解析父组件的，子组件拿到结果取渲染就是
        2.如果给了名字，在分发是就必须具名指定来使用，并且即使直接全部分发时也不会有
        3.父组件插槽可以接收子组件通过slot传递的props来接收子组件的数据
        4.v-slot这里接收到的是一个包含所有插槽props的对象
    -->
    <CChild>
      <!-- <template v-slot:list="slotProps"> -->
      <!-- <template #list="slotProps"> -->
      <!-- 父组件中的数据可以在这里得到解析 -->
      <!-- <ul>
          <li v-for="people in person" :key="people.id">
            {{ people.name }}
          </li>
        </ul> -->
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
      <p slot="myp">我是没有用template包的部分</p>
    </CChild>
  </div>
</template>
<script>
/*
  插槽
    1.父组件向子组件传带标签的数据
      如果没有标签的话也是可以传到子组件中去的
      在这些标签中也可以使用插值语法，变量也会被解析，这样的话这个标签其实就是带了变量值这个数据的，子组件用slot接收时能得到被解析后得到变量值的标签数据的
        先解析，得到数据，解析是在父组件中进行的
        然后传到子组件中
        相当于说子组件得到的就是直接是有数据的标签，不需要子组件来解析
    2.子组件在父组件中使用时，要使用双标签，被发送的标签数据就是写在这子组件的双标签内部，写在这个子组件中在传到这个子组件中
    3.把标签数据传到子组件中，虽然这些标签是写在父组件中，但并不会在父组件中渲染
    4.在子组件中接收，接收了就表示在这个接收的位置可以得到从父组件中传过来的这些个标签，然后就会被渲染在子组件中
    5.v-slot的简写形式
      v-slot:可以简写成#
*/
import AChild from "./AChild.vue";

import BChild from "./BChild.vue";

import CChild from "./CChild.vue";

export default {
  name: "App",
  data() {
    return {
      msg: "我是App中的数据",
      // person: [
      //   { id: 1, name: "jack" },
      //   { id: 2, name: "Tom" },
      // ],
    };
  },
  components: {
    AChild,
    BChild,
    CChild,
  },
};
</script>
<style>
</style>
