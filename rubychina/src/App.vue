<template>
  <div id="app">
    <rubyHead></rubyHead>
    <router-view name="Login"></router-view>
    <router-view name="kind"></router-view>
    <router-view name="main"></router-view>
    
    
  </div>
</template>

<script>
import rubyHead from './components/rubyHead'

export default {
  name: 'app',
  components: {
    rubyHead
  },
mounted(){
  console.log(this.$route.path);

   
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

justify-content: space-around;
word-break: break-all;
}
body,
div,
span,
a,
p,
ul,
li {
    margin: 0;
    padding: 0;
}

</style>
