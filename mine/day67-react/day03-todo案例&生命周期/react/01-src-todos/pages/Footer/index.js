import React, { Component } from 'react';
import './index.css';
export default class Footer extends Component {
	/* 
    1.修改已完成数和全部数
    2.从APP组件中传入数据
      已完成数
      全部数
    3.两数相等时checkbox选中
    4.点击checkbox，全选中或全不选中
      1.根据checkbox的checked值来处理原始数据中的isDone
      2.从App中传入函数进行处理

    点击清空已完成任务按钮
      1.从App传入函数
      2.把函数直接放在事件后当作事件函数
      3.函数执行就说明触发了事件

    所有任务都删除后底部复选框勾选了
  */

	render() {
		// console.log(this.props);
		const { finishedTask, allTask, updateCheckBoxFooter,deleteFinishedTask } = this.props;
		return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" checked={allTask && finishedTask === allTask} onChange={updateCheckBoxFooter} />
				</label>
				<span>
					<span>已完成{finishedTask}</span> / 全部{allTask}
				</span>
				<button className="btn btn-danger" onClick={deleteFinishedTask}>清除已完成任务</button>
			</div>
		);
	}
}
