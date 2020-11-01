
/* 
    1.不分文件夹的时候，我应该把redux那些东西写在哪里
    2.要想在react中使用redux，就地用到包中的组件Provider和connect函数，并且把要被管理的组件放入Provider组件中
    3.然后才是因为这里会用到store，所以去创建store

*/
import {Provider} from "react-redux"

import store from './redux/store'
import Counter from './container/WithCounter'
//这个时候加载Counter时，还没有从Provider从传入数据，也就是说此时还没有被redux管理上，所以props此时是一个空对象

console.log(store)
//这个时候redux组件的数据已经变了
console.log(store.getState())



export default function App() {
    /* 
        没有定义connect函数时，不算被redux管理，此时Counter无法得到任何数据
        组件被connect处理过，才能拿到redux中的数据
    */
    console.log("App")
    return (
        <Provider store={store}>
            <Counter></Counter>
        </Provider>
    )
}