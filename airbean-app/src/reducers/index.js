import menuReducer from './menuReducer'
import cartReducer from './cartReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    menu: menuReducer,
    cart: cartReducer
})

export default allReducers