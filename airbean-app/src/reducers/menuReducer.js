const initialState = {
    menu: []
}

const menuReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_ALL_ITEMS':
            return {
                ...state,
                menu: action.payload
            }
        default:
            return state;
    }
}

export default menuReducer;