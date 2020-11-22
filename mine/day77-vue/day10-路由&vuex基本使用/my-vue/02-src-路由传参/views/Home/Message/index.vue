<template>
  <div>
    <h3>Message</h3>
    <ul>
      <li v-for="choice in choices" :key="choice.id">
        <!--
          router-link传参
          传入查询字符串参数
          to是这个<router-link>的一个属性

          $router

            点击<router-link o="">相当于在router的实例上调用了push方法，router.push()，会在history中添加一条记录
         -->
        <!-- <router-link :to="`/home/message/detail/${choice.id}?name='张三'&age='23'`">{{
          choice.content
        }}</router-link> -->
        <router-link :to="`/home/message/detail/${choice.id}`">{{
          choice.content
        }}</router-link>
        <!-- <router-link :to="{name:'Detail', query: {
          name: '张三',
          age: 23,
        },
        params: {
          id: choice.id,
        }}">{{
          choice.content
        }}</router-link> -->
      </li>
    </ul>
    <router-view aName="aValue"></router-view>
  </div>
</template>
<script>
/*
  点击某个message，在Detail中显示对应的数据
  传入路由参数
  是Detail组件中的数据需要接收路由参数，从Message这个组件中传进去
  点击修改路由地址时，把参数传进去
  路由参数在传进去的时候是确定的，也就是说，我在点击改变路由地址的时候，就已经确定了点击某个地址是哪个路由参数了
*/
export default {
  name: "Message",
  data() {
    return {
      choices: [
        { id: 1, content: "message01" },
        { id: 2, content: "message02" },
        { id: 3, content: "message03" },
      ],
    };
  },
};
</script>
<style>
</style>
