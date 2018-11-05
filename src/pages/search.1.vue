<template>
  <f7-page>
    <div class="search_box">
      <div @click="triger_search" class="search">
        <div>
          <img src="static/img/search.png">
          <input v-model="hs_text" @focus="hs_focus" @blur="hs_blur" type="text" placeholder="What do you like?">  
        </div>
        <img v-show="hs_isFocus" @click="del_hs_text" class="hs_del_text" src="static/img/login_del.png">
      </div>
      <span @click="cancle_search" class="hs_cancle">Cancle</span>  
    </div>
    <div v-show="hs_history_show" @click="show_history" class="search_history clear">
      <div class="s_hot">
        <p>
          <img src="static/img/hot_sale.png">
          Hot sale
        </p>
        <div>
          <span v-for="(item,index) in history.hot_sale" :key="index" @click="choose_tip(index)" :data-id="index">{{item}}</span>
        </div>
      </div>
      <div class="s_hot">
        <p>
          <img src="static/img/clock.png">
          Search History
          <img class="rt" src="static/img/del_history.png" alt="">
        </p>
        <div>
          <span v-for="(item,index) in history.history" :key="index" @click="choose_his(index)" :data-id="index">{{item}}</span>
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
        hs_history_show:false,
        history:{'hot_sale':['shoes','wowen underwear only $89','fashion','shoes','wowen underwear only $89','fashion',],'history':['shoes1','wowen underwear only $892','fashion3',]},
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
        this.hs_history_show=true;
        // $('.search_history').fadeIn(300,'linear')
      },
      hs_blur:function(){
        $('.search').removeClass('active')
        $('.hs_cancle').removeClass('active')
        if(this.hs_text==''){
          this.hs_isFocus=false
          this.hs_history_show=false;
          // $('.search_history').fadeOut(300,'linear')
          $('.search input').removeClass('focus')
        }else{
          this.hs_isFocus=true
          this.hs_history_show=true
          // $('.search_history').fadeIn(300,'linear')
          if(!$('.search input').hasClass('focus')){
            $('.search input').addClass('focus')
          }
        }
      },
      del_hs_text:function(){
        this.hs_text=''
      },
      show_history:function(){
        $('.search input').focus()
        // $('.search_history').fadeIn(1,'linear')
      },
      choose_tip:function(e){
        this.hs_text=this.history.hot_sale[e]
      },
      choose_his:function(e){
        this.hs_text=this.history.history[e]
      },
      cancle_search:function(){
        this.hs_text=""
        $('.search input').blur()
        this.hs_history_show=false
        // $('.search_history').fadeOut(300,'linear')
      },
    },
    mounted: function () {
      $('.search_history').click(function(){
        console.log(12121)
        $('.search input').focus()
      })
    },
  }
</script>