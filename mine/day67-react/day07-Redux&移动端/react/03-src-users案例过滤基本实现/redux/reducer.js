import { GET_USERS_SUCCESS,SET_FILTER } from './constants'
let initState = {
  users: [],
  filter:"all"
}
export default function users(state = initState, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.data
      }
    case SET_FILTER:
      return {
        ...state,
        filter: action.data
      }
    default:
      return state
  }
}
