/* 
    context
        1.组件通讯
        2.爷和孙的context要是一个才能进行通讯
            爷孙加载同一个context对象文件就是引入的同一个context对象？
        3.context对象上有两个属性用于提供和接收
            Provider
                数据保存的value属性中
            Consumer

*/

import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
