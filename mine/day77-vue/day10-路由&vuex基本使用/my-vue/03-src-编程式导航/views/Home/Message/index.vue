<template>
  <div>
    <h3>Message</h3>
    <ul>
      <li v-for="choice in choices" :key="choice.id">
        <router-link :to="`/home/message/detail/${choice.id}`">
          {{ choice.content }}
        </router-link>
        <button @click="handlePush(choice.id)">push</button>
        <button @click="handleReplace(choice.id)">replace</button>
      </li>
    </ul>
    <router-view aName="aValue"></router-view>
  </div>
</template>
<script>
/*
  push:在history栈中添加一条记录
*/
export default {
  name: "Message",
  data() {
    return {
      choices: [
        { id: 1, content: "message01" },
        { id: 2, content: "message02" },
        { id: 3, content: "message03" },
      ],
    };
  },
  methods: {
    handlePush(id) {
      this.$router.push(`/home/message/detail/${id}?name='张三'&age='18'`);
    },
    handleReplace(id) {
      this.$router.replace(`/home/message/detail/${id}?name='张三'&age='18'`);
    },
  },
};
</script>
<style>
</style>
