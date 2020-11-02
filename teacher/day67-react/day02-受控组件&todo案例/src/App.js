import React, { Component } from 'react'

import Header from './pages/Header'
import List from './pages/List'
import Footer from './pages/Footer'

import './App.css'
export default class App extends Component {
  render() {
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header></Header>
          <List></List>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}
