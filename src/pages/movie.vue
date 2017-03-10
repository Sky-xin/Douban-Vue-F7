<template>
    <f7-page>

        <f7-navbar title="电影" back-link="返回" sliding></f7-navbar>

        <div class="page-content infinite-scroll" data-distance="10">
            <div v-for="article in articles" class="movie-item">
                <div class="card demo-card-header-pic " v-bind:style="{backgroundImage:'url(' + article.images.large + ') '}" >

                    <div  valign="bottom" class="card-header color-black no-border" style="background-color: #cccccc;opacity:0.7;filter:alpha(opacity=80)">{{article.title}}</div>
                    <div class="card-content" style="background-color: #cccccc;opacity:0.7;filter:alpha(opacity=80)">
                        <div class="card-content-inner">
                            <p class="color-gray"><span>{{article.rating.average}}分</span><span style="margin-left: 50px">{{article.year}}年</span></p>
                            <p>原名：{{article.original_title}}</p>
                            <p>演员：
                                <span v-for="(cast,index) in  article.casts" >{{cast.name}} &nbsp;</span>
                            </p>
                        </div>
                    </div>
                    <div class="card-footer" style="background-color: #cccccc;opacity:0.7;filter:alpha(opacity=80)">
                        <a :href="article.alt" class="link">Go</a>
                        <a href="#" class="link ">查看详情</a>
                    </div>
                </div>

            </div>
            <!--<div class="infinite-scroll-preloader">-->
                <!--<div class="preloader"></div>-->
            <!--</div>-->
            <f7-button @click="doSomething">More</f7-button>

        </div>
    </f7-page>
</template>

<script>
    var myApp = new Framework7();

    var $$ = Dom7;
    // 加载flag
    var loading = false;
    myApp.attachInfiniteScroll('.infinite-scroll');
    $$('.infinite-scroll').on('infinite', function () {
        console.log(11111122222)
        // 如果正在加载，则退出
        if (loading) return;

        // 设置flag
        loading = true;

        // 模拟1s的加载过程
        setTimeout(function () {
            // 重置加载flag
            loading = false;

            if ($$('.movie-item').length >= 250) {
                // 加载完毕，则注销无限加载事件，以防不必要的加载
                myApp.detachInfiniteScroll($$('.infinite-scroll'));
                // 删除加载提示符
                $$('.infinite-scroll-preloader').remove();
                return;
            }
            this.doSome();
        }, 1000);
    });
    export default {
        data(){
            return {
                articles:[],
                nextArticle:[]
            };
        },
        components:{

        },
        mounted:function(){
            this.$http.jsonp('https://api.douban.com/v2/movie/top250?start=0&count=10', {}, {
                headers: {

                },
                emulateJSON: true
            }).then(function(response) {
                // 这里是处理正确的回调
                console.log(response)
                this.articles =  response.data.subjects;
                console.log(this.articles);
                console.log(this.$store.state.count)
                this.$store.commit('increment');
                console.log(this.$store.state.count)
                // this.articles = response.data["subjects"] 也可以

            }, function(response) {
                // 这里是处理错误的回调
                console.error(response);

            });
        },
        methods:{
            getMovieArray:function (start,count,calBack) {
                if(typeof (start)==="undefined"){
                    start = 0;
                }
                if(typeof (count)==="undefined"){
                    if( (count+start)>250 ){
                        count = 250-start;
                    }else {
                        count = 10;
                    }
                }
                this.$http.jsonp('https://api.douban.com/v2/movie/top250?start='+start+'&count='+count, {}, {
                    headers: {

                    },
                    emulateJSON: true
                }).then(function(response) {
                    // 这里是处理正确的回调
                    console.log(response)
                    this.nextArticle =  response.data.subjects;
                    console.log(this.nextArticle);
                    calBack(this);
                    // this.articles = response.data["subjects"] 也可以

                }, function(response) {
                    // 这里是处理错误的回调
                    console.error(response);

                });
            },
            doSomething:function () {

                var callBack = function(self){
                    self.articles.push.apply(self.articles,self.nextArticle);
                }
                this.getMovieArray(this.articles.length,10,callBack);
            }
        },
        doSome:function(){
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>")
            this.doSomething();
        }
    }
</script>

