import React, { Component } from 'react'


export default class Position extends Component {
    /* 
        1.写共有状态或逻辑
        2.状态有x,y坐标
        3.逻辑有
            1.鼠标移动事件，在成功挂载函数中执行
            2.清除鼠标移动事件，在卸载函数中执行
    */
    state = {
        x:0,
        y:0
    }
    handle = (e) => {
        /* 
            1.因为需要被清除，所以不能直接写匿名函数
            2.改变状态
        */
       this.setState({
           x:e.clientX,
           y:e.clientY
       })

    }

    componentWillUnmount(){
        // 只有挂载成功了才能执行
        window.removeEventListener(this.handle);
    }
	render() {
		return this.props.children(this.state)
    }
    componentDidMount(){
        // 只有挂载成功了才能执行
        window.addEventListener("mousemove",this.handle)
    }
}