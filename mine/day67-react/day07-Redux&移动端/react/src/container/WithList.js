import { connect } from 'react-redux'
import List from '../pages/List'
import {getUsersAsync,setFilter} from '../redux/actions'

const WithList = connect(state=>({user: state.userXXX,filter:state.filterXXX}), {getUsersAsync,setFilter})(List)
export default WithList
