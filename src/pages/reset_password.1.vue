<template>
  <f7-page>
    <div class="rp_nav">
      <f7-link back></f7-link>
      Reset Password
    </div>
    <div class="rp_body">
      <div class="rp_top">
        <span @click="re_email">
          Email
          <div v-show="isEmail"></div>
        </span>
        <span @click="re_phone">
          Mobile phone
          <div v-show="isPhone" class="rp_phone_deg"></div>
        </span>
      </div>
      <div v-show="isPhone" class="rp_phone">
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
              <input class="rp_code_input" type="text">
              <span class="rp_send">Send SMS</span>
            </div>
          </div>
          <f7-link class="rp_submit">Reset Password</f7-link>
        </div>
      </div>
      <div v-show="isEmail" class="rp_email">
        <div class="rp_email_box">
          <div>
            <span>Email</span>
            <input type="text">  
          </div>
          <p>Please check your email and complete the verification process to reset your password</p>
        </div>
        <f7-link @click="sen_email()" class="rp_submit">Reset Password</f7-link>
      </div>
    </div>
  </f7-page>
</template>
<script>
export default {
    data: function () {
      return {
        isPhone:false,
        isEmail:true,
      }
    },
    methods: {
      rp_back:function(){
        window.history.go(-1)
      },
      re_email:function(){
        this.isEmail=true;
        this.isPhone=false;
      },
      re_phone:function(){
        this.isEmail=false;
        this.isPhone=true;
      },
      sen_email:function(){

      },
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


