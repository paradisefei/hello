import React from "react"
import PubSub from "pubsub-js"

import Far from "./page/Far"

export default class App extends React.Component{
    /* 
        可以发布，也可以接收
    */
   componentDidMount(){
       this.token = PubSub.subscribe("Far的发布",(msg,data) => {
           console.log("App的订阅",msg,data)
       })
   }
    render() {
        return (
            <>
            <div>App</div>
            {/* Far此时是App的子组件，更新世就会触发子组件更新然后执行子组件中相应的函数 */}
            <Far></Far>
                <button onClick={()=>{
                    PubSub.publish("App中发布的消息","hello")
                }}>App发布</button>
            </>
        )
    }
}