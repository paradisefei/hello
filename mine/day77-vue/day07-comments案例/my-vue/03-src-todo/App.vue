<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addContentApp="addContentApp" />
      <Mainer :allItems="allItems" :delItemApp="delItemApp" />
      <Footer
        :allLength="allLength"
        :checkedLength="checkedLength"
        :checkAllApp="checkAllApp"
        :clearCheckedApp="clearCheckedApp"
      />
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
import Header from "./Header";

import Mainer from "./Mainer";

import Footer from "./Footer";

export default {
  name: "App",
  data() {
    return {
      allItems: [
        { id: 1, content: "hello", check: false },
        { id: 2, content: "how are you", check: false },
        { id: 3, content: "I'm fine thank you,and you?", check: false },
        { id: 4, content: "I'm fine too,bye bye", check: false },
      ],
    };
  },
  computed: {
    allLength() {
      return this.allItems.length;
    },
    checkedLength: {
      get() {
        return this.allItems.reduce((p, c) => (c.check ? p + 1 : p), 0);
      },
      set(value) {
        this.allItems.forEach((p) => {
          value === this.allLength ? p.check = true : p.check = false;
        });
      },
    },
  },
  methods: {
    addContentApp(content) {
      this.allItems.unshift({ id: Date.now(), content });
    },
    delItemApp(id) {
      this.allItems = this.allItems.filter((eachItem) => eachItem.id !== id);
    },
    checkAllApp() {
      this.checkedLength = this.checkedLength !== this.allLength ? (this.checkedLength = this.allLength) : (this.checkedLength = 0);
    },
    clearCheckedApp() {
      this.allItems = this.allItems.filter((eachItem) => !eachItem.check);
    },
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
