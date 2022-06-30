import * as actionTypes from './shopping-types';

export const addToCart = (itemId) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemId
        }
    }
}

export const removeFromCart = (itemId) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemId
        }
    }
}

export const adjustQuantity = (itemId, value) => {
    return {
        type: actionTypes.ADJUST_QUANTITY,
        payload: {
            id: itemId,
            quantity: value
        }
    }
}

export const addQuantity = (itemId, value) => {
    return {
        type: actionTypes.ADD_QUANTITY,
        payload: {
            id: itemId,
            quantity: value
        }
    }
}

export const removeQuantity = (itemId, value) => {
    return {
        type: actionTypes.REMOVE_QUANTITY,
        payload: {
            id: itemId,
            quantity: value
        }
    }
}
