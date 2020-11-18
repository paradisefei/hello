<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addContentApp="addContentApp" />
      <Mainer :allItems="allItems" :delItemApp="delItemApp" :toggleCheckApp="toggleCheckApp"/>
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
    /* 在这里获取浏览器localStorage 中保存的数据用于渲染 */
    const allItems = JSON.parse(window.localStorage.getItem("allItems")) || [
      { id: 1, content: "hello, how are you", check: false },
      { id: 2, content: "I'm fine thank you,and you?", check: false },
      { id: 3, content: "I'm fine too,bye bye", check: false },
    ];
    return {
      allItems,
    };
  },
  watch: {
    allItems: {
      /*
        监视原始数据，在数据发生改变时将新的数据保存到localStorage中
        window.localStorage.setItem()添加数据
          localStorage 中的键值对总是以字符串的形式存储，也就是说如果传入的不是字符串就会自动转为字符串，所以最好转成json格式保存
      */
      handler(newValue) {
        window.localStorage.setItem("allItems", JSON.stringify(newValue));
      },
      deep: true,
    },
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
          value === this.allLength ? (p.check = true) : (p.check = false);
        });
      },
    },
  },
  methods: {
    addContentApp(content) {
      this.allItems.unshift({ id: Date.now(), content });
    },
    delItemApp(id) {
      if (confirm("确定要删除吗？")) {
        this.allItems = this.allItems.filter((eachItem) => eachItem.id !== id);
      }
    },
    checkAllApp() {
      this.checkedLength = this.checkedLength !== this.allLength
        ? (this.checkedLength = this.allLength)
        : (this.checkedLength = 0);
    },
    clearCheckedApp() {
      if (confirm("确定要批量删除吗？")) {
        this.allItems = this.allItems.filter((eachItem) => !eachItem.check);
      }
    },
    toggleCheckApp(id) {
      this.allItems.forEach((eachItem) => {
        if (eachItem.id === id) {
          eachItem.check = !eachItem.check;
        }
      });
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
