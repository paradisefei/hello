/* 
    pubsub
        1.订阅者模式，一个人发布了消息，其他人只要订阅就能得到它的数据
        2.api
            PubSub.publish
            PubSub.subscribe
            PubSub.unsubscribe
        3.按照正常逻辑进行，然后这些api只是在特定的位置发布和订阅
        4.订阅要在组件挂载成功时进行
        5.点击发布
            App发布
            Far订阅
        6.取消订阅
*/

import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
