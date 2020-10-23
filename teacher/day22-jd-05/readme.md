#### while循环

嵌套过程中：
* while里面直接写true，就是死循环。
* while循环通常用来做条件循环。
* 循环可以相互嵌套，实际应用中嵌套不要超过3层。



#### for循环

格式：

```js
for(表达式1;表达式2;表达式3){
    循环的代码
}
```

* 表达式1为初始化条件
* 表达式2为条件表达式
* 表达式3为计数条件（自增、自减等等）

```js
for (var num = 1;num <= 3;num++) {
    console.log(num);
}
```



执行过程：

1. 先执行`表达式1`，`num=1`
2. 执行`表达式2`判断条件是否成立`1<=3`结果为true。
3. 执行代码块打印当前的num，1。
4. 执行`表达式3`，自增，执行完成之后`num=2`
5. 执行`表达式2`判断条件是否成立`2<=3`结果为true。
6. 执行代码块打印当前的num，2。
7. 执行`表达式3`进行自增，执行完成之后`num=3`
8. 执行`表达式2`，判断条件是否成立(`3<=3`)，true。
9. 执行代码块打印当前的num,3。
10. 执行`表达式3`进行自增，执行完成之后就是 num=4
11. 执行表达式2，4<=3 ，结果为false。循环终止。



__注意：__

1. 整个表达式1执行了一次。

2. 我有时候很任性。for循环我能不能用while的结构写：

   ```js
   var num = 1;
   for (;num <=3;) {
       console.log('真英俊！');
       num++;
   }
   ```

3. 表达式3不单单可以使用`++`也可以使用`--`，其他的数学运算符都行。

```html
^^^*^^^   //第一行一个星星  6个上尖角号  //7  - 1   = 6  
^^***^^   //第二行三个星星  4个上尖角号  //7  -3   =  4
^*****^   //第三行5个星星   2个上尖角号 //7  -5  = 2
*******
```

​	4. for循环一般用在计数循环中。

#### do...while

```js
do{
	重复执行的代码;
}while(条件表达式);
```

第一步先执行do中语句，然后在检查表达式是否成立，如果成立true继续执行do中的代码。如果不成立终止循环。

__不管怎么样do...while循环都会最少执行一次。__



#### 特殊的流程控制。

* break

  * 作用1：在switch语句中是跳出整个switch。
  * 作用2：在循环中，跳出离它最近的一层循环（本次循环），break下面的代码不执行了。__结束本层循环__

  做俯卧撑。  崔旺上课调皮，我罚它做俯卧撑。做到死。

* continue

  作用：__结束本次循环__，从下一次继续开始。continue以下的代码不会再执行了。

  1~5 上课  周三表现不错，我说今天没作业。   周四和周五依然会有 作用。







质数：这个数只能被1和它自身整除，这个数就叫质数。1不是质数。



#### 数组

基本类型的变量只能存一个值，数组可以存储一组数据。 



好处是什么，可以对数组里面的数据进行批量的操作。



#### 基本概念

* 数组：一组值，可以存储多个值。（每一项可以保存任何类型的数据，但是一般情况下都是相同类型的数据。）__数组中数据是有序的。__

* 下标（索引、键、key），为了能够拿到对应位置数据，所以给他们进行了编号，这个编号我们叫下标、key、键。

  下标都是从0开始的。所有语言中的索引都是从0开始。

* 元素：下标和值的组合我们叫元素。

* 数组是对象类型（引用类型、复杂类型）。

  面向对象语言中都有类和对象的概念。但是ES比较特殊，有对象，没有类。

  物以类聚，人以群分。

  * 类：具有相同特征的事物的总称。空调：一说空调我们就有大概的印象：能够制冷、制热、除湿。

    * 每一个类型都有一些共同的特征，这些特征我们叫属性。空调有牌子、功率。
    * 每一个类中有一些共有的行为，这些行为我们叫方法。空调制冷、制热。

    人：说话   走路  眼睛  鼻子   嘴   吃饭

    男人、女人  人类

    人、猪         哺乳动物

  * 对象： 是类的具体化，比如说空调我们有个大概的印象，它不是具体的某个空调，假如我说。我家里的那个空调。具体的某一个我给它叫对象。

  * 类和对象的关系：根据类创建出来的实体就是对象。对象也拥有属性和方法。

#### 数组创建

1. 使用`Array`来创建。

   ```js
   var colors = new Array();
   
   console.log(typeof colors);
   ```

   new是操作符表示调用后面的内容（`Array`可以暂时将Array看成是刚才我们所说的类，但是实际上不是。）创建一个对象。

   * 在`Array()`中传递数组中应该包含的项。

     ```js
     var colors = new Array('red','blue','green');
     ```

   * Array中如果只有一个元素并且元素是数值，将会创建有`数值个数`的元素的数组。如果只有一个元素值这个元素值是其他类型则会创建只有一个元素的数组。

     ```js
     var colors = new Array(20);
     console.log(colors);//[empty*20]//这里面有20个元素但是每个元素都是空的。
     var colors1 = new Array('red');
     console.log(colors1);//colors这个里面只有一个元素，这个元素是red
     ```

   * 声明数组时也可以省略new操作符，效果与new Array相同。

     ```js
     var colors = Array('red');
     
     console.log(colors);
     ```

