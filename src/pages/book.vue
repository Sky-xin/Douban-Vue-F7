<template>
  <f7-page>

    <f7-navbar title="Form" back-link="Back" sliding></f7-navbar>
    <f7-block-title>电影排行榜</f7-block-title>
    <f7-block inner>
      <f7-list form>

        <f7-list>
          <f7-list-item   :link=article.url v-for="article in articles">{{article.title}}</f7-list-item>
        </f7-list>
        <div v-for="article in articles">
          <div class="card demo-card-header-pic">
            <div style="background-image:url(article.images.medium)" valign="bottom" class="card-header color-white no-border">Journey To Mountains</div>
            <div class="card-content">
              <div class="card-content-inner">
                <p class="color-gray">{{article.title}}</p>
                <p class="color-gray">{{article.rating.average}}分</p>
                <p>{{article.original_title}}</p>
              </div>
            </div>
            <div class="card-footer">
              <a :href="article.alt" class="link">Like</a>
              <a href="#" class="link">Read more</a>
            </div>
          </div>
          
        </div>
        <f7-buttons>
          <f7-button color="blue" save>保存</f7-button>
          <f7-button color="green" back>退出</f7-button>
        </f7-buttons>

      </f7-list>



    </f7-block>
  </f7-page>
</template>

<script>
  import msg from '../components/message.vue';
  export default {
      data(){
          return {
             articles:[],            
          };
      },
      components:{

      },
      mounted:function(){
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
      }
  }
</script>