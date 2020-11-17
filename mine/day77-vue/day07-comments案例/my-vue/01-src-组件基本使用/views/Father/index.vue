<template>
  <div>
    <h2>{{ msg }}</h2>
    <p>{{ num }}</p>
    <button @click="change">按钮</button>
  </div>
</template>
<script>
/*
        导出配置对象
        html结构
    */
export default {
  name: "Father",
  data() {
    return {
      msg: "Father组件",
      num: 10,
    };
  },
  /*
            父组件中传过来的数据需要在props中接收才能在子组件中使用
            使用数组接收
                1.数组中的数据要用引号引起来，此时引号中的是在子组件中传入时等号左边的，相当于是一个变量，在这里就是得到这个变量，在子组件中直接使用该变量就能得到传进来的值
            使用对象接收
                1.对象的键值对中，键是传入进来的变量名(也就是等号左边的)，值是表示这个变量得到的值是什么类型的
                2.对象键值对中，键是传进来的变量名，值是一个对象，表示对象变狼的一些配置项
            props中的数据会被代理到vm实例上
  */
  // props: ["appaaData"],
  // props: {
  //   appaaData: String,
  // },
  props: {
    appaaData: {
      type: String,
      required: true,
    },
  },
  methods: {
    change() {
      this.num += 10;
    },
  },
  mounted() {
    console.log(this);
    console.log(this._props.appaaData);
    console.log(this.appaaData);
  },
};
</script>
<style></style>
