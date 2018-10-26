<template>
  <f7-page name="home" pull-to-refresh @ptr:refresh="onRefresh">
    <f7-navbar>
      <f7-searchbar
        cancel-link="Cancel"
        placeholder="Search in items"
        :clear-button="true"
        :customSearch="true"
        id="home-searchbar"
        @searchbar:search="onSearch"
        @searchbar:enable="onEnable"
        @searchbar:disable="onDisable"
        @searchbar:clear="onClear"
      ></f7-searchbar>
    </f7-navbar>
    <f7-list class="searchbar-not-found">
      <f7-list-item title="Nothing found"></f7-list-item>
    </f7-list>
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
          <f7-button fill raised login-screen-open="#login-screen">Login Screen</f7-button>
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
      onKeypress: function (event) {
        if (event.keyCode == 13) {           
          event.preventDefault();         
          console.log(event.target.value) 
        }
      },
      onRefresh: function () {
        console.log("reflash")
        // mainView.router.refreshPage()
      },
      totop: function () {
          // var timer = null;
        // // $(".to_top").click(function(){
        //  var timer = setInterval(function(){//设置定时器
        //     console.log(1)
        //     var osTop = $(".page-content").scrollTop();//获取滚动条高
        //     var ispeed = Math.floor(osTop/50);//ispeed 最后等于0
        //     $(".page-content").scrollTop(osTop-ispeed);
        //     if(osTop==(osTop-ispeed)){
        //         clearInterval(timer);//这里osTop==(osTop-ispeed)即ispeed等于0时 条件成立
        //         timer=null;
        //     }
        //   },300);
        // });
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
      $("#totop").click(function(){
        console.log(1)
        $('.page-content').animate({scrollTop: '0px'}, 400);   
          $('.page-content').scrollTop(0);
      })
    },
    watch: {
    },
  }
</script>
