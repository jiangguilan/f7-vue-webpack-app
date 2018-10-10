<template>
  <f7-page toolbar-through>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <!--<f7-nav-title>My App</f7-nav-title>-->
      <f7-searchbar
        cancel-link="Cancel"
        search-list="#search-list"
        placeholder="Search in items"
        :clear-button="true"
        :customSearch="true"
        @searchbar:search="onSearch"
        @searchbar:enable="onEnable"
        @searchbar:disable="onDisable"
        @searchbar:clear="onClear"
        @blur="onblur"
      ></f7-searchbar>
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <!--search test-->
    <input @keypress="onKeypress" type="serch" placeholder="搜索商品">
    <form  @submit.prevent action="#">
        <input class="search_input" ref="input"  
          @keypress="onKeypress" 
          placeholder="商品名称" type="search" />
    </form>

    <f7-list class="searchbar-not-found">
      <f7-list-item title="Nothing found"></f7-list-item>
    </f7-list>
    <f7-list class="searchbar-overlay">
      <f7-list-item></f7-list-item>
    </f7-list>
    <!-- Search-through list -->
    <f7-list class="searchbar-found" id="search-list">
      <f7-list-item v-for="item in items" :title="'Item ' + item" :key="item"></f7-list-item>
    </f7-list>
    <f7-block strong>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
    </f7-block>
    <f7-block-title>Navigation</f7-block-title>
    <f7-list>
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item link="/form/" title="Form"></f7-list-item>
    </f7-list>
    <f7-block-title>Modals</f7-block-title>
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
        })()
      }
    },
    methods: {
      onSearch: function (event,query, found) {
        // console.log('search', query,1,found,query.params.value);
        console.log(found)
        // if (event.keyCode == 13) { //如果按的是enter键 13是enter           
        //   event.preventDefault(); //禁止默认事件（默认是换行）           
        //   console.log(event.target.value)          
        //   // Toast("点击了确认")       
        // } 
      },
      onClear: function (event) {
        console.log('clear');
      },
      onEnable: function (event) {
        console.log('enable');
      },
      onDisable: function (event) {
        console.log('disable');
      },
      onKeypress: function (event) {
        if (event.keyCode == 13) { //如果按的是enter键 13是enter           
          event.preventDefault(); //禁止默认事件（默认是换行）           
          console.log(event.target.value)          
            // Toast("点击了确认")       
        }
      },
      onblur: function () {
        console.log(121212)
      },
    }
  }
</script>
