/* 
	受控组件
		1.表单
		2.使用表单最终要的作用就是使用里面的数据
		3.表单元素可输入值，状态可变
		4.React中也有可变状态，可变状态保存在state中
		5.将state的数据和表单的value绑定在一起，就可以通过state来控制表单元素的值
*/
import React from 'react';
export default class Header extends React.Component {
	/* 
		1.打印文本框中的值
		2.为什么React表单元素给了value属性的话就会需要有onChange事件？
		3.通过state改变表单的值
			通过state给表单的value属性赋值的话，程序运行就会渲染，如果没有onChange事件，无法改变表单的值

	*/

	state = {
		aInput: "input",
		aTextarea: "textarea",
		aSelect: "select",
	};

	/* handleInput = (e) => {
		// 获取用户输入
		const value = e.target.value;
		//修改状态值
		this.setState({
			aInput: value,
		});
	};
	handleTextarea = (e) => {
		// 获取用户输入
		const value = e.target.value;
		//修改状态值
		this.setState({
			aTextarea: value,
		});
	};
	handleSelect = (e) => {
		// 获取用户输入
		const value = e.target.value;
		//修改状态值
		this.setState({
			aSelect: value,
		});
	}; */
	// 三个onChange事件函数看起来很累赘，需要整合
	//根据传入参数不同来区分不同的处理
	handle = (name) => {
		return (e) => {
			const value = e.target.value;
			this.setState({
				[name]: value,
			});
		}
	}
	render() {
		return (
			<div>
				{/* 文本框 */}
				<input type="text" placeholder="请输入" value={this.state.aInput} onChange={this.handle("aInput")} />
				<br />
				{/* 文本域 */}
				<textarea value={this.state.aTextarea} onChange={this.handle("aTextarea")}/>
				<br/>
				{/* 下拉列表 */}
				<select value={this.state.aSelect} onChange={this.handle("aSelect")}>
					<option value="1">北京</option>
					<option value="2">上海</option>
					<option value="3">广州</option>
					<option value="4">深圳</option>
				</select>
			</div>
		);
	}
}
