<template>
  <div class="head">
    <router-link to="/">
    <b>Ruby</b> <strong>China</strong>
    </router-link>
    <div>
    <el-button type='text' v-for="(part,index) in parts" :key="part.index">{{part.name}}</el-button>
    </div> 
    <span>
      <el-button type="text" @click.native="show"> 注册</el-button>
      <el-button type="text"> 登录</el-button>
     </span> 
     
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      parts: [
        {name: '社区'},
        {name: '招聘'},
        {name: 'Wiki'},
        {name: '酷站'},
        {name: 'Gems'}
      ]
    }
  },
  methods:{
    show(){
      this.$router.push({path:'/login'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://cdn.bootcss.com/element-ui/1.2.8/theme-default/index.css");
.head {
    background: #f9f9f7;
    height: 3rem;
    width: 100%;
    min-width: 1200px;
    /*border: 1px solid red;*/
}

.head a{
  font-size: 1.2rem;
  display: inline-block;
  text-decoration: none;
  width: 10rem;
  padding-top:0.8rem;
  /*border: 1px solid red;*/
}
.head a b{
  color:red;
}
.head div{

  margin-left: 1rem;
  margin-top:0.5rem;
  display: inline-block;
  /*border: 1px solid red;*/
}
.head div button{
  color: black;
  padding-right: 1rem;
}
.head span{

margin-left: 20%;
display: inline-block;
margin-top:0.5rem;
}
.head span button{
   color:black;
}
</style>
