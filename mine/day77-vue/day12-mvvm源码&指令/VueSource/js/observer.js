function Observer(data) {
    this.data = data;
    this.walk(data);
}

Observer.prototype = {
    walk: function (data) {
        var me = this;
        Object.keys(data).forEach(function (key) {
            me.convert(key, data[key]);
        });
    },
    convert: function (key, val) {
        this.defineReactive(this.data, key, val);
    },

    defineReactive: function (data, key, val) {
        var dep = new Dep();
        var childObj = observe(val);

        /* 
            1.每一层的属性都会被传入到这个defineProperty中去执行，但这些属性是指被添加到了data上

            一开始data是{
                        num: 0,
                        person: {
                        name: "zs",
                        age: 18,
                        score: {
                            yu: 100,
                            shu: 100,
                            ying: 100,
                        }
                        }
                    }
            在执行了defineProperty这个函数后，data就变成了
                    {
                        person: {
                        name: "zs",
                        age: 18,
                        score: {
                            yu: 100,
                            shu: 100,
                            ying: 100,
                        }
                        }
                    }
                    也就是说num就没了
                把属性添加到对象上

                这里只是把每一个属性都添加到data这个对象上
                比如说num这个属性，data上已经有了 
                调用一次defineProperty会把属性从对象中删掉吗

                只有第一层属性被代理了，内部的属性没有被代理，但是所有的属性都转成了getter/setter，也就是说所有的属性都是响应式的
                响应式是响应式，数据代理是数据代理，并不是说只有代理到实例上的属性才有响应式，也不是说所有响应式的数据都代理到了实例上
        */
        Object.defineProperty(data, key, {
            enumerable: true, // 可枚举
            configurable: false, // 不能再define
            get: function () {
                if (Dep.target) {
                    dep.depend();
                }
                return val;
            },
            set: function (newVal) {
                if (newVal === val) {
                    return;
                }
                val = newVal;
                // 新的值是object的话，进行监听
                childObj = observe(newVal);
                // 通知订阅者
                dep.notify();
            }
        });
    }
};

function observe(value, vm) {

    if (!value || typeof value !== 'object') {
        return;
    }
    //留下的只有数组和对象

    return new Observer(value);
};


var uid = 0;

function Dep() {
    this.id = uid++;
    this.subs = [];
}

Dep.prototype = {
    addSub: function (sub) {
        this.subs.push(sub);
    },

    depend: function () {
        Dep.target.addDep(this);
    },

    removeSub: function (sub) {
        var index = this.subs.indexOf(sub);
        if (index != -1) {
            this.subs.splice(index, 1);
        }
    },

    notify: function () {
        this.subs.forEach(function (sub) {
            sub.update();
        });
    }
};

Dep.target = null;