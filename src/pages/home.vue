<template>
  <f7-page toolbar-through>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <!--<f7-nav-title>My App</f7-nav-title>-->
      <form id="home-searchbar" class="searchbar searchbar-enabled"  @submit.prevent action="#">
        <div class="searchbar-inner">
          <div class="searchbar-input-wrap">
            <input class="search_input" ref="input"  
              @focus="onFocus"
              @blur="onBlur"
              @keypress="onKeypress" 
              placeholder="商品名称" type="search" />
            <i class="searchbar-icon"></i>
            <span @click="delText" class="input-clear-button"></span>
          </div>
          <span class="searchbar-disable-button" @click="delInput">Cancel</span>
        </div>
      </form>
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <!--遮罩层-->
    <div class="searchbar-backdrop"></div>

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
    ></f7-searchbar>

    <!--<form class="searchbar searchbar-enabled" cancel-link="Cancel" search-list="#search-list">
      <div class="searchbar-inner">
        <div class="searchbar-input-wrap">
          <input placeholder="Search in items" type="search" class="input-with-value">
          <i class="searchbar-icon"></i>
          <span class="input-clear-button"></span>
        </div>
        <span class="searchbar-disable-button" style="margin-right: 0px;">Cancel</span>
      </div>
    </form>-->
    <!-- Will be visible if there is no any results found, defined by "searchbar-not-found" class -->
    <f7-list class="searchbar-not-found">
      <f7-list-item title="Nothing found"></f7-list-item>
    </f7-list>

    <!-- Search-through list -->
    <f7-list class="searchbar-found" id="search-list">
      <f7-list-item v-for="(item,index) in items" :title="'Item ' + item" :key="index"></f7-list-item>
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
      <f7-list-item link="/login-test-lang/" title="/login-test-lang/"></f7-list-item>
    </f7-list>
    <f7-block>
      <h1>{{$t("login.title")}}</h1>
      <p>{{$t("login.username")}}</p>
      <p>{{$t("login.password")}}</p>
      <p>{{$t("login.login")}}</p>
      <p>{{$t("login.language")}}</p>
      <button @click="langToggle">en/zh</button>
      <f7-list >
        <f7-list-item radio name="task" value="1" title="English" checked ></f7-list-item>
        <f7-list-item radio name="task" value="2" title="中文" ></f7-list-item>
        <f7-list-item radio name="task" value="3" title="عربي" ></f7-list-item>
      </f7-list>
      <div>
        <p v-for="(item,index) in list" :key="index">
          <input type="radio" name="test" :value="item.value" :checked="item.isCheck" @change="changeInput(index)">{{item.name}}
        </p>
        <!--<button @click="test">获取选中的值</button>-->
      </div>  
    </f7-block>
    <div class="list">
      <ul>
        <li class="" v-for="(item,index) in list" :key="index">
          <label class="item-content item-radio">
            <input name="task" type="radio" :value="item.value" :checked="item.isCheck" @change="changeInput(index)">
            <i class="icon icon-radio"></i>
            <div class="item-inner">
              <div class="item-title">{{item.name}}</div>
            </div>
          </label>
        </li>
      </ul>
    </div>
  </f7-page>
</template>
<script>
export default {
    data: function () {
      return {
        picked: '',
        list:[{value:1,isCheck:false,name:'English'},{value:2,isCheck:false,name:'中文'},{value:3,isCheck:false,name:'عربي'}],
        items: (function () {
          var it = [];
          for (var i = 0; i < 100; i++) it.push(i+1);
          return it;
        })(),
      }
    },
    methods: {
      onSearch: function (query, found) {
        console.log('search', query);
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
        if (event.keyCode == 13) {           
          event.preventDefault();         
          console.log(event.target.value) 
        }
      },
      delText: function () {
        var $$=this.Dom7;
        $$(".search_input").focus()

      },
      onFocus: function () {
        var $$=this.Dom7;
        $$(".searchbar-backdrop").addClass("searchbar-backdrop-in")
        $$(".searchbar-disable-button").addClass("searchbar-disable-button-in")
        $$(".searchbar-disable-button").removeClass("searchbar-disable-button-out")
      },
      onBlur: function () {
        var $$=this.Dom7;
        $$(".searchbar-backdrop").removeClass("searchbar-backdrop-in")
        $$(".searchbar-disable-button").addClass("searchbar-disable-button-out")
        $$(".searchbar-disable-button").removeClass("searchbar-disable-button-in")
      },
      delInput: function () {
        $$(".search_input").val("")
      },
      langToggle(){
          if(this.$i18n.locale = 'zh_CN'){
            console.log(1)
            this.$i18n.locale = 'Arab_A';
          }else if(this.$i18n.locale = 'en_US'){
            console.log(2)
            this.$i18n.locale = 'zh_CN';
          }else if(this.$i18n.locale = 'Arab_A'){
            console.log(3)
            this.$i18n.locale = 'en_US';
          }
      },
      changeLang: function () {
        console.log(this.picked)
      },
      changeInput: function (index){
        console.log(index)
        if(index == 0){
          this.$i18n.locale = 'en_US';
        }
        else if(index == 1){
          this.$i18n.locale = 'zh_CN';
        }
        else if(index == 2){
          this.$i18n.locale = 'Arab_A';
        }
        this.list.map((v,i)=>{ 
          if(i==index){
            v.isCheck = true
          }else{
            v.isCheck = false
          }
        })
      },
      // test: function (){
      //   this.list.map((v,i)=>{
      //     if(v.isCheck){
      //       console.log('被选中的值为:'+v.value)
      //     }
      //   })
      // }
    },
    mounted: function () {
      var $$=this.Dom7;
      $$("#category-searchbar").css("display","none")
      // console.log(this.picked)
    },
    watch: {
      picked: function (newVal,oldVal) {
        console.log(newVal,oldVal)
      }
    },
  }
</script>
