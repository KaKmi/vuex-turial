/**
 * Created by Jared on 16/1/4.
 */

var store ={
    state :{
        counter:0
    },
    increment: function () {
        if(store.state.counter <100){
            store.state.counter+=1;
        }
    },
    reset : function () {
        store.state.counter =0;
    }
}
export default  store;