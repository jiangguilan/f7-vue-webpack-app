<template>
  <!-- App -->
  <f7-app :params="f7params">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left reveal theme-dark>
      <f7-view url="/panel-left/"></f7-view>
    </f7-panel>

    <!-- Right Panel -->
    <f7-panel right cover theme-dark>
      <f7-view url="/panel-right/"></f7-view>
    </f7-panel>

    <!-- Main View -->
    <f7-view id="main-view" main >

    </f7-view>


    <!--tip-->
    <div class="modal modal-in tip">
      <div class="text">Please enter valid phone number !</div>
    </div>

    <!-- Popup -->
    <f7-popup id="popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>

    <!-- Login Screen -->
    <f7-login-screen id="login-screen">
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title><img src="static/img/logo.png"></f7-login-screen-title>
          <div class="login_form">
            <div>
              <label @click="tri_name_input($event)" id="label_name" v-bind:style="{'bottom':+nameTop+ 'rem'}">Email / Phone Number</label>
              <input class="input_name" @focus="nameFocus" @blur="nameBlur($event)" name="username" type="text"></input> 
              <img v-show="isShowLoginDel" @click="login_del($event)" src="static/img/login_del.png">
            </div>
            <div v-show="isError" class="login_tip name_tip"></div>
            <div v-bind:style="{'height':+passHeight+ 'rem'}">
              <label @click="tri_pass_input($event)" id="label_password" v-bind:style="{'bottom':+passwordTop+ 'rem'}">Enter your password</label>
              <input class="input_pass" @focus="passwordFocus" @blur="passwordBlur($event)" name="password" type="password"></input>
              <img v-show="isShowLoginPass" @click="login_isShow($event)" src="static/img/login_hide.png">
            </div>
            <!--<div class="login_tip pass_tip">Your password must be 6-20 characters</div>-->
          </div>
          <div class="forget_link">
            <f7-link text="Forget Password ?"></f7-link>
          </div>
          <f7-list>
            <f7-list-button @click="login" id="sign_in" title="Sign In"></f7-list-button>
            <f7-block-footer>
              <p class="way_tip clear"><span class="lt"></span> or sign in with <span class="rt"></span></p>
              <div class="login_way_box">
                <img src="static/img/login_facebook.png">
                <img src="static/img/login_google.png">
              </div>
              <div class="new_customer_link">
                New customer?
                <f7-link text="Start here"></f7-link>
              </div>
            </f7-block-footer>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>

    <!-- register Screen -->
    <f7-login-screen id="register-screen">
      <f7-view>
        <f7-page register-screen>
          <div class="re_head">
            <img @click="re_exit" src="static/img/re_exit.png">
            Register
          </div>
          <div class="re_body">
            <div class="re_input">
              <div>
                <div>
                  <span>First Name</span>
                  <input id='re_first_id' @focus="re_first_focus" @blur="re_first_fn" v-model="re_first" type="text">
                  <img v-show="isFirst" @click="re_del_first" src="static/img/login_del.png">
                </div>
                <p v-show="re_first_null">Please enter your first name</p>
              </div>
              <div>
                <div>
                  <span>Last Name</span>
                  <input id='re_last_id' @focus="re_last_focus" @blur="re_last_fn" v-model="re_last" type="text">
                  <img v-show="isLast" @click="re_del_last" src="static/img/login_del.png">
                </div>
                <p v-show="re_last_null">Please enter your last name</p>
              </div>
              <div>
                <div>
                  <span>Email / Mobile Number</span>
                  <input id="re_number_id" v-model="re_number" @focus="re_num_focus" @blur="re_num_blur" type="text">
                  <img v-show="isReFocus" @click="re_del_text" src="static/img/login_del.png">  
                </div>
                <p v-show="re_num_null">Please enter your email / mobile pbone</p>
              </div>
              <div>
                <div>
                  <span>Input validation code</span>
                  <input id='re_code_id' @focus="re_code_focus" @blur="re_code_fn" v-model="re_code" type="text">
                  <img v-show="isCode" @click="re_del_code" src="static/img/login_del.png">
                </div>
                <p v-show="re_code_null">Please enter your validation code</p>
              </div>
              <div>
                <div>
                  <span>Password</span>
                  <input id="re_password_id" v-model="re_password" @focus="re_p_focus" @blur="re_p_blur" type="password">
                  <img v-show="isReShow" @click="re_show($event)" src="static/img/login_hide.png"> 
                </div>
                <p v-show="re_p_null">Please enter your password</p>
              </div>
            </div>
            <div class="re_bottom">
              <f7-link @click="register" class="re-complete" text="Complete registration"></f7-link>
              <div>
                Already a member? 
                <f7-link text="Log in"></f7-link>
              </div>
            </div>
          </div>
        </f7-page>
      </f7-view>
    </f7-login-screen>


  </f7-app>
