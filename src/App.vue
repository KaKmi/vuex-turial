<template>
  <div id="app">
    <h3>Increment:</h3>
    <increment></increment>
    <h3>Counter:</h3>
    <counter></counter>
    <Counterr></Counterr>
    <!--<img class="logo" src="./assets/logo.png">-->
    <!--<hello></hello>-->
  </div>
</template>

<script>
//import Hello from './components/Hello'
import Increment from './components/IncrementButton.vue'
import Counterr from './components/CounterDisplay2.vue'
import Counter from './components/CounterDisplay.vue'
export default {
  components: {
    Increment,
    Counter,
    Counterr
  },
  events:{
    'button-pressed': function () {
       this.$broadcast('increment');
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
