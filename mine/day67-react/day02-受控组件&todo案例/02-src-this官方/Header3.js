/* 
    事件绑定中的this指向--bind
*/
import React from 'react';
export default class Header2 extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0,
			msg: '点击按钮数字递增，更新UI'
		};
		/* 
			1.先执行后面
			2.后面的handle是原型对象上的
			3.前面的handle是实例化对象上扩展的属性
			4.找属性时，先从实例化对象自身找，找不到再去原型对象上找
			5.bind后把函数中的this指向了实例化对象本身
		*/
		this.handle = this.handle.bind(this);
    }
    //按钮点击事件函数
    handle(){
        this.setState({
            count: this.state.count + 1
        });
        console.log(this.state);
    }
	//这个render函数相当于在类的原型对象上扩展的一个方法
	render() {
        // return <div id="Header2">我是类组件</div>;

		return (
			<div id="Header2">
				<div>{this.state.msg}</div>
				<div>{this.state.count}</div>
				<button
					onClick={this.handle}
					//只会修改被指定的属性，其它属性不会受影响
					// console.log(this.state.count);
				>
					按钮
				</button>
			</div>
		);
	}
}
