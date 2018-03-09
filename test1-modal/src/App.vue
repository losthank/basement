<template>
  <div id="app">
    <div id="ll">sasasasss</div>
<test :topic="topic" :btnText1="text1" :btnText2="text2" @sure="sure" @cancel="cancel" ref="test"></test>
  </div>
</template>

<script>
import test from './test'
export default{
  name: 'app',
  data () {
    return {
topic:'您拨打的用户已关机，请稍后再拨您拨打的用户已关机，请稍后再拨您拨打的用户已关机，请稍后再拨',
text1:'sure',
text2:'cancel'
 
    }
  },
  components:{
test
  },
  methods:{
sure(){

},
cancel(){
  this.$refs.test.show = false;
}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
#ll{
  position: relative;
  top: 222px;
  
}
</style>
