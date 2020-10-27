/* 
    生命周期
        1.挂载
            首次加载页面时执行了哪些函数
            
        2.更新
            1.点击App组件中的按钮，父组件更新，子组件也会更新
        3.卸载
*/

import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
