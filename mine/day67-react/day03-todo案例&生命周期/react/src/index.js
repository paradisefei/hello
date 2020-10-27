/* 
    性能优化
        1.shouldComponentUpdate方法
            这也是生命周期钩子函数，更新阶段才会被调用
            传入新的props时或state更新时被触发
            功能
                通过返回值来确定该组件是否重新渲染
            返回值
                布尔值
            参数
*/

import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
