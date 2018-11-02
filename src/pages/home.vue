<template>
  <f7-page name="home" pull-to-refresh @ptr:refresh="onRefresh">
    <f7-navbar>
      <!--<f7-searchbar
        cancel-link="Cancel"
        placeholder="Search in items"
        :clear-button="true"
        :customSearch="true"
        id="home-searchbar"
        @searchbar:search="onSearch"
        @searchbar:enable="onEnable"
        @searchbar:disable="onDisable"
        @searchbar:clear="onClear"
      ></f7-searchbar>-->
      <div class="search">
        <img src="static/img/search.png">
        <input type="text" placeholder="What do you like?">
      </div>
    </f7-navbar>
    <f7-toolbar labels>
      <f7-link href="/" icon-f7="home" text="Home"></f7-link>
      <f7-link href="/category" icon-f7="data" text="Category"></f7-link>
      <f7-link href="/explore" icon-f7="compass" text="Explore"></f7-link>
      <f7-link href="/cart" icon-f7="bag" text="Cart"></f7-link>
      <f7-link href="/account" icon-f7="person" text="Account"></f7-link>
    </f7-toolbar>
    <!--<f7-list class="searchbar-not-found">
      <f7-list-item title="Nothing found"></f7-list-item>
    </f7-list>-->
    <!--<f7-list class="searchbar-found" id="search-list">
      <f7-list-item v-for="(item,index) in items" :title="'Item ' + item" :key="index"></f7-list-item>
    </f7-list>-->
    <f7-swiper class="banner" pagination next-button prev-button scrollbar :params="{autoplay:{delay:2000,disableOnInteraction:false},speed:500}">
      <f7-swiper-slide><p> <img src="static/img/detail-1.jpg" alt=""> </p></f7-swiper-slide>
      <f7-swiper-slide><p> <img src="static/img/detail-2.jpg" alt=""> </p></f7-swiper-slide>
      <f7-swiper-slide><p> <img src="static/img/detail-3.jpg" alt=""> </p></f7-swiper-slide>
      <f7-swiper-slide><p> <img src="static/img/detail-4.jpg" alt=""> </p></f7-swiper-slide>
      <f7-swiper-slide><p> <img src="static/img/detail-5.jpg" alt=""> </p></f7-swiper-slide>
      <f7-swiper-slide><p> <img src="static/img/detail-6.jpg" alt=""> </p></f7-swiper-slide>
    </f7-swiper>
    <f7-block >
      <f7-swiper class="flash-banner" next-button prev-button :params="{autoplay:{delay:2000},speed:500, slidesPerView: 3, spaceBetween: 20}">
        <f7-swiper-slide><img src="static/img/detail-1.jpg" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="static/img/detail-2.jpg" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="static/img/detail-3.jpg" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="static/img/detail-4.jpg" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="static/img/detail-5.jpg" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="static/img/detail-6.jpg" alt=""></f7-swiper-slide>
      </f7-swiper>
    </f7-block>
    <f7-block >
      <f7-swiper class="activity-banner" next-button prev-button :params="{autoplay:{delay:2000},speed:500, slidesPerView: 5, spaceBetween: 20}">
        <f7-swiper-slide><img src="static/img/detail-1.jpg" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="static/img/detail-2.jpg" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="static/img/detail-3.jpg" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="static/img/detail-4.jpg" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="static/img/detail-5.jpg" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="static/img/detail-6.jpg" alt=""></f7-swiper-slide>
      </f7-swiper>
    </f7-block>
    <f7-block class="product-list" >
      <f7-row>
        <f7-col width="50">
          <img src="static/img/detail-1.jpg" alt="">
        </f7-col>
        <f7-col width="50">
          <img src="static/img/detail-2.jpg" alt="">
        </f7-col>
      </f7-row>
      <f7-row>   
        <f7-col width="50">
          <img src="static/img/detail-3.jpg" alt="">
        </f7-col>
        <f7-col width="50">
          <img src="static/img/detail-4.jpg" alt="">
        </f7-col>
      </f7-row>
    </f7-block>
    
    
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised popup-open="#popup">Popup</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button @click="login_popup" fill raised login-screen-open="#login-screen">Login Screen</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button @click="register_popup" fill raised login-screen-open="#register-screen">register Screen</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
    <f7-block-title>Panels</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised panel-open="left">Left Panel</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised panel-open="right">Right Panel</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
    <f7-list>
      <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>
      <f7-list-item link="/load-something-that-doesnt-exist/" title="Default Route (404)"></f7-list-item>
      <f7-list-item link="/login-test-lang" title="/login-test-lang/"></f7-list-item>
      <f7-list-item link="/reset_password" title="/reset password/"></f7-list-item>
    </f7-list>
    <div id="totop" @click="totop">to top</div>
  </f7-page>
</template>
<script>
export default {
    data: function () {
      return {
        items: (function () {
          var it = [];
          for (var i = 0; i < 3; i++) it.push(i+1);
          return it;
        })(),
      }
    },
    methods: {
      onSearch: function (query, found) {
        // console.log('search', query);
        //发生到后端
      },
      onClear: function (event) {
        console.log('clear');
      },
      onEnable: function (event) {
        console.log('enable');
        this.$$('#searchContent').show();
      },
      onDisable: function (event) {
        console.log('disable');
        this.$$('#searchContent').hide();
      },
      onRefresh: function () {
        console.log("reflash")
      },
      totop: function () {
        $('.page-content').animate({scrollTop: '0px'}, 400);
      },
      login_popup: function () {
        $("html").addClass("with-modal-loginscreen")
        $('#login-screen').addClass('modal-in')
        $("#login-screen").css("display","block")  
      },
      register_popup:function(){
        $("html").addClass("with-modal-loginscreen")
        $('#register-screen').addClass('modal-in')
        $("#register-screen").css("display","block")// fadeIn(200,'linear') 
      },
    },
    mounted: function () {
      var $$=this.Dom7;
      $$("#home-searchbar").css("display","block")
      $$("#category-searchbar").css("display","none")
      $$('#home-searchbar input[type=search]').on('keyup',function(event){
        if (event.keyCode == 13) {           
          event.preventDefault();         
          console.log(111,event.target.value) 
        }
      })
    },
    watch: {
    },
  }
</script>
