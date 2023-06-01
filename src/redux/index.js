import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { movies } from "./reducer/movieReducer"

const rootReducer = combineReducers({
    allMovie: movies
})
const store = createStore(
    rootReducer,
    { },
    composeWithDevTools(applyMiddleware(thunk))
)
export default store
