<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="inputContent"
      @keyup.enter="addContent"
    />
  </div>
</template>
<script>
/*
  Header组件
    1.在文本框中输入内容，回车键抬起，提交数据并成功渲染到页面上
      1.收集数据
      2.回车键抬起，将数据添加到App组件中的数组中
*/
export default {
  name: "Header",
  props: {
    addContentApp: Function,
  },
  data() {
    return {
      inputContent: "",
    };
  },
  methods: {
    addContent() {
      if (!this.inputContent) {
        alert("输入不能为空");
        return;
      }
      this.addContentApp(this.inputContent);
      // 添加完之后清空文本内容
      this.inputContent = "";
    },
  },
};
</script>
<style>
/*header*/
.todo-header input {
  width: 560px;
  height: 40px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
  margin-left: 10px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
