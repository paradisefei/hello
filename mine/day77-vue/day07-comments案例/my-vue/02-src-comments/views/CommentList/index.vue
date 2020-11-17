<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="!allComments.length">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <CommentDel
        v-for="eachComment in allComments"
        :key="eachComment.id"
        :eachComment="eachComment"
        :delCommentApp="delCommentApp"
      />
    </ul>
  </div>
</template>
<script>
/*
    1.导出
    2.导入Del组件
    3.要接受才能使用父组件传过来的数据
    4.把每一项数据传入到CommentDel中
  */
import CommentDel from "../CommentDel";

export default {
  name: "CommentList",
  props: {
    allComments: Array,
    delCommentApp: Function,
  },
  components: {
    CommentDel,
  },
};
</script>
<style>
.reply {
  margin-top: 0px;
}
.user {
  font-size: 22px;
}
</style>
