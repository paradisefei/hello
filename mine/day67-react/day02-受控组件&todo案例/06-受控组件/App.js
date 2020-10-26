
import React from 'react';
import Header from './Header';

export default class App extends React.Component {

	state = {
		msg: '我是state中的msg'
	};
	haha = () => {

	}
	render() {
		return (
			<div id="App">
				{/* <Header1 /> */}
				<Header list={[19]} obj={{color:12,name:"hello"}}/>
			</div>
		);
	}
}
