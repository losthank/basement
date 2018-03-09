<template>
<div class="secDiv">
    <div v-for="item of content.slice(0,20)" :key="item.id">
        <router-link :to='{name:"user",params:{name:item.author.loginname}}'>
<img :src="item.author.avatar_url" :title="item.author.loginname">
        </router-link>

        <div class="textDiv">
            <router-link :to='{name:"article",params:{id:item.id}}'>{{item.title}}</router-link>
        <div class="stuff">
            <span>回复：{{item.reply_count}}</span>
            <span>创建于：{{item.last_reply_at}}</span>
        </div>
        </div>
    </div>
</div>
</template>

<script>
export default{
name:'Main',
data(){
    return{
        content:[]
        
    }
},
methods:{
getData(){
this.$http({
  url: 'https://cnodejs.org/api/v1/topics',
  method: 'get'
}).then((res) => {
   
    this.content = res.data.data
  
}).catch((res) => {
  console.log('error', res)
})
}
},
  created () {
  this.getData()
}
}
</script>
<style scoped>
.secDiv {
    display: flex;
    flex-wrap:wrap;
width: 55%;
min-width: 400px;
margin:auto;
    background: #F9FAFC;
    /*border: 1px solid red;*/
    font-size: 15px;
    padding: 2rem;
    margin-top: 30px; 
}
.secDiv>div{
width: 50%;
min-width: 400px;
height: 80px;
display: flex;
    margin:  0;
}
.secDiv>div img{
    width: 2rem;
    height: 2rem;
}
.textDiv a{
    display: block;
    text-decoration: none;
    color: black;
    text-align:left;
}
.textDiv a:hover{
    color:blue;
}
.stuff{
    font-size: 9px;
    color:grey;
    margin-left: 4px;
    text-align:left;
    
} 
</style>