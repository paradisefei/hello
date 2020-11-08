import React, { Component } from 'react'
import { NavBar, Icon, List } from 'antd-mobile'
import { getCountryData } from '../../api/common/common'
const Item = List.Item
export default class Country extends Component {
  state = {
    countryData: {}
  }
  async componentDidMount() {
    const res = await getCountryData()
    console.log(res)
    this.setState({
      countryData: res.data.data
    })
  }
  render() {
    /* 
      1.查看返回的数据
      2.渲染得到所有的列表
        1.Object.keys
    */
    console.log(this.state.countryData);
    const keyOfData = Object.keys(this.state.countryData);
    console.log(keyOfData)
    return (
      <div>
        <NavBar
          mode='light'
          icon={<Icon type='left' className='navbar-left' />}
          onLeftClick={() => this.props.history.replace('/login')}
        >
          选择国家或地区
        </NavBar>
        {
          keyOfData.map(initials => {
            console.log(initials)
            const valueOfData = this.state.countryData[initials];
            return <List key={initials} renderHeader={() => initials} className='my-list'>
              {valueOfData.map(itemOfCountry =>  {
                const nameOfCountry = Object.keys(itemOfCountry)[0];
                const codeOfCountry = itemOfCountry[nameOfCountry];
              return <Item key={nameOfCountry} extra={codeOfCountry}>{nameOfCountry}</Item>
              })}
            </List>
          })
        }

      </div>
    )
  }
}
