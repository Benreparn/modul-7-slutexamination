export const addNewItem = (item) => {
    return {
        type: 'ADD_NEW_ITEM',
        payload: item
    }
}

export const emptyCart = () => {
    return {
        type: 'EMPTY_CART'
    }
}