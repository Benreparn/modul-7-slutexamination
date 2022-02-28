const initialState = {
    cart: []
}

const pushItem = (state, action) => {

    if (state.cart.filter(e => e.id === action.payload.id).length > 0) {
        const value = state.cart.findIndex( ({ id }) => id === action.payload.id);
        return {
            ...state,
            cart: state.cart.map(
                (content, i) => i === value ? {...content, count: content.count + 1} : content
            )
        }
    } else {
        return {
            ...state,
            cart: [
                ...state.cart,
                {
                    desc: action.payload.desc,
                    title: action.payload.title,
                    price: action.payload.price,
                    id: action.payload.id,
                    count: 1
                }
            ]
        }
    }
}

const addCount = (state, action) => { 
    const value = state.cart.findIndex( ({ id }) => id === action.payload.id);
    return {
        ...state,
        cart: state.cart.map(
            (content, i) => i === value ? {...content, count: content.count + 1} : content
        )
    }
}

const reduceCount = (state, action) => { 
    const value = state.cart.findIndex( ({ id }) => id === action.payload.id);
    return {
        ...state,
        cart: state.cart.map(
            (content, i) => i === value ? {...content, count: content.count > 0 ? content.count - 1 : 0} : content
        )
    }
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_NEW_ITEM':
            return pushItem(state, action);
        case 'ADD_COUNT':
            return addCount(state, action);
        case 'REDUCE_COUNT':
            return reduceCount(state, action);
        case 'EMPTY_CART':
            return {
                ...state,
                cart: []
            }
        default:
            return state;
    }
}

export default cartReducer;