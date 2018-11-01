<template>
  <f7-page>
    <div class="rp_nav">
      <f7-link back></f7-link>
      Reset Password
    </div>
    <div class="rp_body">
      <div class="rp_top">
        <span>Email</span>
        <span>Mobile phone</span>
      </div>
      <div class="rp_bottom">
        <div>
          <span>Mobile Phone</span>
          <div>
            <span>+60</span>
            <input type="text">
          </div>
        </div>
        <div>
          <span>SMS code</span>
          <div>
            <input type="text">
            <span>Send SMS</span>
          </div>
        </div>
        <f7-link>Reset Password</f7-link>
      </div>
    </div>
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


