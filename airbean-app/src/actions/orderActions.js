export const makeOrder = (order) => {
    return {
        type: 'ADD_ORDER',
        payload: order
    }
}