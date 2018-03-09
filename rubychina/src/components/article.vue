<template>
  <div id="app">
<span>发布于：{{$route.path}}</span>
<div v-html="article.content">{{article.content}}</div>
    
  </div>
</template>

<script>



export default {
    data(){
        return{
article:{}
        }
    },
    created(){
        this.$http({
  url: `https://cnodejs.org/api/v1${this.$route.path}`,
  method: 'get'
}).then((res) => {
   
    this.article = res.data.data
  
})
    }
}
</script>

<style>

</style>
