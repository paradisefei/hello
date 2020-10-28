import React, { Component } from 'react'

import CatUrl from "../assets/cat.gif"

export default class Cat extends Component {

    render() {
        let { x, y } = this.props.position;
        x += 200;
        y -= 50;
        return (
            <>
                <img src={CatUrl} style={{ position: "absolute", left: x, top: y }}></img>
            </>
        )
    }
}