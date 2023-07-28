import { legacy_createStore as createStore, combineReducers } from 'redux'
import cartReducer from './reducers/cart'

const rootReducer = combineReducers({
    cartProducts: cartReducer
}) // Essa função é responsável por combinar vários reducers, caso você tenha mais de um.

const store = createStore(rootReducer)


export default store