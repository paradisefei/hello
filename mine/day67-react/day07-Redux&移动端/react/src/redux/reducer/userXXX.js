import { GET_USERS_SUCCESS,SET_FILTER } from '../constants'
let initState = {
  users: []
}
export default function userXXX(state = initState, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.data
      }
    default:
      return state
  }
}
