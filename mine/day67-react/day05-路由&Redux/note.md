#### React路由

1. 导包react-router-dom，包中可以解构出三个核心组件

2. Router

3. Link

​    仅仅只是修改地址栏

4. Route

​    匹配地址栏，然后引入对应的组件

5. 路径

​    加/是绝对路径,直接加在端口号后面

​    不加/是相对路径，相当于是加./，相对来说

#### 精确匹配

1. exact属性，加了这个属性的Route在匹配的时候只有完全一样的时候才会被渲染

  

####   模糊匹配

1. 默认情况下所有的Route都会进行匹配，然后把匹配上的所有都进行渲染

2. Link中的地址是显示在地址栏的，Route中的地址去跟Link中的地址匹配，如果Route中的地址是Link中地址的头部则匹配上

​      每一个/为一个单位

####   Switch

1. 是一个组件，需要导入

2. 把所有Route用Switch包起来，在进行匹配的过程中，只要匹配到一个就停止匹配

####   Redirect

1. 重定向

2. 有from和to两个属性，如果请求的时from这个地址，最后会跳转到to的地址

3. 页面加载时Route也是会去比对的，如果满足条件就会重定向发生跳转    

#### 编程式导航

1. 被Route控制渲染的组件，通过props可以获取到history,location和match三个属性

2. history

​    push

​      在当前历史记录上加一条

​    replace

​      替换当前的历史记录

3. 路由参数

​    在Route中定义

​    在Link中传递

#### withRouter

1. 只有被Route控制渲染的组件中，props对象上才能得到history，location和match

2. withRouter组件引入的目的就是，即使组件不被Route控制也能获得这三个属性