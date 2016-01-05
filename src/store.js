/**
 * Created by Jared on 16/1/4.
 */

import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
//var store = {
//    state: {
//        counter: 0
//    },
//    increment: function () {
//        if (store.state.counter < 100) {
//            store.state.counter += 1;
//        }
//    },
//    reset: function () {
//        store.state.counter = 0;
//    }
//}

var store = new Vuex.Store({
    state:{
        counter:0
    },
    mutations:{
        INCREMENT(state){
            state.counter++;
        }
    }
});
export default  store;