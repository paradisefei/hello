/* 
    类组件
    需求
        1.加数量
*/
import React from 'react';
export default class Header2 extends React.Component {
	constructor() {
		super();
		this.state = {
            count: 0,
            msg:"点击按钮数字递增，更新UI"
		};
	}
	//这个render函数相当于在类的原型对象上扩展的一个方法
	render() {
		// return <div id="Header2">我是类组件</div>;
		return (<div id="Header2">
            <div>{this.state.msg}</div>
            <div>{this.state.count}</div>
            <button onClick={
                ()=>{
                    this.setState({
                        count:this.state.count + 1
                    });
                    console.log(this.state)
                }
            }>按钮</button>
        </div>);
	}
}
