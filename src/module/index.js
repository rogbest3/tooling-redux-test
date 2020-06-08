import { combineReducers } from 'redux'
import app from './app'
import home from './home'
import newBook from './newbook'
const rootReducer = combineReducers({
    app,
    home,
    newBook
})
export default rootReducer