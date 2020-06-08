import { createAction, handleActions } from "redux-actions"

const STORE_TITLE = 'app/STORE_TITLE'

export const storeTitle = createAction(STORE_TITLE, title => title)

const initialState = {
    title : 'Book Manager'
}

const app = handleActions(
    {
        [STORE_TITLE] : (state, action) => ({
            ...state,
            title : action.payload
        })
    },
    initialState
)

export default app