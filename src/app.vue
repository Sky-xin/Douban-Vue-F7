<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left reveal layout="dark">
      <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar title="Left Panel"></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-block inner>
              <p>Left panel content goes here</p>
            </f7-block>
            <f7-block-title>Load page in panel</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About"></f7-list-item>
              <f7-list-item link="/form/" title="Form"></f7-list-item>
            </f7-list>
            <f7-block-title>Load page in main view</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About" link-view="#main-view" link-close-panel></f7-list-item>
              <f7-list-item link="/form/" title="Form" link-view="#main-view" link-close-panel></f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>

    <!-- Right Panel -->
    <f7-panel right cover layout="dark">
      <f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar title="Right Panel" sliding></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-block>
              <p>Right panel content goes here</p>
            </f7-block>
            <f7-block-title>Load page in panel</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About"></f7-list-item>
              <f7-list-item link="/form/" title="Form"></f7-list-item>
            </f7-list>
            <f7-block-title>Load page in main view</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About" link-view="#main-view" link-close-panel></f7-list-item>
              <f7-list-item link="/form/" title="Form" link-view="#main-view" link-close-panel></f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>


    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- Navbar -->
        <f7-navbar>
          <f7-nav-left>
            <f7-link icon="icon-bars" open-panel="left"></f7-link>
          </f7-nav-left>
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
            <f7-block-title>侧边栏</f7-block-title>
            <f7-block>
              <f7-grid>
                <f7-col width="50">
                  <f7-button open-panel="left">Left Panel</f7-button>
                </f7-col>
                <f7-col width="50">
                  <f7-button open-panel="right">Right Panel</f7-button>
                </f7-col>
              </f7-grid>
            </f7-block>

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