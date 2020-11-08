import React, { Component } from 'react'
import { NavBar, Icon, List, WingBlank } from 'antd-mobile';

import { getAllRegion } from "../../../api/country"
import "./index.css"
const Item = List.Item;
export default class ChooseRegion extends Component {
    /* 
        1.获取数据
        2.点击每个Item，页面跳转到输入手机号页面，并修改地区代码
    */
    state = {
        allRegion: {}
    }
    async componentDidMount() {
        const res = await getAllRegion();
        console.log(res.data.data)
        this.setState({
            allRegion: res.data.data
        })
    }
    fixRegionCode = (code) => {
        /* 
            1.界面跳转到输入手机号界面
        */
        return () => {
            console.log(code)
            this.props.history.replace("/register/phone",{
                code
            })
        }

    }
    render() {
        /* 

        */
        console.log(this.state.allRegion);
        const allInit = Object.keys(this.state.allRegion);
        console.log(allInit);
        return (
            <>
                {/* 顶部 */}
                <WingBlank size="sm" >
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" className="NavBar_icon" />}
                        onLeftClick={() => this.props.history.replace("/register/phone")}>
                        选择国家或地区
                    </NavBar>
                    <div className="aimToEach">
                        {allInit.map((eachInit) => {
                            return <a href={"#" + eachInit} key={eachInit}>{eachInit}</a>
                        })}
                    </div>
                    <div className="renderCountry">
                        {
                            allInit.map((init) => {
                                const arrOfEachInit = this.state.allRegion[init]
                                return <List key={init} id={init} renderHeader={() => { return init }} className="my-list" >
                                    {arrOfEachInit.map((eachCountry) => {
                                        const nameOfCountry = Object.keys(eachCountry)[0];
                                        const codeOfCountry = eachCountry[nameOfCountry];
                                        return <Item key={nameOfCountry} extra={codeOfCountry} onClick={this.fixRegionCode(codeOfCountry)}>{nameOfCountry}</Item>
                                    })}
                                </List>
                            })
                        }
                    </div>


                </WingBlank>
            </>
        )
    }
}