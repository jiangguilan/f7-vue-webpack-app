<template>
  <f7-page name="category" no-tabbar>
    <f7-navbar back-link="Back">
      <!--<form id="category-searchbar" class="searchbar searchbar-enabled"  @submit.prevent action="#">
        <div class="searchbar-inner">
          <div class="searchbar-input-wrap">
            <input class="search_input" ref="input"  
              @focus="onFocus"
              @blur="onBlur"
              @keypress="onKeypress" 
              placeholder="Search" type="search" />
            <i class="searchbar-icon"></i>
            <span class="input-clear-button"></span>
          </div>
          <span class="searchbar-disable-button" @click="delInput">Cancel</span>
        </div>
        
      </form>-->
      <f7-searchbar
        cancel-link="Cancel"
        placeholder="Search in items"
        :clear-button="true"
        :customSearch="true"
        id="category-searchbar"
        @searchbar:search="onSearch"
        @searchbar:enable="onEnable"
        @searchbar:disable="onDisable"
        @searchbar:clear="onClear"
      ></f7-searchbar>
    </f7-navbar>
    <!--<f7-block-title>About My App</f7-block-title>-->
    
    
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
    <f7-accordion>
      <!-- Item 1 -->
      <f7-accordion-item>
        <f7-accordion-toggle>Item 1</f7-accordion-toggle>
        <f7-accordion-content>
          Item 1 content...
        </f7-accordion-content>
      </f7-accordion-item>
      <!-- Item 2 -->
      <f7-accordion-item>
        <f7-accordion-toggle>Item 2</f7-accordion-toggle>
        <f7-accordion-content>
          Item 2 content...
        </f7-accordion-content>
      </f7-accordion-item>
    </f7-accordion>
  </f7-page>
</template>

<script>
export default {
  data () {
    return {}
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
  },
  mounted: function () {
    var $$=this.Dom7;
    $$("#home-searchbar").css("display","none")
    $$("#category-searchbar").css("display","block")
    var url=this.$f7route.url,
      path=this.$f7route.path,
      hash=this.$f7route.hash,
      route=this.$f7route.route;
    // console.log(url,path,hash,route)
    // console.log(2,window.location.pathname)
    $$('#category-searchbar input[type=search]').on('keyup',function(event){
      if (event.keyCode == 13) {           
        event.preventDefault();         
        console.log(111,event.target.value) 
      }
    })
  },
}
</script>