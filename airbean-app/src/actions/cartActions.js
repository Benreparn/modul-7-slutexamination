export const addNewItem = (item) => {
    return {
        type: 'ADD_NEW_ITEM',
        payload: item
    }
}

export const addItemCount = (item) => {
    return {
        type: 'ADD_COUNT',
        payload: item
    }
}

export const reduceItemCount = (item) => {
    return {
        type: 'REDUCE_COUNT',
        payload: item
    }
}

export const emptyCart = () => {
    return {
        type: 'EMPTY_CART'
    }
}