import React, { useState, useEffect } from 'react'

// import Header from "./Header"

export default function App() {
	/* 
		1.函数组件
		2.使用useState
		3.useState函数的返回值是一个数组，第一个值是状态，第二个值是一个方法，可以改变这个状态值
		4.使用useEffect
			1.是一个函数
			2.功能
				模拟生命周期钩子函数
			3.参数
	*/
	const [count, setCount] = useState(1)
	// const [msg, setMsg] = useState("hello")
	/* 
		1.第一个参数是一个函数，默认情况下包括componentDidMount和componentDidUpdate两个函数，也就是说在挂载和更新两个阶段都会执行
		2.第二个参数放一个空数组，就表示只有componentDidMount没有componentDidUpdate(空数组的话只有组件挂载)
			如果数组中有元素，则该元素变了，那么执行更新，但是更新前需要先卸载，所以会先执行卸载
		3.useEffect的返回值是一个函数时，该函数表示的是componentWillUnmount
	*/
	useEffect(() => {
		console.log("我是App的useEffect函数");
		return () => {
			console.log("我是App的useEffect里面的返回值函数")
		}
	}, [count])

	return (
		<>
			<h1>我是APP组件</h1>
			<div>{count}</div>
			<button onClick={() => {
				setCount(count + 1)
			}}>修改count</button>
			{/* <button onClick={() => {
				setMsg("fuck you")
			}}>修改msg</button> */}
		</>
	)
}
