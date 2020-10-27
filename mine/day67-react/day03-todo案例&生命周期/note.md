#### 生命周期

1. 三大阶段
   1. `Mounting`（挂载）
      1. 创建出元素
      2. 成功渲染
   2. `Updating`（更新）
      1. 由于某些条件致使重新渲染
      2. 成功更新
   3. `Unmounting`（卸载）
      1. 成功卸载
2. `5`个函数
   1. `constructor`
   2. `render`
   3. `componentDidMount`
   4. `componentDidUpdate`
   5. `componentWillUnmount`
3. 在关键的时间点做一些事



#### 组件通讯

1. props
   1. 只能父传子
2. context
   1. 可以传给孙子以及之后
3. `pubsub`
   1. 订阅者模式