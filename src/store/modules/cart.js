/**
 * Created by Jared on 16/1/5.
 */
import {
    CHECKOUT_REQUEST,
    CHECKOUT_SUCCESS,
    CHECKOUT_FAILURE,
    RECEIVE_PRODUCTS,
    ADD_TO_CART
} from '../mutation-types';

/**
 * initial state
 * @type {Array}
 */
export  const cartInitialState={
    added:[],
    lastCheckOut:null
};

/**
 * mutations
 * @type {{function: string}}
 */
export  const  cartMutations ={
    /**
     *
     * @param cart
     * @param productId
     */
    [ADD_TO_CART] ({ cart }, productId) {
        cart.lastCheckout = null
        const record = cart.added.find(p => p.id === productId)
        if (!record) {
            cart.added.push({
                id: productId,
                quantity: 1
            })
        } else {
            record.quantity++
        }
    },
    /***
     *
     * @param cart
     */
    [CHECKOUT_REQUEST] ({ cart }) {
        // clear cart
        cart.added = []
        cart.lastCheckout = null
    },
    /***
     *
     * @param cart
     */
    [CHECKOUT_SUCCESS] ({ cart }) {
        cart.lastCheckout = 'successful'
    },

    /***
     *
     * @param cart
     * @param savedCartItems
     */
    [CHECKOUT_FAILURE] ({ cart }, savedCartItems) {
        // rollback to the cart saved before sending the request
        cart.added = savedCartItems
        cart.lastCheckout = 'failed'
    }
};

