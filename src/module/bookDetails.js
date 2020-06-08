import { createAction, handleActions } from 'redux-actions'

const FETCHING_BOOK = 'bookDetails/FETCHING_BOOK'
const FETCHED_BOOK = 'bookDetails/FETCHED_BOOK'
const DELETING_BOOK = 'bookDetails/DELETING_BOOK'
const DELETED_BOOK = 'bookDetails/DELETED_BOOK'

export const fetchingBook = createAction(FETCHING_BOOK)
export const fetchedBook = createAction(FETCHED_BOOK, books => books)
export const deletingBook = createAction(DELETING_BOOK)
export const deletedBook = createAction(DELETED_BOOK)

const initialState = {
    loading : false,
    book : null,
    controlsDisabled : false
}

const bookDetails = handleActions(
    {
        [FETCHING_BOOK] : (state, action) => ({
            ...state,
            loading : true
        }),
        [FETCHED_BOOK] : (state, action) => ({
            ...state,
            loading : false,
            books : action.payload
        }),
        [DELETING_BOOK] : (state, action) => ({
            ...state,
            controlsDisabled : true
        }),
        [DELETED_BOOK] : (state, action) => ({
            ...state,
            controlsDisabled : false
        })
    },
    initialState
)

export default bookDetails