</template>

<script>
// Import Routes
import routes from './routes.js'

export default {
  data:function() {
    return {
      // Framework7 parameters here
      f7params: {
        id: 'io.framework7.testapp', // App bundle ID
        name: 'Framework7', // App name
        theme: 'ios', // Automatic theme detection auto ios
        // App routes
        routes: routes,
        swipeBackPage: true,//滑动返回
        animatePages:true,
        pushStateNoAnimation:true,
        swipeBackPageThreshold:100,//滑动返回响应距离
        // smartSelectSearchbar: true,//启用搜索
        // pushState: true,//不起作用 
      },
      nameTop:0.2,
      passwordTop:0.2,
      passHeight:.52,
      isShowLoginDel:false,
      isShowLoginPass:false,
      isError:false,
      isReFocus:false,
      isReShow:false,
      re_first:'',
      re_last:'',
      re_number:'',
      re_code:'',
      re_password:'',
      re_first_null:false,
      re_last_null:false,
      re_num_null:false,
      re_code_null:false,
      re_p_null:false,
      isFirst:false,
      isLast:false,
      isCode:false,
    }
  },
  methods: {
    fontSize: function () {
      var $$=this.Dom7;
      if(document.documentElement.clientWidth >= 640){
        document.documentElement.style.fontSize=100+'px';
      }
      else{
        document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+'px';
      }
    },
    reload: function () {
      this.search();
    },
    tip:function(msg){
      $(".tip").fadeIn(200,"linear")
      $(".tip .text").html(msg)
      setTimeout(function() {
        $(".tip").fadeOut(200,"linear")
      }, 2000);
    },
    login: function () {
      var that=this;
      // var status="SUCCESS";
      var status="FAILUR";
      // var status="PHONE_UNVALID";//账号非法
      // var status="NO_REGISTERED";//没注册
      // var status="NUMBER_ERROR";//账号密码不匹配
      if(status=="SUCCESS"){
        that.isError=false;
        // $("#sign_in .item-link.list-button").removeClass("login-screen-close")
        $("html").removeClass("with-modal-loginscreen")
        setTimeout(function() {
          $('#login-screen').removeClass('modal-in')
        }, 200);
        $("#login-screen").fadeOut(200,"linear")
        $(".ios .login_form input.input_name").css({"border":"none","border-bottom":"1px solid #B1B1B1"})
      }else if(status=="FAILUR"){
        that.isError=false;
        this.tip("Login failed!Please check your account and password")
        // $(".tip").fadeIn(200,"linear")
        // setTimeout(function() {
        //   $(".tip").fadeOut(200,"linear")
        // }, 2000);
        // $(".tip .text").html("Login failed!Please check your account and password")//Login failed!Please check your account and password

      }else if(status=="PHONE_UNVALID"){
        that.isError=true;
        $(".name_tip").html("Incorrect (mailbox / phone number) format")
        // $("#sign_in .item-link.list-button").addClass("login-screen-close")
        $("html").addClass("with-modal-loginscreen")
        $(".ios .login_form input.input_name").css("border","1px solid #EA453D")
        // $("#login-screen").fadeOut(200,linear)

      }else if(status=="NO_REGISTERED"){
        that.isError=true;
        $(".name_tip").html("The (email / phone Number) has not been registered before")
        $("html").addClass("with-modal-loginscreen")
        $(".ios .login_form input.input_name").css("border","1px solid #EA453D")

      }else if(status=="NUMBER_ERROR"){
        that.isError=false;
        $(".tip").fadeIn(200,"linear")
        setTimeout(function() {
          $(".tip").fadeOut(200,"linear")
        }, 2000);
        $(".tip .text").html("Login failed!Please check your account and password")//Login failed!Please check your account and password
      }
      
    },
    nameFocus:function(){
      this.nameTop=0.52;
      this.isShowLoginDel=true;
    },
    nameBlur:function(e){
      if($(e.target).val()==""){
        this.nameTop=0.2;
        this.isShowLoginDel=false;
      }else{
        this.nameTop=0.52;
        this.isShowLoginDel=true;
      }
    },
    passwordFocus:function(){
      this.passwordTop=0.52;
      this.passHeight=.72;
      this.isShowLoginPass=true;
    },
    passwordBlur:function(e){
      if($(e.target).val()==""){
        this.passwordTop=0.2;
        this.isShowLoginPass=false;
        this.passHeight=.52;
      }else{
        this.passwordTop=0.52;
        this.isShowLoginPass=true;
        this.passHeight=.72;
      }
    },
    tri_name_input:function(e){
      $(e.target).next().focus()
    },
    tri_pass_input:function(e){
      $(e.target).next().focus()
    },
    login_del:function(e){
      $(e.target).prev().val("")
      $(".input_name").focus()
    },
    login_isShow:function(e){
      if($(e.target).prev().attr("type")=="text"){
        $(e.target).prev().attr("type","password")
        $(e.target).attr("src","static/img/login_hide.png")
      }else{
        $(e.target).prev().attr("type","text")
        $(e.target).attr("src","static/img/login_show.png")
      }
      $(".input_pass").focus()
    },
    re_num_focus:function(){
      this.isReFocus=true;
    },
    re_num_blur:function(){
      if(this.re_number==''){
        this.isReFocus=false;
      }else{
        this.isReFocus=true;
      }
      this.re_num_null=false
      $('#re_number_id').css({'border':'none','border-bottom':'1px solid #1B1B1B'})
    },
    re_del_text:function(e){
      this.re_number='';
      $("#re_number_id").focus()
    },
    re_del_first:function(e){
      this.re_first='';
      $("#re_first_id").focus()
    },
    re_del_last:function(e){
      this.re_last='';
      $("#re_last_id").focus()
    },
    re_del_code:function(e){
      this.re_code='';
      $("#re_code_id").focus()
    },
    re_p_focus:function(){
      this.isReShow=true;
    },
    re_p_blur:function(){
      if(this.re_password==''){
        this.isReShow=false;
      }else{
        this.isReShow=true;
      }
      this.re_p_null=false
      $('#re_password_id').css({'border':'none','border-bottom':'1px solid #1B1B1B'})
    },
    re_show:function(e){
      if($('#re_password_id').attr("type")=="text"){
        $('#re_password_id').attr("type",'password')
        $("#re_password_id").focus()
        $(e.target).attr('src','static/img/login_hide.png')
      }else{
        $('#re_password_id').attr("type",'text')  
        $(e.target).attr('src','static/img/login_show.png')
      }
    },
    re_exit:function(){
      $('html').removeClass('with-modal-loginscreen')
      $("#register-screen").fadeOut(200,'linear')
      setTimeout(function() {
        $('#register-screen').removeClass('modal-in')
      }, 200);
    },
    re_first_focus:function(){
      this.isFirst=true;
    },
    re_first_fn:function(){
      this.re_first_null=false
      $('#re_first_id').css({'border':'none','border-bottom':'1px solid #1B1B1B'})
      if(this.re_first!=''){
        this.isFirst=true;
      }else{
        this.isFirst=false;
      }
    },
    re_last_focus:function(){
      this.isLast=true;
    },
    re_last_fn:function(){
      this.re_last_null=false
      $('#re_last_id').css({'border':'none','border-bottom':'1px solid #1B1B1B'})
      if(this.re_last!=''){
        this.isLast=true;
      }else{
        this.isLast=false;
      }
    },
    re_code_focus:function(){
      this.isCode=true;
    },
    re_code_fn:function(){
      this.re_code_null=false
      $('#re_code_id').css({'border':'none','border-bottom':'1px solid #1B1B1B'})
      if(this.re_code!=''){
        this.isCode=true;
      }else{
        this.isCode=false;
      }
    },
    register:function(){
      if(this.re_first==''){
        this.re_first_null=true
        $('#re_first_id').css('border','1px solid #EA453D')
      }else if(this.re_last==''){
        this.re_last_null=true
        $('#re_last_id').css('border','1px solid #EA453D')
      }else if(this.re_number==''){
        this.re_num_null=true
        $('#re_number_id').css('border','1px solid #EA453D')
      }else if(this.re_code==''){
        this.re_code_null=true
        $('#re_code_id').css('border','1px solid #EA453D')
      }else if(this.re_password==''){
        this.re_p_null=true
        $('#re_password_id').css('border','1px solid #EA453D')
      }else{
        this.re_first_null=false
        this.re_last_null=false
        this.re_num_null=false
        this.re_code_null=false
        this.re_p_null=false
      }
    },
  },
  beforemount:function () {
  },
  mounted:function () {
    this.fontSize()
  },
  beforeupdate:function () {
  },
  watch:{
    $route:'reload'
  },
}
</script>
