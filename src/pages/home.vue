<template>
  <f7-page name="home" pull-to-refresh @ptr:refresh="onRefresh">
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
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
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-list class="searchbar-not-found">
      <f7-list-item title="Nothing found"></f7-list-item>
    </f7-list>
    <f7-list class="searchbar-found" id="search-list">
      <f7-list-item v-for="(item,index) in items" :title="'Item ' + item" :key="index"></f7-list-item>
    </f7-list>
    <f7-block strong>
      <f7-swiper id="banner" pagination next-button prev-button scrollbar :params="{autoplay:{delay:2000,disableOnInteraction:false},speed:500}">
        <f7-swiper-slide><p> Slide 1 </p></f7-swiper-slide>
        <f7-swiper-slide><p> Slide 2 </p></f7-swiper-slide>
        <f7-swiper-slide><p> Slide 3 </p></f7-swiper-slide>
        <f7-swiper-slide><p> Slide 4 </p></f7-swiper-slide>
        <f7-swiper-slide><p> Slide 5 </p></f7-swiper-slide>
        <f7-swiper-slide><p> Slide 6 </p></f7-swiper-slide>
      </f7-swiper>
    </f7-block>
    <f7-block strong>
      <f7-swiper next-button prev-button :params="{autoplay:{delay:2000},speed:500, slidesPerView: 1, spaceBetween: 20}">
        <f7-swiper-slide>Slide 1</f7-swiper-slide>
        <f7-swiper-slide>Slide 2</f7-swiper-slide>
        <f7-swiper-slide>Slide 3</f7-swiper-slide>
        <f7-swiper-slide>Slide 4</f7-swiper-slide>
        <f7-swiper-slide>Slide 5</f7-swiper-slide>
        <f7-swiper-slide>Slide 6</f7-swiper-slide>
      </f7-swiper>
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
      <f7-list-item link="/login-test-lang/" title="/login-test-lang/"></f7-list-item>
    </f7-list>
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
    },
    mounted: function () {
      var $$=this.Dom7;
      console.log(15,this.$f7route)
      // $$("#home-searchbar").css("display","block")
      // $$("#category-searchbar").css("display","none")
      // console.log(13,this)
      $$('#home-searchbar input[type=search]').on('keyup',function(event){
        if (event.keyCode == 13) {           
          event.preventDefault();         
          console.log(111,event.target.value) 
        }
      })
    },
    watch: {
      // picked: function (newVal,oldVal) {
      //   console.log(newVal,oldVal)
      // }
    },
  }
</script>
