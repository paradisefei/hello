<template>
  <div class="container">
    <h2>Router</h2>
    <div class="row">
      <div class="col-md-4">
        <div><router-link to="/about">About</router-link></div>
        <div><router-link to="/home">Home</router-link></div>
      </div>
      <div class="col-md-8">
        <!--
          内部会遍历所有routes的配置，把对应的组件渲染到这个位置
          渲染路径匹配到的视图组件
            此时和修改地址在同一个组件中，新的视图组件确实渲染了，但之前的视图依然存在，这是添加在这同一个组件中，但是
            在不同的地方会同时存在多个<router-view></router-view>，是否项目中所有的<router-view></router-view>都会检测到路径然后渲染
        -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style>
</style>
