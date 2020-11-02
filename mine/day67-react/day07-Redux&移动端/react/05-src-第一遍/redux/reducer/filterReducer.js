import { SET_FILTER } from "../constants"
const initState = {

    filter:"all"
}
export default function filterReducer(state = initState, action) {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filter:action.data
            }
        default:
            return state;
    }
}