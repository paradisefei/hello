<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="delComment">删除</a>
    </div>
    <p class="user">
      <span>{{ eachComment.name }}</span
      ><span>说:</span>
    </p>
    <p class="centence">{{ eachComment.content }}</p>
  </li>
</template>
<script>
/*
    1.导出
    2.删除
      a标签绑定点击事件
      删除的就是当前这个li，这个li就是当前组件实例，所以可以找到这个li上面的id
      从App组件中传入函数，根据这个id来删除该项
      删除属于敏感操作，所以要先询问
      删除完了之后，要显示默认文本
*/
export default {
  name: "CommentDel",
  props: {
    eachComment: Object,
    delCommentApp: Function,
  },
  methods: {
    delComment() {
      if (confirm(`您确定要删除${this.eachComment.name}的数据吗？`)) {
        this.delCommentApp(this.eachComment.id);
      }
    },
  },
};
</script>

<style>
li {
  transition: 0.5s;
  overflow: hidden;
}

.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}

.list-group-item .centence {
  padding: 0px 50px;
}
</style>
