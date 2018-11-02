<template>
  <f7-page>
    <div class="rp_nav">
      <f7-link back></f7-link>
      Reset Password
    </div>
    <div class="rp_body">
      <div class="rp_phone">
        <div class="rp_bottom">
          <div>
            <span>Email / Mobile Phone(+60)</span>
            <div>
              <input type="text">
            </div>
          </div>
          <div>
            <span>SMS code</span>
            <div>
              <input class="rp_code_input" type="text">
              <span @click="send" class="rp_send">Send SMS</span>
            </div>
          </div>
          <p>Please check your email and complete the verification process to reset your password</p>
          <f7-link @click="reset" class="rp_submit">Reset Password</f7-link>
        </div>
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
      },
      send:function(){
        $('.rp_send').css('background','#A1A1A1').html('Send SMS(60s)')
        var time=60;
        var timer=setInterval(function(){
          time-=1;
          if(time>=0){
            $('.rp_send').html('Send SMS('+time+'s)')
          }else{
            clearInterval(timer)
            timer=null;
            $('.rp_send').css('background','#EA453D').html('Send SMS')
          }
          console.log(time)
        },1000)
        // 发送成功变回红
        // setTimeout(function() {
        //   $('.rp_send').css('background','#EA453D')
        //   console.log(1)
        // }, 6000);
      },
      reset:function(){
        $('.rp_submit').css('background','#A1A1A1')//发送中变灰

        // 发送成功变回红
        setTimeout(function() {
          $('.rp_submit').css('background','#EA453D')
        }, 4000);
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


