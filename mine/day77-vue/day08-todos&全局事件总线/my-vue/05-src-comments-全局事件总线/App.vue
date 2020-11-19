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
      <CommentAdd />
      <CommentList />
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
  components: {
    CommentAdd,
    CommentList,
  },
};
</script>
<style>
</style>
