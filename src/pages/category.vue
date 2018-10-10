<template>
  <f7-page no-tabbar>
    <f7-navbar back-link="Back">
      <form id="category-searchbar" class="searchbar searchbar-enabled"  @submit.prevent action="#">
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
        
      </form>
    </f7-navbar>
    <!--<f7-block-title>About My App</f7-block-title>-->
    
    <f7-block strong>
      <p>Here is About page!</p>
      <p>You can go <f7-link back>back</f7-link>.</p>
      <p>Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst.</p>
      <p>Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi. Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.</p>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
      onKeypress: function (event) {
        if (event.keyCode == 13) { //如果按的是enter键 13是enter           
          event.preventDefault(); //禁止默认事件（默认是换行）           
          console.log(event.target.value)          
            // Toast("点击了确认")       
        }
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
  },
  mounted: function () {
    var $$=this.Dom7;
    $$("#home-searchbar").css("display","none")
  },
}
</script>