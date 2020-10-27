import { Component } from 'react'
import PubSub from 'pubsub-js'
import Son from './Son'

export default class Far extends Component {

  componentDidMount(){
    //   在挂载成功时订阅
    // PubSub.subscribe("Far的发布",function(msg,data){
    //     console.log("Far中的订阅",msg,data)
    // })
    PubSub.subscribe("App中发布的消息",function(msg,data){
        console.log("Far中的订阅",msg,data)
    })
  }
  render() {
      return (
          <>
            <div>Far</div>
            <Son></Son>
            <button onClick={() => {
                PubSub.publish("Far的发布","I'm your father");
            }}>Far的发布</button>
          </>
          
      )
  }
}