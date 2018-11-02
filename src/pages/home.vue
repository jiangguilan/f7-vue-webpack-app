<template>
  <f7-page name="home">
    <div class="search_box">
      <div @click="triger_search" class="search">
        <div>
          <img src="static/img/search.png">
          <input v-model="hs_text" @focus="hs_focus" @blur="hs_blur" type="text" placeholder="What do you like?">  
        </div>
        <img v-show="hs_isFocus" @click="del_hs_text" class="hs_del_text" src="static/img/login_del.png" alt="">
      </div>
      <span class="hs_cancle">Cancle</span>  
    </div>
    <f7-toolbar labels>
      <f7-link href="/" icon-f7="home" text="Home"></f7-link>
      <f7-link href="/category" icon-f7="data" text="Category"></f7-link>
      <f7-link href="/explore" icon-f7="compass" text="Explore"></f7-link>
      <f7-link href="/cart" icon-f7="bag" text="Cart"></f7-link>
      <f7-link href="/account" icon-f7="person" text="Account"></f7-link>
    </f7-toolbar>
    <!--search history-->
    <div class="search_history">
      <div class="s_hot">
        <p>
          <img src="static/img/hot_sale.png" alt="">
          Hot Sale
        </p>
        <div>
          <span>shoes</span>
          <span>wowen underwear only $89</span>
          <span>fashion</span>
          <span>shoes</span>
          <span>wowen underwear only $89</span>
          <span>fashion</span>
        </div>
      </div>
      <div class="s_mark">
        <p class="clear">
          <img src="static/img/clock.png" alt="">
          Hot Sale
          <img class="rt" src="static/img/del_history.png" alt="">
        </p>
        <div>
          <span>shoes</span>
          <span>wowen underwear only $89</span>
          <span>fashion</span>
        </div>
      </div>
    </div>
  </f7-page>
</template>
<script>
export default {
    data: function () {
      return {
        hs_isFocus:false,
        hs_text:'',
      }
    },
    methods: {
      triger_search:function(){
        $('.search input').focus()
      },
      hs_focus:function(){
        $('.search').addClass('active')
        $('.hs_cancle').addClass('active')
        if(!$('.search input').hasClass('focus')){
          $('.search input').addClass('focus')
        }
        this.hs_isFocus=true;
      },
      hs_blur:function(){
        $('.search').removeClass('active')
        $('.hs_cancle').removeClass('active')
        if(this.hs_text==''){
          this.hs_isFocus=false
          $('.search input').removeClass('focus')
        }else{
          this.hs_isFocus=true
          if(!$('.search input').hasClass('focus')){
            $('.search input').addClass('focus')
          }
        }
      },
      del_hs_text:function(){
        this.hs_text=''
      },
    },
    mounted: function () {
      $("#home-searchbar").css("display","block")
      $("#category-searchbar").css("display","none")
    },
    watch: {
    },
  }
</script>
