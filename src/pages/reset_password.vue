<template>
  <f7-page>
    <div class="rp_nav">
      <f7-link back></f7-link>
      Reset Password
    </div>
    <div class="rp_body">
      <div class="rp_phone">
        <div class="rp_bottom">
          <p>Click Send SMS, a SMS code will be send to  your phone, please check. The code valids 5 minutes</p>
          <div>
            <span>Email / Mobile Phone(+60)</span>
            <div>
              <input v-model="rp_number" @focus="num_focus" @blur="num_blur" type="text">
              <img @click="del_text_num" v-show="isFocusNum" src="static/img/login_del.png" alt="">
            </div>
          </div>
          <div>
            <span>SMS code</span>
            <div>
              <div>
                <input v-model="rp_code" @focus="code_focus" @blur="code_blur" class="rp_code_input" type="text">
                <img @click="del_text_c" v-show="isFocusC" src="static/img/login_del.png" alt="">
              </div>
              <span @click="send" class="rp_send">Send SMS</span>
            </div>
          </div>
          <div>
            <span>New Password</span>
            <div>
              <input v-model="rp_password" @focus="p_focus" @blur="p_blur" type="text">
              <img @click="del_text_p" v-show="isFocusP" src="static/img/login_del.png" alt="">
            </div>
          </div>
          <f7-link @click="reset" class="rp_submit">Submit</f7-link>
        </div>
      </div>
    </div>
  </f7-page>
</template>
<script>
export default {
    data: function () {
      return {
        isFocusC:false,
        isFocusP:false,
        isFocusNum:false,
        rp_code:'',
        rp_password:'',
        rp_number:'',
      }
    },
    methods: {
      tip:function(msg){
        $(".tip").fadeIn(200,"linear")
        $(".tip .text").html(msg)
        setTimeout(function() {
          $(".tip").fadeOut(200,"linear")
        }, 2000);
      },
      rp_back:function(){
        window.history.go(-1)
      },
      code_focus:function(){
        this.isFocusC=true;
      },
      code_blur:function(){
        if(this.rp_code==''){
          this.isFocusC=false;
        }else{
          this.isFocusC=true;
        }
      },
      p_focus:function(){
        this.isFocusP=true;
      },
      p_blur:function(){
        if(this.rp_password==''){
          this.isFocusP=false;
        }else{
          this.isFocusP=true;
        }
        
      },
      num_focus:function(){
        this.isFocusNum=true;
      },
      num_blur:function(){
        if(this.rp_number==''){
          this.isFocusNum=false;
        }else{
          this.isFocusNum=true;
        }
      },
      del_text_p:function(e){
        $(e.target).prev().focus()
        this.rp_password='';
      },
      del_text_c:function(e){
        $(e.target).prev().focus()
        this.rp_code='';
      },
      del_text_num:function(e){
        $(e.target).prev().focus()
        this.rp_number='';
      },
      send:function(){
        if(this.rp_number==''){
          this.tip("Please enter your Email / Mobile Phone")
        }else{
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
        }
        
      },
      reset:function(){     
        if(this.rp_code==''){
          this.tip("Please enter your SMS code")
        }else{
          $('.rp_submit').css('background','#A1A1A1')//发送中变灰
          // 发送成功变回红
          setTimeout(function() {
            $('.rp_submit').css('background','#EA453D')
          }, 4000);
        }
        
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


