import userReducer from './userReducer'
import groupReducer from './groupReducer';
import { combineReducers } from "redux";


const rootReducer = combineReducers({

    user : userReducer,
    group: groupReducer

})

export default rootReducer