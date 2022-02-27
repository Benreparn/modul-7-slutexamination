import menuReducer from './menuReducer'
import cartReducer from './cartReducer'
import menuModalReducer from './menuModalReducer'
import orderReducer from './orderReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    menu: menuReducer,
    cart: cartReducer,
    modal: menuModalReducer,
    order: orderReducer
})

export default allReducers