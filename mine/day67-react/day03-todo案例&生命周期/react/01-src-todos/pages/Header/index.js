import React, { Component } from 'react';
import './index.css';
export default class Header extends Component {
	/* 
    添加元素
      1.获取header中的文本
        受控组件
          state
          onChange
      2.封装成一个对象
      3.在原始数组中添加该对象
      4.回车键事件
        onKeyUp
  */
	state = {
		todoName: ''
	};
	handle = (e) => {
		const value = e.target.value;
		this.setState({
			todoName: value.trim()
		});
	};
	//  添加元素
	addToDoObj = (e) => {
		/* 
      1.从父组件中传入一个函数
      2.封装一个对象
      3.当是抬起enter键时执行
      4.父组件传过来的数据在子组件中都能读的到
    */
		//  只有在回车键抬起事件时才会执行
		if (e.keyCode === 13) {
			/* 
        判断输入
          如果输入为空
          如果输入空格
     */
			if (!this.state.todoName) return;
			this.props.addToDoObj(this.state.todoName);
		}
	};
	render() {
		// console.log(this.props.addToDoObj)
		// const {addToDoObj} = this.props;
		return (
			<div className="todo-header">
				<input
					type="text"
					placeholder="请输入你的任务名称，按回车键确认"
					value={this.state.todoName}
					onKeyUp={this.addToDoObj}
					onChange={this.handle}
				/>
			</div>
		);
	}
}
