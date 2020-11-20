<template>
  <div class="row">
    <h3 v-if="showContent === 'warningInput'">输入文字搜索</h3>
    <h3 v-else-if="showContent === 'loading'">Loading...</h3>
    <div v-else>
      <div class="card" v-for="user in usefulData" :key="user.id">
        <a :href="user.urlToWeb" target="_blank">
          <img :src="user.urlToPhoto" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.userName }}</p>
      </div>
    </div>
  </div>
</template>
<script>
/*
    没有内容显示时，显示文字
    在请求过程中，显示Loading...
    得到数据来渲染
*/
import axios from "axios";

export default {
  name: "",
  data() {
    return {
      showContent: "warningInput",
      usefulData: [],
    };
  },
  mounted() {
    /*
      绑定事件，请求数据
     */
    this.$bus.$on("getResult", (searchContent) => {
      /*
        1.发起axios请求
        2.请求过程中，修改showContent
        3.获取到数据时，修改showContent，将获取到的数据渲染到页面上
        4.将有用的数据
      */
      if (!searchContent) {
        alert("输入文本不能为空");
        return;
      }
      this.showContent = "loading";
      axios
        .get("/search/users?q=aa")
        // .get("https://api.github.com/search/repositories?q=v&sort=stars")
        .then((res) => {
          this.showContent = "usefulData";
          console.log(res.data.items);
          this.usefulData = res.data.items.map((user) => ({
            // id: user.id,
            // userName: user.login,
            // urlToWeb: user.html_url,
            // urlToPhoto: user.avatar_url,
            id: user.id,
            userName: user.name,
            urlToWeb: user.html_url,
            urlToPhoto: user.avatar_url,
          }));
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
};
</script>
<style>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
