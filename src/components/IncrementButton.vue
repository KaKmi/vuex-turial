<template>
    <!--<button @click.prevent="activate">+1</button>-->
    <button @click.prevent="activate">+1</button>
</template>

<script type="text/javascript">
    import store from '../store';
	export default {
        data(){
            return {
                sharedState:store.state
            }
        },
        methods:{
            activate (){
//			return 0;

                // event
//                this.$dispatch('button-pressed')

                // sharedStore
//                store.increment()
//                this.sharedState.counter+=1;

                //vuex
                store.dispatch('INCREMENT');
                console.log('+1 Pressed')
            }
        }

	}
</script>

<style type="text/css"></style>