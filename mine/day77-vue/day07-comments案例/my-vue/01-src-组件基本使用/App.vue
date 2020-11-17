
<template>
  <div id="first">
    {{ msg }}
    {{ num }}
    <button @click="add">按钮</button>
    <Father :appaaData="appData"/>
  </div>
</template>
<script>
/*
        vue组件，由三部分组成
        1.template
            最终渲染到页面去的html结构
        2.script
            写组件的配置对象并导出
        3.css
            写样式

        Father组件
          1.成功显示Father组件中的内容
          2.引入Father组件
          3.将父组件的数据传入子组件
            从标签中传入

        data为什么一定要是一个函数
          1.组件是可以被用在各个地方的，
            如果data使用的是对象的话，那组件在不同地方被使用的时候，这些个组件使用的是同一份数据，那如果要修改的话是会相互之间有影响的
            如果data使用的是，每次复用的时候用调用这个函数得到的是一份新的数据，所以在使用的时候就不会相互影响
            只有data这个选项中的数据是响应式的，更新了数据，这里的数据就被更新了，这里的数据更新了，在其它所有选项中，只要是这里面的数据就都会被修改
            为什么data里面的数据修改了，就会重新渲染
              1.data中的每个property是使用definedProperty转换成getter/setter的，
              2.每个组件实例都对应有一个watcher实例，这个实例会把在组件渲染过程中接触过的property记录为依赖
              3.当数据被修改时，会触发依赖项的setter，当依赖项的setter被触发时，会通知watcher，从而使它(watcher)关联的组件被重新渲染
    */
import Father from "./views/Father/index.vue"
export default {
  name: "App",
  data() {
    return {
      msg: "hello world",
      num: 0,
      appData:"我是App中的数据"
    };
  },
  methods: {
    add() {
      this.num++;
    },
  },
  components:{
    Father,
  }
};
</script>
<style >
#first {
  width: 500px;
  height: 500px;
  background: red;
}
</style>
