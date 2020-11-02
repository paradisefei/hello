//最上面一般引入一些三方包
import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

// 中间引入一些自己定义的包
import { TOPIC } from '../../constans'

// 最后引入样式
import './index.css'

export default class List extends Component {
  // token = ''
  // constructor(){
  //   super()
  //   this.token = ''
  // }

  state = {
    users: [], // 获取到的用户列表
  }
  //挂载成功,订阅话题
  componentDidMount() {
    // 这个token,有没有必要加到state中?
    //没有必要,因为token跟试图渲染无关
    this.token = PubSub.subscribe(TOPIC, (msg, data) => {
      // console.log('接收到数据', data)

      if (data.length === 0) return
      // 发送请求
      this.props.getDataAsync(data);
      // axios
      //   .get('http://localhost:5000/search/users', {
      //     params: {
      //       searchname: data
      //     }
      //   })
      //   .then(res => {
      //     console.log(res)
      //     this.setState({
      //       users: res.data.items,
      //       loading: false
      //     })
      //   }).catch((err) => {
      //     console.log(err);
      //   })

    })
  }

  // 卸载的时候取消订阅
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }
  handleFilter = (data) =>{
    return () => {
      this.props.filterRay(data);
    }
  }
  render() {
    console.log(this.props)
    let { user } = this.props
    let newUser = user;
    if(this.props.filter === "ray"){
      /* 
        根据filter的值对数组进行筛选
      */
      newUser = newUser.filter((item) => {
        console.log(item)
        if(item.login === "ray"){
          return true;
        }
        return false
      })
    }
    console.log(newUser);
    if (newUser.length > 0) {
      return (
        <>
        <button onClick={this.handleFilter("ray")}>ray</button>
        <button onClick={this.handleFilter("all")}>all</button>
        <div className='row'>
          {newUser.map(user => (
            <div className='card' key={user.id}>
              <a target='_blank'>
                <img
                  src={user.avatar_url}
                  style={{ width: 100, height: 100 }}
                />
              </a>
              <p className='card-text'>{user.login}</p>
            </div>
          ))}
        </div></>
      )
    }

    // 什么都不渲染,就return 一个 null
    return null
  }
}
