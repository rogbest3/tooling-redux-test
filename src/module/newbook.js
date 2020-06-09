import {createAction, handleActions } from 'redux-actions'

const SET_NEW_BOOK_TITLE = 'newbook/SET_NEW_BOOK_TITLE'
const SET_NEW_BOOK_AUTHOR = 'newbook/SET_NEW_BOOK_AUTHOR'
const SET_NEW_BOOK_IMAGE_URL = 'newbook/SET_NEW_BOOK_IMAGE_URL'
const CREATING_BOOK = 'newbook/CREATING_BOOK'
const CREATED_BOOK = 'newbook/CREATED_BOOK'

export const setNewBookTitle = createAction(SET_NEW_BOOK_TITLE, title => title)
export const setNewBookAuthor = createAction(SET_NEW_BOOK_AUTHOR, author => author)
export const setNewBookImageUrl = createAction(SET_NEW_BOOK_IMAGE_URL, imgURL => imgURL)
export const creatingBook = createAction(CREATING_BOOK)
export const createdBook = createAction(CREATED_BOOK)

const initialState = {
    title : '',
    author : '',
    imgURL : '',
    controlDisabled : false
}

const newBook = handleActions(
    {
        [SET_NEW_BOOK_TITLE] : (state, action) => ({
            ...state,
            title : action.payload
        }),
        [SET_NEW_BOOK_AUTHOR] : (state, action) => ({
            ...state,
            author : action.payload
        }),
        [SET_NEW_BOOK_IMAGE_URL] : (state, action) => ({
            ...state,
            imgURL : action.payload
        }),
        [CREATING_BOOK] : (state, action) => ({
            ...state,
            controlDisabled : true
        }),
        [CREATED_BOOK] : (state, action) => ({
            ...state,
            controlDisabled : false,
            title : '',
            author : ''
        })
        
    },
    initialState
)
export default newBook