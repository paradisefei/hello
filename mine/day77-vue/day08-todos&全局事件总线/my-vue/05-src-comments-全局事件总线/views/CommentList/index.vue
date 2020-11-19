<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="!allComments.length">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <CommentDel
        v-for="eachComment in allComments"
        :key="eachComment.id"
        :eachComment="eachComment"
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
  data() {
    return {
      allComments: [
        { id: 1, name: "Tom", content: "hello world" },
        { id: 2, name: "Jack", content: "fuck you" },
      ],
    };
  },
  /*
    在mounted()中绑定事件
    mounted()
      实例被挂载后调用
      在调用的时候绑定了各种事件监听，是因为事件监听本身的效果实现了在其它地方和其它时间触发时能够执行
      所有的事件绑定都是写在这里
  */
  mounted() {
    /*
      绑定添加数据功能
      绑定删除数据功能
        传入id，删除这个id的数据
      时间监听
        原生DOM事件
        自定义事件
        绑定事件监听，触发该事件时执行回调函数
    */
    this.$bus.$on("addComment", (name, content) => {
      this.allComments.unshift({ id: Date.now(), name, content });
    });
    this.$bus.$on("delComment", (id) => {
      this.allComments = this.allComments.filter((eachComment) => eachComment.id !== id);
    });
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
