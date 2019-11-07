import { combineReducers } from 'redux'

import storeReducer from './storeFrontReducer'
import shoppingCartReducer from './shoppingCartReducer'


export default combineReducers({
    store : storeReducer,
    shoppingCart: shoppingCartReducer
})