<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="$bus.$emit('delComment', eachComment.id)">删除</a>
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
    1.在这个组件中触发绑定的删除事件
*/
export default {
  name: "CommentDel",
  props: {
    eachComment: Object,
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
