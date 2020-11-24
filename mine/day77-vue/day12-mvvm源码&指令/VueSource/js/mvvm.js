/*
    数据代理
        1. data是一个对象，data中的数据会被代理到组件实例上
        2. 如何代理
            1. 在实例上扩展$options属性，该属性的值就是传入的配置对象，这样的话组件实例上就能访问到配置对象
            2. 配置对象中又有一堆的属性，然后就是拿到配置对象中data这个对象，把这个对象扩展到组件实例上，为_data
            3. 在组件实例上扩展data中的属性
                1.拿到这些属性
                    Object.keys(data)得到data上所有的属性
                2.把这些属性名扩展到组件实例
                    Object.defineProperty()将属性添加到组件实例上
                    获取某个属性的值，通过_data来获取
                    设置某个属性的值，就是给_data上的这个属性赋新值
                    也就是说，对实例上的某个属性的值的操作其实就是操作的_data上的该属性
                    _data是直接扩展在实例对象上的，没有给这些直接属性赋值，操作的一直都是_data上的
                
                _data和$options.data的地址是一样的，但地址一直都没变，里面的属性怎么随之变化
*/
function MVVM(options) {
    this.$options = options;
    var data = this._data = this.$options.data;
    var me = this;

    // 数据代理
    // 实现 vm.xxx -> vm._data.xxx
    Object.keys(data).forEach(function (key) {
        me._proxy(key);
    });

    observe(data, this);

    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    $watch: function (key, cb, options) {
        new Watcher(this, key, cb);
    },

    _proxy: function (key) {
        var me = this;
        Object.defineProperty(me, key, {
            configurable: false,
            enumerable: true,
            get: function proxyGetter() {
                return me._data[key];
            },
            set: function proxySetter(newVal) {
                me._data[key] = newVal;
            }
        });
    }
};