import React from "react"
import Test from "./Test"
import context from "./context"

export default class App extends React.Component{

    state = {
        msg:"fuck",
        count:0
    }
    handle = () => {
        this.setState({
            count:this.state.count + 1
        })
    }
    render() {
        return (
            <>
                <context.Provider value={5}>
                    {/* <> */}
                    <Test></Test>
                    
                    {/* </> */}
                </context.Provider>
                
                <div>{this.state.count}</div>
                <button onClick={this.handle}>按钮</button>
           </>
            
        )
    }

}