2. 使用数组字面量方式

   数组字面量由一对包含数组项的方括号表示。

   ```js
   var colors = ['red','green','blue'];
   console.log(colors);
   ```

   字面量方式定义与new Array这种方式结果相同。

#### 数组元素的个数

数组元素的个数保存在数组的length属性中，这个属性的值始终大于等于0。

```js
var colors = ['red','green','blue'];
console.log(colors);

console.log(colors.length);//数组.属性
```

我始终要获得数组的最后一个元素。

如果要获得数组的最后一项的索引：`length - 1`

```js
var colors = ['red','green','blue'];
//colors的最后一个元素  colors.length - 1

var colors1 = ['red','green','blue','orange'];
//colors1的最后一个元素  colors.length - 1
console.log(colors);
```

#### 数组的基本操作

* 查看元素的值。

  `数组[下标]`，首先要确定的就是下标。

  ```js
  var colors1 = ['red','green','blue','orange'];
  
  // console.log(colors1[0]);
  console.log(colors1[20]);
  ```

  读取时超过了最大的下标，那么值为`undefined`。

  __中括号中可以放置的是任何返回数值或数值型字符串的表达式。__

  ```js
  console.log(colors1['0']);
  console.log(colors1[1 + 1]);
  console.log(colors1[25 - 25 + 25 -25]);
  ```

  如果我始终要获得数组中的最后一个值。

  ```js
  console.log(colors1[colors1.length - 1]);
  ```

  我们通过for循环配合length属性将所有的值都拿出来这种操作我们叫`遍历`。

  原理：

  1. 我们拿值`colors[0]`,`colors[1]`这种方式。

  2. 我配合for循环从0开始循环，循环指定的个数。

     ```js
     for (var length = 0 ; length < colors1.length ;length++) {
         console.log(length);
     }
     ```

  3.  利用每次得到的length这个变量的值的不同（因为这个length变量的值正好是我每次循环时的下标）

     ```js
     for (var length = 0 ; length < colors1.length ;length++) {
         console.log(colors1[length]);
     }
     ```

* 增加元素

  不同的位置增加

  * 在末尾添加元素

    * 直接设置下标添加

      ```js
      var colors = ['red', 'green', 'blue'];
      colors[3] = 'pink';
      console.log(colors);
      ```

      设置的时候超过了最大的下标，那么数组的最大下标为设置后的下标，同时长度也会变为设置后的下标。

      ```js
      var colors = ['red', 'green', 'blue'];
      colors[5] = 'pink';//colors数组中最大的下标为5。3、4因为没有设置具体的值所以值为undefiend。
      console.log(colors);//[red,green,blue,undefiend,undefined,pink]
      ```

    * 使用length属性始终向数组末尾添加

      ```js
      var colors = ['red', 'green', 'blue','yellow','white'];
      colors[colors.length] = 'pink';//colors[5] = pink
      console.log(colors);
      ```

  * 在开始处添加代码

    ```js
    var colors = ['red', 'green', 'blue'];
    //1. 找位置。
    /*
            i = 3   3>=0  true
                colors[i]=colors[i-1]   colors[3] = colors[2]
            i = 2   2>=0  true
                colors[2] = colors[1]
            i = 1   1>=0  true
                colors[1] colors[0]
            i =0    0>=0 true
                colors[0] = colors[-1]
    
            i = -1  -1 >=0  false
    
    
            ------------------------
            colors[3] = colors[2]
            ['red', 'green', 'blue','blue'];
    
            colors[2] = colors[1]
            ['red', 'green', 'green','blue'];
    
            colors[1] colors[0]
            ['red', 'red', 'green','blue'];
    
    
    
            colors[0] = colors[-1]
            [undefined, 'red', 'green','blue'];
            */
    		for (var i = colors.length; i >=0 ;i--) {
                colors[i] = colors[i-1];
            }
    
            console.log(colors);
            colors[0] = 'pink';
    
            console.log(colors);
    ```

  * 我想在中间添加（原理同上）

* 删除元素

  * 末尾删除

    我们数组中有多少个元素是由length属性决定的。如果我将length的值改为比原来的length值小那么将会从后面删除元素。 

    ```js
    var colors = ['red', 'green', 'blue'];
    /* colors.length = 2; */
    colors.length--;
    
    console.log(colors);
    ```

# 作业：输出1~100的__质数__。`[https://baike.baidu.com/item/%E8%B4%A8%E6%95%B0/263515?fr=aladdin](https://baike.baidu.com/item/质数/263515?fr=aladdin)`

# 作业：删除开头的元素。

