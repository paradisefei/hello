```js
1.forEach
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      /* 
          如果第一个参数是数组的话，传入进来的函数会执行length次，每一次的参数都是(数组元素，下标，数组)，
      */
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      /* 
        如果第一个参数是一个对象的话，每一个直接属性上运行给定函数
      */
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
```

#### 发送请求的流程

1. 执行`axios`函数，`axios`函数是`creactInstance()`执行后返回的`instance()`函数
2. `creactInstance()`内部执行会创建`Axios`实例化对象，创建实例化对象时会传入默认的配置信息
3. 执行`instance()`函数最终会执行`Axios`实例化对象上的`request()`方法，此时`request()`方法中的`this`执行创建出来的`Axios`实例化对象
4. 此时实例化对象上就有默认值，拦截器以及后续的所有请求方式的方法

#### `XMLHttpRequest.open()`

1. 用于指定HTTP请求的参数，或者说初始化`XMLHttpRequest`实例化对象，初始化一个请求准备发送
2. 将`readyState`赋值为1
3. 使用`XMLHttpRequest`对象来实现Ajax这个技术，发送的其实是一个HTTP请求，习惯上来说就是发送Ajax请求
4. open是`XMLHttpRequest`实例化对象上的方法，改变的是这个实例化对象身上的某些东西，也就是对该实例化对象进行初始化

#### `XMLHttpRequest.send()`

##### 调用`send()`之后发生了什么























