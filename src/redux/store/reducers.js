import { combineReducers } from 'redux'
import Test from 'redux/store/Test/reducer'
import Global from 'redux/store/Global/reducer'

const rootReducer = combineReducers({
  Test,
  Global,
})

export default rootReducer
