<template>
  <div>
    <h4>Detail...</h4>
    <ul>
      <li>id:{{ people.id }}</li>
      <li>name:{{ people.name }}</li>
      <li>age:{{ people.age }}</li>
    </ul>
  </div>
</template>
<script>
/*
  1.基本结构
  2.如何根据传进来的路由参数确定显示哪一条数据
    首先就不能先遍历把所有数据都显示，所有数据是放在这里做数据源，我们只是需要显示一条数据，这条数据是从这个数据源中找到的
    监视属性
  3.$route{
    path: 字符串，对应当前路由的路径，总是解析为绝对路径,
    fullPath: 完成解析后的 URL，包含查询参数和 hash 的完整路径,
    params: 一个 key/value 对象，包含了动态片段和全匹配片段，如果没有路由参数，就是一个空对象,
    query: 一个 key/value 对象，表示 URL 查询参数。例如，对于路径 /foo?user=1，则有 $route.query.user == 1，如果没有查询参数，则是个空对象。
  }
    是组件实例化对象上的属性，路由对象
    表示当前激活的路由的状态信息
*/
export default {
  name: "Detail",
  data() {
    return {
      person: [
        { id: 1, name: "张三", age: 23 },
        { id: 2, name: "李四", age: 24 },
        { id: 3, name: "王五", age: 25 },
      ],
      people: {},
    };
  },
  // props: ["id", "name", "age"],
  props: ["aName"],
  watch: {
    /* 监视属性并不是只能监视data中的数据，监视属性能监视实例上的所有属性 */
    $route: {
      handler() {
        /*
          1.params参数变化了，就根据此时params参数来确定显示哪一条数据
          2.所谓的第一层变化是什么意思
            监视某个属性时，默认情况下deep为false，也就是不深度监听，只有这个属性的值发生了变化才能被监听到，
            $route这个路由对象，在每次点击不同的路由参数的路由时，这个对象是变了的，而不只是里面的这个路径值变了，所以这里不需要使用深度监视
          3.我点击链接，点击某个链接就会渲染对应的那个组件，这个组件上本来就是有一个路由对象的$route，这个时候路由对象就会得到一些信息路由参数，查询参数，路径等，
         */
        console.log(this.$route.query);
        this.people = this.person.find((people) => +this.$route.params.id === people.id);
      },
      immediate: true,
    },
  },
  // watch: {
  //   $route: {
  //     handler() {
  //       console.log(this.id, this.name, this.age);
  //     },
  //     immediate: true,
  //   },
  // },
};
</script>
<style>
</style>
