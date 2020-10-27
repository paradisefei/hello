import React, { Component } from 'react';
import './index.css';
export default class Item extends Component {
	state = {
		showButton:false
	}
	//定义属性变量来保存是否显示按钮的状态
	// isButton = false;
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
	//列表复选框
	handleCheckBox = (e) => {
		/* 
			1.根据checkbox本身的值最终改变原始数据中的isDone
			2.从App传入函数到List，再从List传函数到Item
		*/
		//获取到checkbox的checked值
		const checked = e.target.checked;
		const {id} = this.props.todoObj;
		// console.log(checked)
		//接收到从App中传过来的函数
		this.props.updateCheckBox(checked,id)
	}
	//点击删除
	handleDelete = (e) => {
		/* 
			1.接收传过来的函数，通过那个函数来改变原始数据
		*/
		//得到被点击item的id
		this.props.deleteItem(this.props.todoObj.id);
	}
	render() {
		// console.log(this.props.todoObj);
		const { isDone, todoName } = this.props.todoObj;
		return (
			<li onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
				<label>
					<input type="checkbox" checked={isDone} onChange={this.handleCheckBox} />
					<span className={isDone ? 'line' : ''}>{todoName}</span>
				</label>
				{/* 
					1.当鼠标移入时显示按钮
					2.当鼠标移出时按钮消失
				*/}
				<button className="btn btn-danger" style={{ display: this.state.showButton ? 'block' : 'none' }} onClick={this.handleDelete}>
				{/* <button className="btn btn-danger" style={{ display: 'block'}}> */}
					删除
				</button>
			</li>
		);
	}
}
