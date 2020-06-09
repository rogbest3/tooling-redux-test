import { combineReducers } from 'redux'
import app from './app'
import home from './home'
import newBook from './newbook'
import bookDetails from './bookDetails'

const rootReducer = combineReducers({
    app,
    home,
    newBook,
    bookDetails
})
export default rootReducer