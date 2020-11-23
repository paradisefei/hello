<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header/>
      <Mainer/>
      <Footer/>
    </div>
  </div>
</template>
<script>
/*
  App组件
    1.包含三个组件
      Header
      Main
      Footer
    2.将所有数据传入item中并成功渲染
    3.将addContentApp传入Header组件
*/
import { mapState } from "vuex";

import Header from "./Header";

import Mainer from "./Mainer";

import Footer from "./Footer";

export default {
  name: "App",
  computed: {
    /*
      在computed中获取vuex中state的数据
    */
    ...mapState(["allItems"]),
  },
  components: {
    Header,
    Mainer,
    Footer,
  },
};
</script>
<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
