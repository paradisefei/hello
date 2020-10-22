(function (window) {
    window.module1 = {}
    //将来调用add 无论传递几个参数 都可以计算出实参的和
    function add() {
        // arguments 代表所有的实参
        // Array.from(arguments).forEach(function(item,index){})

        // 1.不能直接使用forEach  所以随便写一个数组，拿到forEach  [].forEach-->函数
        //2.[].forEach-->函数   forEach可以遍历前边的数组，因为 forEach的this是指向调用forEach函数的对象
        //3.forEach.call(arguments) 把forEach的this指向了arguments 所以此时forEach遍历的就是arguments
        //4.forEach方法调用需要一个参数，如果使用call调用forEach，forEach的参数应该写在call方法中
        /* [].forEach.call(arguments, function (item, index) {

        }); */
        return Array.prototype.reduce.call(arguments, function (p, c) {
            return p + c;
        })
    }


    function mins(a, b) {
        return a - b;
    }
    window.module1 = {
        add: add,
        mins: mins
    }

})(window);





/* (function (window) {
    window.module1 = {
        add: function () {
            return Array.prototype.reduce.call(arguments, function (p, c) {
                return p + c;
            })
        },
        mins: function (a, b) {
            return a - b;
        }
    }
})(window); */