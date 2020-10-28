import React, { useState,useEffect } from 'react'



export default function Header() {

	const [count, setCount] = useState(10)
	const [msg, setMsg] = useState("hello")

	useEffect(()=>{
		console.log("我是Header的useEffect函数");
		return () => {
			console.log("我是Header的useEffect里面的返回值函数")
		}
	},[])

	return (
		<>
			<div>Header组件</div>
		</>
	)
}
