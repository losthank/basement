<template>
<div id="box" v-if="tru">
    <div class="part">
    <router-link to="/">
    <img src="../assets/comments.svg">
    </router-link>
    <span><b>Ruby社区</b></span>
    </div>

       <div class="part">
    <router-link to="/">
    <img src="../assets/form.svg">
    </router-link>
    <span><b>技术文档</b></span>
    </div>

       <div class="part">
    <router-link to="/">
    <img src="../assets/email.svg">
    </router-link>
    <span><b>招聘求职</b></span>
    </div>

       <div class="part">
    <router-link to="/">
    <img src="../assets/good.svg">
    </router-link>
    <span><b>精华文章</b></span>
    </div>
</div>
</template>

<script>
export default{
data(){
return {
tru:true,
screenWidth:document.body.clientWidth
}
},
mounted () {//根据视窗大小调整是否显示
            const that = this
            window.onresize = () => {
                    if(document.body.clientWidth<800){
                        that.tru = false;
                    }
                       else{
                        that.tru = true;
                    }
              
            }
        }
}

</script>

<style scoped>
#box{
    width: 1200px;
    padding: 0;
    margin:auto;

}
.part{
    display: inline-block;
    width: 250px;
    height: 140px;
    padding-right: 26px;
    margin-top: 30px;
    background-color: #F9FAFC;
}
.part img{
    width: 50px;
    height: 50px;
    padding-top:30px;
}
.part span{
    display: block;
    font-size: 15px;
padding-top:20px;
}
</style>