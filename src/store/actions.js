/**
 * Created by Jared on 16/1/5.
 */
import shop from '../service';
import * as types from './mutation-types';

export  const  addToCart = ({dispatch,state}) =>{
    dispatch(types.RECEIVE_PRODUCTS);
}

export const  checkout =({dispatch,state})=>{
    const savedCartItems = [...state.cart.added];
    dispatch(types.CHECKOUT_REQUEST);
    shop.buyProducts(products, function () {
        dispatch(types.CHECKOUT_SUCCESS)
    }, function () {
        dispatch(types.CHECKOUT_FAILURE,savedCartItems)
    })

}

