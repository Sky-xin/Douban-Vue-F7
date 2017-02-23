<template>
  <f7-page>

    <f7-navbar title="Form" back-link="Back" sliding></f7-navbar>
    <f7-block-title>商户信息</f7-block-title>
    <f7-block inner>
      <f7-list form>


        <f7-list-item>
          <f7-label>商户号:</f7-label>
          <f7-input type="text" placeholder="989899"/>
        </f7-list-item>
        <f7-list-item>
          <f7-label>商户名称:</f7-label>
          <f7-input type="text" placeholder="989899"/>
        </f7-list-item>
        <f7-list-item>
          <f7-label>终端号:</f7-label>
          <f7-input type="text" placeholder="0000001"/>
        </f7-list-item>

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
            wid:"100px"
          };
      },
      components:{

      }
  }
</script>