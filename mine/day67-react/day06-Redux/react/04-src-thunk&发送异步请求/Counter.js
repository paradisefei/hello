import { connect } from "react-redux"
// import action from "./redux/action.js"



function Counter(props) {
    /* 
        1.执行函数放在return外面
    */
    console.log(props)
    const handleInc = () => {
        props.inc(2)
    }
    const handleDec = () => {
        props.dec(1)
    }
    const handleAsyncInc = () => {
        props.asyncInc(3)
    }
    return (
        <>
            <h3>{props.count}</h3>
            <button onClick={handleInc}>按钮+</button>
            <button onClick={handleDec}>按钮-</button>
            <button onClick={handleAsyncInc}>异步</button>
        </>
    )
}

export default Counter