import {ADD_QUANTITY, ADD_TO_CART, ADJUST_QUANTITY, REMOVE_FROM_CART, REMOVE_QUANTITY} from "./shopping-types";

import perla from '../../assets/perla.png';
import harnas from '../../assets/harnas.jpg';


const INITIAL_STATE = {
    products: [
        {id: 1, name: 'Perła', description: 'Perła export a nie import', price: 2.99, image: perla},
        {id: 2, name: 'Harnaś', description: 'Harnaś, bo czemu by nie', price: 1.99, image: harnas}
    ],
    cart: [],
    currentItem: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const itemToAdd = state.products.find(product => product.id === action.payload.id);
            const inCart = state.cart.some(product => product.id === action.payload.id);
            return {
                ...state,
                cart: inCart
                    ? state.cart.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + 1 } : item)
                    : [...state.cart, {...itemToAdd, quantity: 1}]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        case ADJUST_QUANTITY:
            const adjustQuantity = action.payload.quantity < 0 ? 0 : action.payload.quantity;
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, quantity: adjustQuantity} : item)
            }
        case ADD_QUANTITY:
            const itemToAddQuantity = state.cart.some(item => item.id === action.payload.id);
            if (!itemToAddQuantity) {
                const productToAdd = state.products.find(product => product.id === action.payload.id)
                return {
                    ...state,
                    cart: [...state.cart, {...productToAdd, quantity: parseInt(action.payload.quantity, 10)}]
                }
            }
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + parseInt(action.payload.quantity, 10)} : item)
            }
        case REMOVE_QUANTITY:
            const itemToRemoveQuantity = state.cart.find(item => item.id === action.payload.id);
            if (!itemToRemoveQuantity) {
                return {
                    ...state
                }
            }
            let newQuantity = itemToRemoveQuantity.quantity - parseInt(action.payload.quantity, 10);
            if (newQuantity < 0) {
                newQuantity = 0;
            }
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, quantity: newQuantity} : item)
            }
        default:
            return state;
    }
}

export default shopReducer;
