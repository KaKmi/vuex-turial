/**
 * Created by Jared on 16/1/5.
 */
import Vue from 'vue'
import Vuex from 'Vuex'
import * as actions from './actions'
import { cartInitialState, cartMutations } from './modules/cart'
import { productsInitialState, productsMutations } from './modules/product'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {
        cart: cartInitialState,
        products: productsInitialState
    },
    actions,
    mutations: [cartMutations, productsMutations],
    strict: debug,
    middlewares: debug ? [Vuex.createLogger()] : []
})
