import  { createStore} from "redux"
import toggleFavorite from "./Reducers/favoryReducer"

export default createStore(toggleFavorite)
