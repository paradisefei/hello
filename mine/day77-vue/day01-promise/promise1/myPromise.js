/* 
    1.MyPromise是一个构造函数
    2.参数是一个执行器函数
    3.构造调用MyPromise时，会同步执行执行器函数
        执行器函数有两个参数，是两个函数
        这两个函数是在MyPromise中提供的
            会改变状态
        触发then中回调函数的调执行
            回调函数的参数为promise的值
        
*/
function MyPromise(executor) {
    this._status = "pending";
    this._value = undefined;
    this.callbacks = {};
    const that = this;
    function resolve(value) {
        if (that._status !== "pending") return;
        that._status = "resolved";
        this._value = value;
        setTimeout(() => {
            //短路操作:如果注册了回调函数，则执行；如果没有注册回调函数，也就是说没有执行then
            that.callbacks.onResolved && that.callbacks.onResolved(value);
        })
    }
    function reject(value) {
        if (that._status !== "pending") return;
        that._status = "rejected";
        this._value = value;
        setTimeout(() => {
            //短路操作:如果注册了回调函数，则执行；如果没有注册回调函数，也就是说没有执行then
            that.callbacks.onResolved && that.callbacks.onResolved(value);
        })

    }
    executor(resolve, reject);
}
MyPromise.prototype.then = function (onResolved, onRejected) {
    onResolved = typeof onResolved === "function" ? onResolved : (value) => value;
    onRejected = typeof onRejected === "function" ? onRejected : (reason) => { throw reason };
    const that = this;
    return new MyPromise((resolve, reject) => {
        /* 
            将回调函数注册
            根据回调函数返回值来确定then返回的promise的状态和值
        */
        that.callbacks.onResolved = function (value) {
            try {
                const res = onResolved(value);
                if (res instanceof MyPromise) {
                    res.then(resolve, reject)
                }
                else {
                    resolve(res);
                }
            } catch (e) {
                reject(e);
            }
        }
        that.callbacks.onRejected = function (reason) {
            try {
                const res = onRejected(reason);
                if (res instanceof MyPromise) {
                    res.then(resolve, reject)
                }
                else {
                    resolve(res);
                }
            } catch (e) {
                reject(e);
            }
        }
    })
}

    /* 
        1.参数是一个数组，数组中保存的是多个promise实例化对象
        2.功能：返回一个promise1，如果数组中所有的promiseN对象都都成功，则promise1的状态为成功，值为所有promise对象的值组成的数组
        如果有一个promise对象失败，则promise1失败，失败的原因是第一个失败的promise的结果
        3.执行all，执行所有的promise对象
        参数是一个数组
        数组中可以是promise对象，也可能不是promise对象
        都是promise对象
            都是成功的promise
            有失败的
        都不是promise对象
            返回成功的promise，数组中会保存这些值
        如果都是promise对象的话，每一个promise对象都会执行
            每一个promise对象都是自己在外面定义好的，然后放在这个数组中，并不是比谁最快，而是只需要看promise的状态即可
    */
MyPromise.all = function (iterable) {

    // let arr = [];
    return new MyPromise((resolve, reject) => {
        resolve(1)
        /* 
            1.最终返回一个promise
            2.遍历数组中的值
                如果不是promise的值，则保存到数组中
                如果是promise，判断该promise的状态
                    如果有失败状态的promise，则直接reject
                    如果所有promise都是成功状态的，则最终的promise为成功状态
        */
    //    debugger;
        let arr = [];
        iterable.map((item) => {
            console.log(item)
            //如果不是promise对象
            if (!(item instanceof MyPromise)) {
                arr.push(item)
                // return item;
            }
            //如果是promise对象 
            else {
                item.then((res) => {
                    arr.push(res);
                }).catch((reason) => {
                    reject(reason);
                    // exit(1);
                })
            }
        })
        console.log(arr)
        //resolve没有效果
        // resolve(arr);
    })
}