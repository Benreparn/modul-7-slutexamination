export const makeOrder = (order) => {
    return {
        type: 'ADD_ORDER',
        payload: order
    }
}

export const clearOrder = () => {
    return {
        type: 'CLEAR_ORDER'
    }
}