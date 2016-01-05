/**
 * Created by Jared on 16/1/5.
 */
import shop from '../service/index';
import * as types from './mutation-types';

export const addToCart = types.ADD_TO_CART

export const  checkout =({dispatch,state})=>{
    const savedCartItems = [...state.cart.added];
    dispatch(types.CHECKOUT_REQUEST);
    shop.buyProducts(products, function () {
        dispatch(types.CHECKOUT_SUCCESS)
    }, function () {
        dispatch(types.CHECKOUT_FAILURE,savedCartItems)
    })

}


export  const  getAllProducts =({dispatch})=>{
    shop.getProducts().then(function (products) {
        dispatch(types.RECEIVE_PRODUCTS,products)
    })
}
