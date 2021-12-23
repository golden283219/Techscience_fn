import { combineReducers } from 'redux'
import resultReducer from './resultReducer'
import authReducer from './authReducer'
import dataReducer from './dataReducer'
import boardStore from './boardStore';

export default combineReducers ({ 
    result: resultReducer,
    auth: authReducer,
    data: dataReducer,
    board: boardStore,
})