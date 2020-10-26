/* 
	非受控组件
		
*/
import React from 'react';
export default class Header extends React.Component {
	constructor() {
		super();
		this.txtRef = React.createRef();
	}
	handle = (e) => {
		if (e.keyCode === 13) {
			console.log(this.txtRef.current.value);
		}
	};
	render() {
		return (
			<div>
				{/* 文本框 */}
				<input type="text" ref={this.txtRef} onKeyUp={this.handle} />
				<br />
			</div>
		);
	}
}
