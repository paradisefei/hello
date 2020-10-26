/* 
    事件绑定中的this指向--在类中直接写变量，这个变量是相当于扩展在实例化对象上的变量属性
*/
import React from 'react';
export default class Header2 extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0,
			msg: '点击按钮数字递增，更新UI'
		};
    }
    //按钮点击事件函数
    handle = () => {
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
