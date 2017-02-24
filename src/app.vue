<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>


    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- Navbar -->
        <f7-navbar >
          <f7-nav-center >豆瓣</f7-nav-center>
        </f7-navbar>

        <!-- Pages -->
        <f7-pages>
          <f7-page>

            <f7-block-title>系统设置</f7-block-title>
            <f7-list>
              <f7-list-item   :link=article.url v-for="article in articles">{{article.title}}</f7-list-item>
            </f7-list>

          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>

  </div>

</template>

<script>

    export default {

        data(){
            return {
                articles:[]
            }
        },
        mounted(){
            setTimeout(() => {
                this.articles = [
                    {
                        "title": "我的图书",
                        "url": "/book/",
                        "flag": false
                    }, {
                        "title": "我的电影",
                        "url": "/movie/",
                        "flag": false
                    }
                ];
                this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
                    headers: {

                    },
                    emulateJSON: true
                }).then(function(response) {
                    // 这里是处理正确的回调
                    console.log(response)
//                    this.articles = response.data.subjects;
                    // this.articles = response.data["subjects"] 也可以
                    console.log(this.articles);

                }, function(response) {
                    // 这里是处理错误的回调
                    console.error(response);

                });

            },100);
        },
        components:{

        }


    }
</script>