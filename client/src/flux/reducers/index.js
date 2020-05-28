import { combineReducers } from 'redux'
import authReducer from './auth-reducer'
import errorReducer from './error-reducer'

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
})
