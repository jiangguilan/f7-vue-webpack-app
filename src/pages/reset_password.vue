<template>
  <f7-page>
    <f7-navbar title="My App" back-link="Back"></f7-navbar>
    <div class="rp_nav">
      <img @click="rp_back" src="static/img/nav_btn_back.png">
      Reset Password
    </div>
    <div class="rp_body"></div>
  </f7-page>
</template>
<script>
export default {
    data: function () {
      return {
        
      }
    },
    methods: {
      rp_back:function(){
        window.history.go(-1)
      }
     
    },
    mounted: function () {
      var $$=this.Dom7;
      $$("#home-searchbar").css("display","block")
      $$("#category-searchbar").css("display","none")
      
    },
    watch: {
    },
  }
</script>

<style scoped>
  .ios .navbar{
    background: #EA453D;
  }
  .rp_nav{
    background:#EA453D;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: .88rem;
    color: #fff;
    text-align: center;
    line-height: .88rem;
    font-size: .24rem;
  }
  .rp_nav img{
    width: .48rem;
    height: .48rem;
    position: absolute;
    bottom: .18rem;
    left: .1rem;
  }
</style>

