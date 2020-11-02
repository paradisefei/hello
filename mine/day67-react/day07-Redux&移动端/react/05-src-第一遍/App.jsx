/* 
  1.从react-redux中解构出Provider和connect
*/
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

import WithList from './container/WithList';
import Search from './pages/Search';
import store from './redux/store';

console.log(store.getState())
export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="container">
					<Search />
					<WithList />
				</div>
			</Provider>
		);
	}
}
