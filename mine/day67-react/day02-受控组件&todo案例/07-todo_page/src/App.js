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
		],
		//传入到Header中用于添加todos的
		addToDoObj:(todoName) => {
			/* 
        1.封装一个对象
        2.将对象压入数组中
          1.不要直接在state.todos这个数组上压入
          2.把数组解构生成一个新的数组
          3.在新数组中压入
          4.把新数组setState到state中
      */
			//  封装一个对象
			const toDoObj = {
				id: Date.now(),
				todoName,
				isDone: false
      };
      // 将todos解构出一个新的数组
      const newArr = [...this.state.todos];
      //在新数组中push如对象
      newArr.push(toDoObj);
      //setState
      this.setState({
        todos:newArr
      })
		}
	};
	render() {
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addToDoObj={this.state.addToDoObj} />
					<List todos={this.state.todos} />
					<Footer />
				</div>
			</div>
		);
	}
}
