<template>
    <f7-page>

        <f7-navbar :title="movie.title" back-link="Back" sliding></f7-navbar>
        <!--<div class="content-block-title">{{movie.title}}</div>-->
        <div class="card facebook-card">

            <div class="card-content">

                <img :src="movie.images.large"  width="100%">
            </div>
            <div class="card-footer no-border">
                <a href="#" class="link">Like</a>
                <a href="#" class="link">Comment</a>
                <a href="#" class="link">Share</a>
            </div>
        </div>
        <div class="card">
            <div class="card-content">
                <div class="card-header-inner">
                    <p><h4>{{movie.title}}</h4> <span>{{movie.original_title}}</span></p>
                </div>

                <div class="card-content-inner">
                    <p>{{movie.rating}}这里应该为一个组件，用来评分</p>
                    <p>{{movie.ratings_count}} &nbsp;人评价</p>
                    <p>导演：
                        <span v-for="director in movie.directors">{{director.name}} &nbsp;</span>
                    </p>
                    <p>
                        主演：
                        <span v-for="cast in movie.casts">{{cast.name}} &nbsp;</span>

                    </p>
                </div>

                <div class="card-content-inner">
                    <p>{{movie.popular_reviews}} </p>
                </div>

            </div>
        </div>
    </f7-page>

</template>
<script>

    /**
     * 已知bug #Bug 3307，还在调查
     * 对于images，或者理解为$http 获取的数据，由于网络暂时未能立刻获取到，
     * 而这个时候页面渲染需要数据，会报出数据未定义
    * */
    export default{
        data(){
            return {
                movie:{
                    images:{
                        "large":""
                    }
                },
            }
        },
        methods:{
            doSomething:function(){
                console.log(1)
            },

        },
        mounted: function() {
            console.log(this.$route)
            this.$http.jsonp('https://api.douban.com/v2/movie/subject/'+this.$route.params.id, {}, {
                headers: {

                },
                emulateJSON: true
            }).then(function(response) {
                // 这里是处理正确的回调
                console.log(response)
                this.movie = response.data;


            }, function(response) {
                // 这里是处理错误的回调
                console.error(response);

            });
        },
        components:{

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