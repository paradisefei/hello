/* 
    1.输入的是一个整数n，输出为反转后的数
    2.如果n小于0，取反，开关
    3.取余得到每一位上的数
        递归取每一位上的数存入数组中
*/
function reverse(num) {
    let flag = true;
    //定义数组保存每个位上的数
    const arr = [];
    //计数每次
    // let 
    if (num < 0) {
        num = -num;
        flag = false;
    }
    function each(num) {
        if (num < 1) return;
        arr.push(num % 10);
        // console.log(arr);
        const newNum = Math.floor(num / 10);
        // console.log(newNum)
        each(newNum);
    }
    each(num);
    // console.log(arr);
    // arr.join();
    //把字符串/数组开头的0去掉
    const newNum = Number(arr.join(""))
    // console.log(Number(arr.join("")));
    if (!flag) {
        console.log(-newNum)
        return;
    }
    console.log(newNum)
}

function reverseTeacher(num) {
    /* 
        1.第一次：%10得到个位上的数，得到一个结果，并把取余后的数用作下一次循环的条件
        2.第二次：将上一个结果*10 + 这次取余得到的结果
    */
    //最终要返回回去的值
    let result = 0;
    while (num) {
        /* 
            1.得到个位上的数
            2.
        */
       //每次得到的个位上的数
        const res = num % 10;
        //让要返回的最终结果变长。在得到一个新的个位上的数时，将原本要返回的数 * 10 再加上新的数
        result = result * 10 + res;
        //让原本用来取余的数变短
        num = (num - res) / 10;
        //如果num等于0时，再返回回去进行条件判断时就会跳出循环
    }
    return result;
}


console.log(reverseTeacher(-1120));
console.log(reverseTeacher(1120))
console.log(reverseTeacher(120))
console.log(reverseTeacher(1))