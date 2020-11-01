
import { Provider } from "react-redux"

import WithCounter from "./container/WithCounter"
import store from './redux/store'

export default function App(props) {
    return (
        <Provider store={store}>
            <WithCounter></WithCounter>
        </Provider>

    )
}