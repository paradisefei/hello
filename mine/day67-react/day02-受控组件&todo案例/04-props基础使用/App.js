/* 
    这个是所有React渲染的根目录，所有通过react生成的元素都被渲染进这里
    然后这个组件再被渲染到到页面的root中去
*/
import React from 'react';
import Header3 from './Header3';

export default class App extends React.Component {
	/* 
		props
			1.父组件的数据要传入子组件
				可以是state中的数据，也可以是直接的字符串
				子组件的标签中传入，在子组件内部得到的是一个对象，传入时等号左边的是对象属性，名字可以随便取，等号右边的为对象值
				在子组件内部通过解构来更方便的使用数据
			2.传入子组件，props就是子组件实例化对象上的一个属性，这样的话就可以按照一般的访问实例化对象的属性来访问props了
	*/
	state = {
		msg: '我是state中的msg'
	};
	haha = () => {

	}
	render() {
		return (
			<div id="App">
				{/* <Header1 /> */}
				<Header3 msg={this.state.msg} hello={"hello"} haha={this.haha} obj={{name:"张三",age:19}}/>
			</div>
		);
	}
}
