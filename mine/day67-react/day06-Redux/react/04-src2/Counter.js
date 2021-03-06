/* 
    此时程序进来是怎么执行的
        1.依然是入口文件
        2.都没执行dispatch，所以没有数据也是正常的
*/


export default function Counter(props) {
    /* 
        点击按钮实现递增，也就是要改变redux数据，react中的操作通过connect来改变redux的数据
        connect
            这是一个高阶组件函数，所以程序最终导出的是这个高阶组件函数执行后返回的组件，我们原本的组件会传入到该高阶组件中
            这个函数会执行两次，第一次执行会有两个参数，第二次执行就是传入我们自己的组件
            第一次执行
                第一个参数
                    是一个函数
    
    */
    console.log(props)
    return (
        <>
            <h3>{props.count}</h3>
            <button onClick={() => {
                /* 
                    点击执行的是props身上的函数
                    在这里执行dispatch会触发reducer函数执行，reducer执行后数据返回到redux组件，因为数据是由redux集中管理，既然改变了redux中的数据，那么其它所有用到这个数据的地方都会发生变化
                    这里执行的是props身上的方法，而props身上的方法是connect中传过来的，用的依然是dispatch来触发reducer执行改变状态
                */
                props.inc(10)
            }}>按钮+</button>
            <button onClick={() => {
                props.dec(1)
            }}>按钮-</button>
            <button onClick={() => {
                props.asyncInc(1)
            }}>异步+</button>
        </>
    )
}

