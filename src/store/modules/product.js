/**
 * Created by Jared on 16/1/5.
 */
import {
    RECEIVE_PRODUCTS,
    ADD_TO_CART
} from '../mutation-types';

/**
 * initial state
 * @type {Array}
 */
export  const productsInitialState=[];

/**
 *
 * @type {{function: string}}
 */
export  const  productsMutations ={
    [RECEIVE_PRODUCTS]: function (state,products) {
        state.products = products;
    },
    [ADD_TO_CART] ({products},productId){
        const product = products.find(p=>p.id===productId);
        if(product.inventory>0){
            product.inventory --;
        }
    }
};
