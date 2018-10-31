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
      <f7-toolbar labels>
        <f7-link href="/" icon-f7="home" text="Home"></f7-link>
        <f7-link href="/category" icon-f7="data" text="Category"></f7-link>
        <f7-link href="/explore" icon-f7="compass" text="Explore"></f7-link>
        <f7-link href="/cart" icon-f7="bag" text="Cart"></f7-link>
        <f7-link href="/account" icon-f7="person" text="Account"></f7-link>
      </f7-toolbar>
    </f7-view>

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
            <div class="login_tip name_tip">The (Email/Mobile Number) has not been registered before</div>
            <div v-bind:style="{'height':+passHeight+ 'rem'}">
              <label @click="tri_pass_input($event)" id="label_password" v-bind:style="{'bottom':+passwordTop+ 'rem'}">Enter your password</label>
              <input class="input_pass" @focus="passwordFocus" @blur="passwordBlur($event)" name="password" type="password"></input>
              <img v-show="isShowLoginPass" @click="login_isShow($event)" src="static/img/login_hide.png">
            </div>
            <div class="login_tip pass_tip">Your password must be 6-20 characters</div>
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
    }
  },
  methods: {
    routeLink: function () {
      var $$=this.Dom7;
    },
    fontSize: function () {
      var $$=this.Dom7;
      // console.log($$(document))
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
    login: function () {
      var status="SUCCESS";
      var status="FAILUR";
      var status="PHONE_UNVALID";//账号非法
      var status="REGISTERED";//
      var status="SUCCESS";
      var flag=true;
      if(flag){
        $("#sign_in .item-link.list-button").removeClass("login-screen-close")
        $("html").removeClass("with-modal-loginscreen")
        $("#login-screen").fadeOut(200,linear)
          

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
  },
  beforemount:function () {
    // this.routeLink()
  },
  mounted:function () {
    this.fontSize()
    this.routeLink()
  },
  beforeupdate:function () {
    // console.log(888)
  },
  watch:{
    $route:'reload'
  },
}
</script>
