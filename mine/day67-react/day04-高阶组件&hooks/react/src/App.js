import React, { Component } from 'react'

import Mouse from "./pages/Mouse"
import Cat from "./pages/Cat"
import Position from "./Position"

export default class App extends Component {

	render() {
		return (
			<>
{/* 				<Position render={(position) => {
					return (
						<Mouse position={position}></Mouse>
					)
				}}></Position> */}
{/* 				<Position render={(position) => {
					return (
						<Cat position={position}></Cat>
					)
				}}></Position> */}
				<Position>{(position) => {
					return (
						<Mouse position={position}></Mouse>
					)
				}}</Position>
				<Position>{(position) => {
					return (
						<Cat position={position}></Cat>
					)
				}}</Position>
			</>
		)
	}
}
