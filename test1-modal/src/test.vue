<template>
<div>
<div id="modal" v-show='show'>
    <p class="modal-topic">{{topic}}</p>
    <span type="button" :class="btnStyle" @click="sure">{{btnText1}}</span>
    <span type="button" @click="cancel">{{btnText2}}</span>
</div>
<div id="shadow" v-show="show"></div>
</div>
</template>
<script>
export default {
    data(){
return {
btnStyle:'grey',
show:true
   
}
    },
props:{//或者写成对象形式，使用computed得出该对象
topic:String,
btnText1:String,
btnText2:String
    },
    methods:{
        sure(){
            this.$emit('sure');
        },
        cancel(){
            this.$emit('cancel');
        }
    }
}
</script>
<style>

.grey{
    color:red;
}
#modal{
    background-color:aquamarine;
    width: 250px;
    position: absolute;
    top: 50%;
    left:50%;
    transform:translate(-50%,-50%);
    box-shadow: 10px 10px 5px #888888;
    padding:10px 0 20px 0;
    z-index: 99;
    border-radius: 10px;
}
#shadow{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: grey;
    z-index:55;
    opacity: 0.5;
    filter: blur(25px);
}
span{display: inline-block;
margin-top: 10px;
margin-bottom:0;
        padding:5px 6px;
        cursor: pointer;
        box-sizing: border-box;
        border: 1px solid transparent;
        border-radius: 4px;
        color: #333;
        background-color: #fff;
        border-color: #ccc;
}

</style>