import React, { Component } from 'react';
import Header from './pages/Header';
import List from './pages/List';
import Footer from './pages/Footer';
import './App.css';
export default class App extends Component {
	state = {
		todos: [
			{
				id: 1,
				todoName: '吃饭',
				isDone: true
			},
			{
				id: 2,
				todoName: '睡觉',
				isDone: false
			},
			{
				id: 3,
				todoName: '找富婆',
				isDone: false
			}
		]

		//
	};
	//传入到Header中用于添加todos的
	addToDoObj = (todoName) => {
		/* 
			1.封装一个对象
			2.将对象压入数组中
			  1.不要直接在state.todos这个数组上压入
			  2.把数组解构生成一个新的数组
			  3.在新数组中压入
			  4.把新数组setState到state中
		  */

		/* 
				id为递增的数字，在增加元素时，id始终是数组中最后一个元素的id+1
					数组中有元素
					数组中没有元素
		  */
		const { todos } = this.state;
		const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
		//  console.log(id);
		//  封装一个对象
		const toDoObj = {
			id,
			todoName,
			isDone: false
		};
		// 将todos解构出一个新的数组
		const newArr = [ ...this.state.todos ];
		//在新数组中push如对象
		newArr.push(toDoObj);
		//setState
		this.setState({
			todos: newArr
		});
	};
	//最终传入到Item组件中，根据checkbox的checked属性改变原始数据的isDone
	updateCheckBox = (checked, id) => {
		/* 
			1.根据从Item中传入的数据修改原始数据
			2.不要直接在state身上改，要用setState改，只有setState改了之后才会通知React取渲染
		*/
		// console.log(checked,id)
		const newArr = [ ...this.state.todos ];
		newArr.forEach((item) => {
			if (id === item.id) {
				item.isDone = checked;
			}
		});
		this.setState({
			todos: newArr
		});
	};
	//最终传入到Item组件中，根据点击的删除按钮来删除原始数据中对应的项
	deleteItem = (id) => {
		/* 
			根据得到的id值来删除对应item
		*/
		// console.log(id)
		//定义数组重新设置
		let newArr = [ ...this.state.todos ];
		newArr = newArr.filter((item) => {
			return item.id !== id;
		});
		//setState重新渲染
		this.setState({
			todos: newArr
		});
	};
	//最终传入到Footer中根据checkbox的checked来确定原始数据的isDone
	updateCheckBoxFooter = () => {
		// console.log(1)
		/* 
			1.这个函数会触发说明一定是点击了
			2.点击了的话根据item来确定最终是全选中还是全不选中
		*/
		const newArr = this.state.todos;
		//查看每一项的完成情况
		const isEveryDone = newArr.every((item) => {
			return item.isDone;
		});
		newArr.forEach((item) => {
			item.isDone = !isEveryDone;
		});
		this.setState({
			todos: newArr
		});
	};
	//最终传入到Footer处理清除已完成任务
	deleteFinishedTask = () => {
		/* 
			1.根据isDone重新渲染数据
		*/
		let newArr = [ ...this.state.todos ];
		newArr = newArr.filter((item) => {
			return !item.isDone;
		});
		this.setState({
			todos: newArr
		});
	};
	render() {
		/* 
			得到已完成数和所有任务数
		*/
		//总共的任务书
		const allTask = this.state.todos.length;
		//已完成数
		const finishedTask = this.state.todos.reduce((p, item) => {
			if (item.isDone) return p + 1;
			else return p;
		}, 0);
		// console.log(allTask,finishedTask)
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addToDoObj={this.addToDoObj} />
					<List todos={this.state.todos} updateCheckBox={this.updateCheckBox} deleteItem={this.deleteItem} />
					<Footer
						allTask={allTask}
						finishedTask={finishedTask}
						updateCheckBoxFooter={this.updateCheckBoxFooter}
						deleteFinishedTask={this.deleteFinishedTask}
					/>
				</div>
			</div>
		);
	}
}
