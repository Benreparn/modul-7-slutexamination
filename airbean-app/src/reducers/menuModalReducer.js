const initialState = {
    toggled: false
}

const menuModalReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TOGGLE_MODAL':
            return {
                ...state,
                toggled: action.payload
            }
        default:
            return state;
    }
}

export default menuModalReducer;