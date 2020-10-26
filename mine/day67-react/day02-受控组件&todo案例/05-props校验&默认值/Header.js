/* 
	props校验
		1.导包prop-types，名为PropTypes
		2.propTypes是类身上的一个静态属性，该属性值是一个对象，对象中保存的就是对从父组件传过来的数据的校验
		3.具体有哪些校验规则
	props默认值

*/
import PropTypes from "prop-types"
import React from 'react';
export default class Header extends React.Component {
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
	// 给props设置默认值,如果没有传入改属性的话，就默认添加该属性和属性值；如果传入了该属性，就用传入的
	static defaultProps = {
		size:"D"
	}
	render() {
		console.log(this.props);
		return (
			<div id="Header">
				<div>{this.state.msg}</div>
				<div>{this.state.count}</div>
				<button
					onClick={this.handle}
				>
					按钮
				</button>
			</div>
		);
	}
}
// propTypes是类身上的一个静态属性，所以也可以在类内用static关键字来指定
Header.propTypes = {
	list:PropTypes.array,
	// shape:并不是说一定要对象中所有的属性都包括，其中没有的属性也是可以传进来的，但写了的要满足要求
	obj:PropTypes.shape({
		color:PropTypes.number,
		age:PropTypes.string
	}),
	//加了isRequired了的话就是必须的
	name:PropTypes.string.isRequired
}
