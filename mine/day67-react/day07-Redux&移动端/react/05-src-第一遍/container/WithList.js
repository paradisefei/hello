/* 
    connect处理组件
*/
import { connect } from 'react-redux';

import List from "../pages/List/index.jsx"
import {getDataAsync,filterRay} from "../redux/action"

const WithList = connect((state) => ({user:state.userReducer.user,filter:state.filterReducer.filter}),{getDataAsync,filterRay})(List);
export default WithList;