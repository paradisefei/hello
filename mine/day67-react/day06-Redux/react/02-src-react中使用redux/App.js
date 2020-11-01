
import { Provider } from "react-redux"

import Counter from "./Counter.js"
import store from './redux/store'

export default function App(props) {
    return (
        <Provider store={store}>
            <Counter></Counter>
        </Provider>

    )
}