import { handleActions } from "redux-actions"

const initialState = {
    title : 'Book Manager'
}

const app = handleActions(
    {
      
    },
    initialState
)

export default app