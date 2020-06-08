import { createAction, handleActions } from 'redux-actions'

const FETCHING_BOOKS = 'home/FETCHING_BOOKS'
const FETCHED_BOOKS = 'home/FETCHED_BOOKS'
const SET_FILTER_VALUE = 'home/SET_FILTER_VALUE'

export const fetchingBooks = createAction(FETCHING_BOOKS)
export const fetchedBooks = createAction(FETCHED_BOOKS, books => books)
export const setFilterValue = createAction(SET_FILTER_VALUE, filterValue => filterValue)

const initialState = {
    loading : false,
    books : [],
    filterValue : ''
}

const home = handleActions(
    {
        [FETCHING_BOOKS] : (state, action) => ({
            ...state,
            loading : true
        }),
        [FETCHED_BOOKS] : (state, action) => ({
            ...state,
            loading : false,
            books : action.payload
        }),
        [SET_FILTER_VALUE] : (state, action) => ({
            ...state,
            filterValue : action.payload
        })
    },
    initialState
)

export default home