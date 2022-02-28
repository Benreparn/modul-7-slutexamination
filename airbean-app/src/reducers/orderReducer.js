const initialState = {
    order: {}
}

const menuReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_ORDER':
            return {
                ...state,
                order: action.payload
            }
        case 'CLEAR_ORDER':
            return {
                ...state,
                order: {}
            }
        default:
            return state;
    }
}

export default menuReducer;