import React, { Component } from 'react';
import './index.css';
export default class Item extends Component {
	state = {
		showButton:false
	}
	//定义属性变量来保存是否显示按钮的状态
	isButton = false;
	// 鼠标移入事件函数
	handleEnter = () => {
		/* 
			1.鼠标移入时出现删除按钮
		*/
		this.setState({
			showButton:true
		})
	};
	// 鼠标移出事件函数
	handleLeave = () => {
		this.setState({
			showButton:false
		})
	};

	render() {
		// console.log(this.props.todoObj);
		const { isDone, todoName } = this.props.todoObj;
		return (
			<li onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
				<label>
					<input type="checkbox" checked={isDone} />
					<span className={isDone ? 'line' : ''}>{todoName}</span>
				</label>
				{/* 
					1.当鼠标移入时显示按钮
					2.当鼠标移出时按钮消失
				*/}
				<button className="btn btn-danger" style={{ display: this.state.showButton ? 'block' : 'none' }}>
				{/* <button className="btn btn-danger" style={{ display: 'block'}}> */}
					删除
				</button>
			</li>
		);
	}
}
