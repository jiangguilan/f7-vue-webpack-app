<template>
  <f7-page>
    <f7-navbar title="Explore" back-link="Back"></f7-navbar>
    <f7-block-title>login-test-lang My App</f7-block-title>
    <f7-block strong>
      <p>Here is About page!</p>
      <p>You can go <f7-link back>back</f7-link>.</p>
      <p>
        
        <h1>{{$t("login.title")}}</h1>
        <button @click="langToggle">en/zh</button>
      </p>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  data: function () {
    return {

    }
  },
  methods:{
    langToggle(){
        if(this.$i18n.locale = 'zh_CN'){
          this.$i18n.locale = 'en_US';
        }else{
          this.$i18n.locale = 'zh_CN';
        }
    }
  },
  mounted: function () {
    var $$=this.Dom7;
    $$("#home-searchbar").css("display","none")
    $$("#category-searchbar").css("display","none")
  }
}
</script>
