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
    <f7-view id="main-view" url="/" main >
     <!--toolbar-through :dynamic-navbar="true"-->
     <!--<router-view></router-view>-->
      <f7-toolbar labels>
        <f7-link href="/" icon-f7="home" text="Home"></f7-link>
        <f7-link href="/category/" icon-f7="data" text="Category"></f7-link>
        <f7-link href="/explore/" icon-f7="compass" text="Explore"></f7-link>
        <f7-link href="/cart/" icon-f7="bag" text="Cart"></f7-link>
        <f7-link href="/account/" icon-f7="person" text="Account"></f7-link>
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
          <f7-login-screen-title>Login</f7-login-screen-title>
          <f7-list form>
            <f7-list-item>
              <f7-label>Username</f7-label>
              <f7-input name="username" placeholder="Username" type="text"></f7-input>
            </f7-list-item>
            <f7-list-item>
              <f7-label>Password</f7-label>
              <f7-input name="password" type="password" placeholder="Password"></f7-input>
            </f7-list-item>
          </f7-list>
          <f7-list>
            <f7-list-button title="Sign In" login-screen-close></f7-list-button>
            <f7-block-footer>
              <p>Click Sign In to close Login Screen</p>
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
        // pushStateNoAnimation:true,
        swipeBackPageThreshold:100,//滑动返回响应距离
        // smartSelectSearchbar: true,//启用搜索
      },
    }
  },
  methods: {
    routeLink: function () {
      var $$=this.Dom7;
      // var url=this.$f7route.url,
      //   path=this.$f7route.path,
      //   hash=this.$f7route.hash,
      //   route=this.$f7route.route;
      // console.log(url,path,hash,route)
      this.$f7.router.navigate(window.location.pathname+'/');
      // console.log(12,window.location)
      if(window.location.pathname != '/'){
        console.log(1389)
      }
      // console.log(12,this.f7params.animatePages)
      
    },
    fontSize: function () {
      var $$=this.Dom7;
      // console.log($$(document))
      if(document.documentElement.clientWidth >= 640){
        document.documentElement.style.fontSize=100+'px';
      }else if(document.documentElement.clientWidth == 414){
        document.documentElement.style.fontSize=document.documentElement.clientWidth/5.52+'px';
      }else if(document.documentElement.clientWidth == 375){
        document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+'px';
      }else if(document.documentElement.clientWidth == 320){
        document.documentElement.style.fontSize=document.documentElement.clientWidth/12.8+'px';
      }else{
        document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+'px';
      }
    },
  },
  beforemount:function () {
    // this.routeLink()
  },
  mounted:function () {
    this.fontSize()
    this.routeLink()
  },
}
</script>
