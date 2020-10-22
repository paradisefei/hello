#### 移动端页面

### Font Awesome

1. `https://fontawesome.dashgame.com/`网站

2. 使用之前要将`font-awesome.css`里面的字体的路径更改一下。

   ```css
   @font-face {
       font-family: 'FontAwesome';
       src: url('../fonts/fontawesome-webfont.eot');
       src: url('../fonts/fontawesome-webfont.eot')
               format('embedded-opentype'),
           url('../fonts/fontawesome-webfont.woff2') format('woff2'),
           url('../fonts/fontawesome-webfont.woff') format('woff'),
           url('../fonts/fontawesome-webfont.ttf') format('truetype'),
           url('../fonts/fontawesome-webfont.svg')
               format('svg');
       font-weight: normal;
       font-style: normal;
   }
   ```

#### js简介

网景公司，决定开发一种客户端语言，来处理这种简单的验证问题。

### JavaScript的由来

1. `Netscape`开发一种名为`LiveScript`的脚本语言——该语言将同时在浏览器和服务器中使用（设计时可以在服务器端运行，但是在一直没流行起来，直到Node.js的成功，使这个语言开始在后端也流行起来，给整个开发带来了很大的变革）。
2. 为了敢在发布日期之前发布`Netscape`与`Sun公司`建立了一个开发联盟。(Sun公司发布了Java，而且大火，为了赶热度更名为了JavaScript)-------雷锋和雷峰塔、卡巴斯基和巴基斯坦的关系。
3. `JavaScript1.0`取得了巨大的成功之后又发布了`JavaScript1.1`。
4. 没多久之后微软在IE3中加入了自家的竞争产品`JScript`。（和javaScript差不多，微软的这个举措让网景公司日后蒙羞）。
5. 这个时候市面上就有两个版本了javaScript、JScript，但是因为没有标准，两种语言并存导致了很多的问题(比如实现这个功能在Jscript要这样，而在JavaScript要那样)。
6. 97年以JavaScript1.1为原型的建议提交给了ECMA(欧洲计算机制造商协会)，完成了ECMA-262的标准制定。
7. 98年ISO(国际化标准组织)，也采用了ECMA-262标准。这个时候所有的浏览器厂商都开始将ECMA标准作为JavaScript实现基础。



ES5   ECMA5



ES6 ECMA6

### JavaScript的作用

jeff atwood：stackoverflow

Atwood定律：`Any application that can be written in JavaScript, will eventually be written in JavaScript`

现在可以做很多事、表单验证、用户交互（主要学习的）、游戏开发、后端开发(Node.js)、硬件控制。



物竞天择适者生存。



### JavaScript特点

javascript是弱类型的语言、解释型的、脚本语言。

1. 弱类型语言：数据类型不固定、随时可以改变。

2. 解释型：相对于编译型来说。

   什么是编译：我们写的代码我们认识，计算机不认识，所以我们需要让计算机知道我们写的代码的意思，这个过程我们称为编译。

   1. 编译型语言：程序在运行之前要整体的编译。整体的都翻译过来。
   2. 解释型：程序运行的时候不会编译拿一行解释一行。

3. 脚本语言

   脚本：是一种程序，它不能独立运行，需要一个载体来运行它。它就像寄生虫一样。脚本程序也需要有一个运行的环境。__我们现在的运行载体是浏览器。__

### JavaScript的构成

![20200603102745](readme_img/20200603102745.png)

* 核心，ECMAScript，负责核心语法部分

  ES和web浏览器没有直接的依赖关系，他定义的只是这门语言的基础。常见的web浏览器只是ES实现的宿主环境之一。

* 文档对象模型，DOM

  控制页面。

* 浏览器对象模型，BOM

  控制浏览器DOM之外的东西的。

### ECMAScript

### 文档对象模型（DOM，Document Object Model）

### 浏览器对象模型（BOM，Browser Object Model）

# JavaScript基础语法

### 初识使用JavaScript

```html
<script>
    //这里是输出
    alert('我就闫海静');
    console.log('我是个英俊的美男子');
    document.write('我今年18岁!');
</script>
```

1. script标签现在被放在head中。script标签中写的是javascript的代码。

2. 注释符

   ```js
   // 这是单行注释
   /*这是多行注释，块状注释*/
   ```

   注释的作用：

   1. 写程序说明。
   2. 代码暂时不用时，先注释起来。
   3. 调试代码

3. 刚才有三个输出内容的__小工具__。

   1. `alert()`，以弹出框的形式输出内容。
   2. `console.log()`，以控制台日志形式打印内容。
   3. `document.write()`，将内容显示在页面上。

4. ES中的每条语句都以一个分号结尾。可以省略分号，如果省略由解析器确定语句的结尾。

   我们写的时候虽然可以不加分号，但是强烈建议加上分号。这样可以避免很多错误。

5. 关于程序的空白（空格、换行、空行）

   javascript会忽略程序中的空白，所以你可以继续使用缩进来增加可读性。

   代码缩进：一般来说两种4个空格或2个空格。

__一定要注意：JavaScript中的一切都严格区分大小写。__

### 其他使用JavaScript的方法

# 变量

### 什么是变量

### 变量的作用

### 变量的定义

### 变量定义规则

* 关键字和保留字

  ```html
  关键字
  break do instanceof typeof
  case else new var
  catch finally return void
  continue for switch while
  debugger* function this with
  default if throw
  delete in try
  
  保留字
  abstract enum int short
  boolean export interface static
  byte extends long super
  char final native synchronized
  class float package throws
  const goto private transient
  debugger implements protected volatile
  double import public
  ```

* 案例：有两个变量一个中存储的是100一个中存储的是200，交换其中的值（请用两种方法）。

### 变量的类型

### 类型转换的类型

### 强制类型转换

### 隐式类型转换

