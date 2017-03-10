<template>
  <f7-page>

    <f7-navbar title="Form" back-link="Back" sliding></f7-navbar>

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
                state:true,
                articles:[],
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
            this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
                headers: {

                },
                emulateJSON: true
            }).then(function(response) {
                // 这里是处理正确的回调
                console.log(response)
                this.articles = response.data.subjects;
                // this.articles = response.data["subjects"] 也可以
                console.log(this.articles);

            }, function(response) {
                // 这里是处理错误的回调
                console.error(response);

            });
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