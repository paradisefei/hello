<template>
  <div class="todo-footer">
    <label>
      <input
        type="checkbox"
        :checked="checkedLength && allLength === checkedLength"
        @click="checkAllApp"
      />
    </label>
    <span>
      <span>已完成{{ checkedLength }}</span> / 全部{{ allLength }}
    </span>
    <button class="btn btn-danger" @click="clearCheckedApp">
      清除已完成任务
    </button>
  </div>
</template>
<script>
/*
    1.每一次添加删除，数组长度都会自动变化，使用计算属性实现
    2.点击这里的复选框，改变checkedLength
*/
export default {
  name: "Footer",
  props: {
    allLength: Number,
    checkedLength: Number,
    checkAllApp: Function,
    clearCheckedApp: Function,
  },
};
</script>
<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
