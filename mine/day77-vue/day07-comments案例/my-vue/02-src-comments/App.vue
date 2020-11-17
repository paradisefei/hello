<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <CommentAdd :addCommentApp="addCommentApp" />
      <CommentList :allComments="allComments" :delCommentApp="delCommentApp" />
    </div>
  </div>
</template>
<script>
/*
    1.组件中导出配置对象
    2.html结构
    3.添加评论的组件
      导入
      注册组件
    4.定义多条数据成功展示
      将数组传入List组件
    5.在add组件中输入并添加，最终在List组件中也会添加并渲染
    6.删除
  */
import CommentAdd from "./views/CommentAdd";
import CommentList from "./views/CommentList";

export default {
  name: "App",
  data() {
    return {
      allComments: [
        { id: 1, name: "Tom", content: "hello world" },
        { id: 2, name: "Jack", content: "fuck you" },
      ],
    };
  },
  components: {
    CommentAdd,
    CommentList,
  },
  mounted() {
    console.log(this.CommentAdd);
  },
  methods: {
    addCommentApp(name, content) {
      /*
        1.将该函数传到add组件中去执行
        2.结果是在对象中添加一项数据
        3.传到add组件中
       */
      this.allComments.unshift({ id: Date.now(), name, content });
    },
    delCommentApp(id) {
      /*
        1.根据传入的id来过滤数组
        2.通过List组件传入Del组件中
       */
      console.log(id);
      this.allComments = this.allComments.filter(
        (eachComment) => eachComment.id !== id,
      );
    },
  },
};
</script>
<style>
</style>
