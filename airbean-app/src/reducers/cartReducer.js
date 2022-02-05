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

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_NEW_ITEM':
            return pushItem(state, action);
        default:
            return state;
    }
}

export default cartReducer;