function MyPromise(executor) {
    /* 
        1.参数
            执行器函数
        2.功能
            1.promise内部会执行执行器函数
            2.执行器函数有两个参数，这两个参数都是函数:resolve和reject，这两个函数是promise内部提供的，需要在promise内部定义
            3.resolve/reject函数
                1.改变状态(状态只改变一次)
            4.then
                1.resolve函数执行了就会触发then中的回调执行，resolve函数不执行就不会触发then中的回调执行，这样的话就需要把then中的回调放入到resolve中去执行，所以就可以在实例化对象上定义一个容器存放，把两者联系了起来，这样两者都可以操作得到
                    执行resolve时会触发then中的回调执行，在还没有执行到then但resolve已经开始执行的时候此时容器为空，看起来好像并没有触发then中回调的执行，要等到执行到then把回调注册进容器，整个同步微任务执行完了才会执行then的回调，要的不是立即执行，而是执行resolve最终会触发then中成功的回调
                2.在第一次执行时，代码走到resolve时容器中并没有注册then中的回调，在执行到then时resolve已经执行完了，这样的话resolve并没有来得及触发then中的回调，在每一次同步执行时都是then在后面resolve在前面，所以不会有效果。所以resolve中容器代码应该异步执行，用定时器模拟
                3.同步执行到then时，原本应该是要把then的回调函数添加到容器中，但执行then的最终是要返回一个promise，是根据回调函数的值来确定then中promise的值和状态，所以最终添加到容器中的时对then中回调的处理的函数
            5.TypeError: onRejected is not a function

        3.返回值
            构造调用后会得到一个promise对象
        4.说明
            1.executor是同步执行的
            2.执行promise，promise源码中会执行executor
    */

    //定义变量保存this，
    const that = this;
    this._status = "pending";
    this._value = undefined;
    this.callbacks = {};



    function resolve(value) {
        if (that._status !== "pending") return;
        that._status = "resolved";
        that._value = value;
        setTimeout(() => {
            that.callbacks.onResolved && that.callbacks.onResolved(value);
        })

    }
    function reject(value) {
        if (that._status !== "pending") return;
        that._status = "rejected";
        that._value = value;
        setTimeout(() => {
            that.callbacks.onRejected && that.callbacks.onRejected(value);
        })
    }
    executor(resolve, reject);
}

MyPromise.prototype.then = function (onResolved, onRejected) {
    /* 
        1.将回调函数添加到实例化对象的容器中
        2.then返回一个promise
    */
    //如果没有传入回调函数
    onResolved = typeof onResolved === "function" ? onResolved : (value) => { return value };
    onRejected = typeof onRejected === "function" ? onRejected : (reason) => { throw reason };
    const that = this;
    return new MyPromise(((resolve, reject) => {

        that.callbacks.onResolved = function (value) {
            try {
                /* 
                1.根据回调函数的返回值来确定then中最终返回的promise的状态和值
            */
                const res = onResolved(value);
                if (res instanceof MyPromise) {
                    /* 
                        1.回调函数返回的是promise，then的promise状态和值跟回调函数的一样
                    */
                    res.then(resolve, reject);
                } else {
                    //回调函数返回的不是promise，then的promise状态为成功，值为返回的值
                    resolve(res);
                }
            } catch (err) {
                reject(err);
            }
        };
        that.callbacks.onRejected = function (value) {
            try {
                /* 
                1.根据回调函数的返回值来确定then中最终返回的promise的状态和值
            */
                const res = onRejected(value);
                if (res instanceof MyPromise) {
                    /* 
                        1.回调函数返回的是promise，then的promise状态和值跟回调函数的一样
                    */
                    res.then(resolve, reject);
                } else {
                    //回调函数返回的不是promise，then的promise状态为成功，值为返回的值
                    resolve(res);
                }
            } catch (err) {
                reject(err);
            }
        };
    }))
    // this.callbacks.onResolved = onResolved;
    // this.callbacks.onRejected = onRejected;
}

MyPromise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected);
}
MyPromise.resolve = function (value) {

    /* 
        1.value如果是一个promise
            如果是一个成功的promise，返回的promise的值为该promise的值
            如果是一个失败的promise，返回一个失败的promise
            如果value是一个promise，则直接返回这个promise
        2.value如果不是一个promise
            返回一个成功的promise，值为value
    */
    if (value instanceof MyPromise) {
        return value;
    }
    else {
        return new MyPromise((resolve) => { resolve(value) })
    }
}
MyPromise.reject = function (reason) {
    /* 
1.reason如果是一个promise
    不管reason这个promise是成功还是失败，最终结果都是返回一个失败状态的promise，值为reason这个promise
2.reason不是一个promise
    最终结果返回一个失败状态的promise，值为reason
    */
    return new MyPromise((resolve, reject) => { reject(reason) })

}


MyPromise.all = function (arr) {
    /* 
        1.参数是一个数组，数组中的元素有可能是一个promise，有可能不是，不是promise的话默认将其封装成成功状态的promise
        2.方法的最终结果是返回一个promise
            如果数组中的所有元素最终都是成功状态的promise，则该方法的结果就是一个成功状态的promise，值为那些promise的值组成的数组
            如果数组中有失败状态的promise，则最终结果是失败状态的promise，值为数组下标从小到大的顺序中第一个失败状态promise的值
    */
    let newArr = [];
    const aLength = arr.length;
    let count = 0;
    return new MyPromise((resolve, reject) => {
        arr.forEach((item, index) => {
            /* 
                1.遍历数组
                2.判断
                    如果是promise，要知道这个promise是成功的还是失败的，如何判断一个promise对象是成功的还是失败的
                        如果是成功的，就要把这个成功的promise的值放入到新数组中的相应位置
                        如果是失败的，该方法返回一个失败的promise
                    如果不是promise，则把这个值放入到新数组的相应位置
            */
            if (item instanceof MyPromise) {
                item.then((res) => {
                    newArr[index] = res;
                    //添加一次计数器就加1，计数器就是最后用来看元素是否全加入进来了
                    count++
                    //判断，如果全加进来了，就说明此时已经成功了
                    if (count === aLength) {
                        resolve(newArr);
                    }
                }, reject)
            } else {
                newArr[index] = item;
                //添加一次计数器就加1，计数器就是最后用来看元素是否全加入进来了
                count++
                //判断，如果全加进来了，就说明此时已经成功了
                if (count === aLength) {
                    resolve(newArr);
                }
            }
        })
    })
}
MyPromise.allSettled = function (arr) {

}
