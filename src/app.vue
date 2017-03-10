<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- 设置面板 -->
    <f7-panel right cover layout="dark">
      <f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar title="设置面板" sliding></f7-navbar>
        <f7-pages>
          <f7-page>

          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>


    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- Navbar -->
        <f7-navbar>

          <f7-nav-center >豆瓣</f7-nav-center>
          <f7-nav-right>
            <f7-link icon="icon-bars" open-panel="right"></f7-link>
          </f7-nav-right>
        </f7-navbar>

        <!-- Pages -->
        <f7-pages>
          <f7-page>

            <f7-swiper pagination scrollbar>
              <f7-swiper-slide><img src="./img/logo1.png"></f7-swiper-slide>
              <f7-swiper-slide><img src="./img/logo2.png"></f7-swiper-slide>
              <f7-swiper-slide><img src="./img/logo3.jpg"></f7-swiper-slide>
            </f7-swiper>

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


            },100);
        },
        components:{

        }


    }
</script>