<template>
    Count is {{counter}}
</template>

<script>
    import store from '../store';
    export default{
//        data(){
//            return {
//                sharedState:store.state
//            }
//        }
//        events:{
//            increment(){
//                this.count++;
//            }
//        }

        computed:{
            counter(){
                return store.state.counter;
            }
        }
    }
</script>

<style>

</style>