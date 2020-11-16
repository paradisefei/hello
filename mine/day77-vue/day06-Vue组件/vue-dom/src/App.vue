
<template>
  <div id="first">
    {{ msg }}
    {{ num }}
    <button @click="add">按钮</button>
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
    */
export default {
  name: "App",
  data() {
    return {
      msg: "hello world",
      num:0
    };
  },
  methods: {
      add(){
          this.num++
      }
  },
};
</script>
<style >
#first {
  width: 500px;
  height: 500px;
  background: red;
}
</style>