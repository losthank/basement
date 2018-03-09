<template>
<transition name="fade">
  <div id="box">
<form v-if="show" class="modal hide fade in">
    <span>用户名：</span>
    <input type="text" placeholder="请输入用户名">
    <span>密码：</span>
    <input type="text">
    <input type="submit" value="登录">
    <span @click="toRes">没有注册？</span>
</form>

<form v-else class="form">
    <span>用户名：</span>
    <input type="text" placeholder="请输入用户名">
    <span>密码：</span>
    <input type="text">
    <input type="submit" value="注册">
    <span @click="toLog">已注册，现在登录</span>
</form>
  </div>
  </transition>
</template>

<script>

export default {
    data(){
        return {
            show:true
        }
    },
    methods:{
toRes(){
    this.show = false;
},
toLog(){
    this.show = true;
}

    },
    mounted(){
        var that = this;
 $(document).mouseup(function(e){
     var _con = $('#box');
      if(!_con.is(e.target) && _con.has(e.target).length === 0){
that.$router.push('/');
     }
 })
         
    }
}
</script>

<style scoped> 
/*@import url("https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css");*/
form{
position: relative;
left: 70px;
}
#box{
    
    width: 300px;
    background-color:grey;
    position: absolute;
   left: 50%;
   top: 50%;
   margin-left: -150px;
   margin-top: -50px;
}
span{
    display: block;
    
}
input{
    display: block;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>
