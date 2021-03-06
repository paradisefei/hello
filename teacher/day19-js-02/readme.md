`https://www.photopea.com/`

#### 变量的类型（容器中的内容）

变量是瓶子。瓶子里面可以放的东西五花八门。

* **数据类型（存储的数据的类型）**

  基本数据类型和对象（复杂，引用）数据类型。

* 基本数据类型

  * 数字 Number
  * 字符串 String
  * 布尔值 Boolean
  * undefined
  * null

* 对象：后面再说。

* Number类型

  * 整数

    最大值：`Number.MAX_VALUE`

    最小值：`Number.MIN_VALUE`

    假如：超过了上面的范围将会转换为`-Infinity`或`Infinity`。（无限、无穷）

    `1.7976931348623157e+308`表示的是`1.797693乘以10的308次方`

  * 小数

    `var flo = 1.23;`

    * `var flo = .23;`也是可以的，小数中必须包含一个小数点，小数点后面必须至少有一位数字。

    * 小数存储占用的内存比较大，所以解析器会自动将浮点数转换为整数。小数点后面的值如果没有意义那小数将会自动转换为整数。`var flo = 10.0;`

    * 0.1+0.2不等于0.3，所有语言中都这样。计算处理会有误差。

      ```html
      var fl1 = 0.1;
      var fl2 = 0.2;
      /* console.log(fl1 + fl2); */
      //先把小数处理为整数，然后再除回去。
      console.log((fl1*10 + fl2*10)/10);
      ```

    * 不常用的（了解一下）

      上面咱们说的都是10进制。

      还有其他进制。2进制、8进制、10进制、16进制。

      * 2进制：0、1，而进制的值用0b开头。
      * 八进制：0~7，以0o开头。
      * 十六进制：0~9a~f，以0x开头。

      不管是多少进制，再输出时都转换为10进制。

  * String类型

    字符串由单引号或双引号包含，这个两种语法在JS中没有区别。

    如果出现引号嵌套的情况，要知道交叉使用，外部是双内部就用单、如果外部是单内部就用双。

    ```js
    var say = "i love'u ";
    console.log(say);
    
    var na = "崔旺";//这是字符串
    na = '123';//也是字符串。
    na = '';//也是字符串   空串。 
    na = '           ';//也是字符串    空白串。
    ```

    特殊的一些字符（转义字符，将字符本身的意义去掉，让他变为普通字符）。

    ```js
    \r 回车
    \n 换行
    \t 制表符
    \\ 斜杠
    \' 纯单引号
    \" 纯双引号
    ```

    ```js
    var say = 'i love\'u';
    
    console.log(say);
    ```

  * Boolean类型

    用来做开关，条件的处理。

    只有两个值：true（真）、false（假）。

  * undefined类型

    undefined类型只有一个值，既undefined。表示变量声明但是没有初始化。

    ```js
    var cuiwangzhenyingjun;
    console.log(cuiwangzhenyingjun);
    ```

  * null类型

    只有一个值就是null，定义的变量赋值null就是null类型。

    ```js
    var cuiwangzhenyingjun = null;
    console.log(cuiwangzhenyingjun);
    ```

    我们以后讲到对象的时候就知道了。通常情况下我们对对象初始化或者是删除一个对象的时候会用到。

#### 如何获得变量的类型

可以使用`typeof 值/变量`来获得返回的类型。

返回值以 `数据类型名`的小写形式。

* boolean，布尔值

* string，字符串

* number，数值

* undefined，值未定义（变量未初始化）

  * 未声明和未初始化的变量都会返回undefined。可以认为其不能够真正的使用。

    ```js
    console.log(typeof str);
    
    var str1;//undefiend。
    
    console.log(typeof str1);
    ```

    变量未声明直接使用会报错。未声明只能进行一种操作就是`typeof`。

* object，对象或null都会返回object。

  ```js
  var o = {};//这是声明一个对象的方法。
  console.log(typeof o);
  var b = null;//这个值是null
  console.log(typeof b);
  ```

  __typeof null返回的是object。__

  这样会给人一些误导：会认为null是对象、复杂类型。但是null就是基本类型。

* 其他值，后面讲到的时候再说。

  开心猜猜猜`console.log(typeof typeof true);`。



#### 类型转换

JavaScript是弱类型语言，弱在哪里？

1. 强类型语言必须在声明变量的时候指定相对应的数据类型。
2. 弱类型语言定义了什么类型之后，变量里面的类型可以随着值的变化而变化，而且可以自动转换。



类型转换分为两种类型： 

* 强制类型转换，我自己强制让某个值进行转换。
* 隐式类型转换，变量在配合后面讲的运算符进行运行时自动发生的类型转换。



#### 强制类型转换***************************************

* `Boolean()`小工具：将制定类型的值转换为布尔值，转换得到的结果只能是true或false。

  * 字符串：任何非空都转换为true，`空串`（`var a=''`）转换为false。

  * 数值：0和NaN得到是false，其他数得到的是true。

    NaN：(非数值，Not a Number)，是一个特殊的数值，用来表示本来要返回一个数但是返回的不是一个数的情况。

  * undefined得到false。

  * 任何对象转换为true，null转换为false。

* `Number()`小工具：将非数值转换为数值。

  * true转换为1，false转换为0。
  * null转换为0。
  * undefined转换为NaN。
  * 字符串转换为规则： （太霸道了，我们都不喜欢这么直接的）
    * 字符串中只包含数字，则将其转换为十进制的数值。（如果空格开头并且后面是纯数值，空格将会被忽略）。
    * 空字符串（`var a = ''`）或空白字符串(`var a= '    '`)转换为0。
    * 除了上面的格式之外其他的都转换为NaN。

* `parseInt()`，将字符串转换为整数（如果其中的值不是字符串就先转换为字符串），它会忽略字符串前面的空格，直到找到第一个非空格的字符，如果第一个字符不是数字或负号将会返回NaN。如果第一个是数字就会继续向后找一直找找啊找找到不是数字的地方停下来。

  ```js
   var str = '123456哈哈';
  console.log(parseInt(str));
  var str1 = '    123456haha';
  console.log(parseInt(str1));
  var str2 = 'haha123456';
  console.log(parseInt(str2));
  ```

  ```js
  var flag = true;
  console.log(parseInt(flag));//parseInt('true')  只将字符串转换为数值。不是我先转字符串。
  console.log(Number(flag));//Number(true);//1 任何类型都转换为数值
  ```

* `parseFloat()`，将字符串转换为小数。

* `toString()`工具，这个工具唯一要做的就是返回对应类型的相应字符串。

  布尔值、数值、字符串都有`toString()`

  ```js
  var num = 1;
  var bool = true;
  console.log(num.toString());//字符串的1
  console.log(bool.toString());//字符串的true//也就是由字母t、r、u、e组成的字符串。
  ```

* String()工具，将变量转换为字符串，如果变量的值是null或undefined将会原样转换。如果变量的值是字符串、布尔值、数值那么会在内部调用`toString()`

  * 如果值能够调用toString()工具，则调用该工具并返回对应的结果。
  * 如果值是null，则返回的是`'null'`。（字符串的）
  * 如果值是undefined，则返回的是`'undefiend'`（字符串的）



#### 隐式类型转换

隐式类型转换和上面的规则相同，只不过刚才我们所说的是调用了`xxxx工具`手动执行的，隐式类型转换是和运算符一起使用的他是自动的调用的`xxxx工具`自动完成的。