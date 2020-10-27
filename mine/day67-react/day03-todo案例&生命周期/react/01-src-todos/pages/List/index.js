import React, { Component } from 'react';
import Item from '../Item';
import './index.css';
export default class List extends Component {
	render() {
		/* 
      1.接收数据
        是一个数组，数组中是一系列的对象保存数据
    */
		//  console.log(this.props.todos);
		return (
			<ul className="todo-main">
				{this.props.todos.map((item, index) => {
					return <Item key={index} todoObj={item} updateCheckBox={this.props.updateCheckBox} deleteItem={this.props.deleteItem}/>;
				})}
			</ul>
		);
	}
}
