<template>
    <f7-page>
        <img class="index" src="../assets/images/index.png"
             @click="onClick('alert-text','sss','sss','ssss')">

    </f7-page>
</template>
<script>
    import loading from "../components/loading.vue";
    import message from  '../components/message.vue';
    import progressBar from '../components/progress.vue';
    export default{
        data(){
            return {
                state:true
            }
        },
        methods:{
            doSomething:function(){
                console.log(1)
            },
            changeState: function () {
                this.state = !this.state;
            },
            onClick:function(t1,t2,t3,t4){
                message.openAlert(t1,t2,t3,t4);
            }
        },
        mounted: function() {

        },
        components:{
            loading,
            message,
            progressBar
        }
    }
</script>
<style>
    .index {
        width: 100%;
        background-color: #fff;
        margin-top: 40%;
    }
</style>