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


        3.返回值
            构造调用后会得到一个promise对象
        4.说明
            1.executor是同步执行的
            2.执行promise，promise源码中会执行executor

    */

    //定义变量保存this，
    const that = this;
    this._status = "pending";
    this._value
    this.callbacks = {};

    function resolve(value) {
        if (that._status !== "pending") return;
        that._status = "resolved";
        setTimeout(() => {
            that.callbacks.onResolved && that.callbacks.onResolved(value)
        })

    }
    function reject() {
        if (that._status !== "pending") return;
        that._status = "rejected";
    }
    executor(resolve, reject);
}

MyPromise.prototype.then = function (onResolved, onRejected) {
    /* 
        1.将回调函数添加到实例化对象的容器中
    */
    this.callbacks.onResolved = onResolved;
    this.callbacks.onRejected = onRejected;
}
