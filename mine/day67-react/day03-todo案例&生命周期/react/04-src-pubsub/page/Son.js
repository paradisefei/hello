import { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Son extends Component {
    componentDidMount() {
        //   在挂载成功时订阅
        this.token = PubSub.subscribe("App中发布的消息", function (msg, data) {
            console.log("Son中的订阅", msg, data)
        })
    }
    cancelSub = () => {
        /* 
            取消发布
        */
       PubSub.unsubscribe(this.token);
    }
    render() {
        return (
            <>
            <div>son</div>
            <button onClick={this.cancelSub}>son取消订阅</button>
            <button onClick={() => {
                PubSub.clearAllSubscriptions();
                //所有人的所有订阅都被取消
            }}>取消所有订阅</button>
            {/* <button onClick={() => {
                PubSub.unsubscribe("App中发布的消息");
            }}>取消话题</button> */}
            </>
        )
    }
}
