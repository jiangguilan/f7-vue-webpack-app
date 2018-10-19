<template>
  <f7-page>
    <f7-navbar title="details" back-link="Back"></f7-navbar>
    <f7-block-title>details My App</f7-block-title>
    <f7-block strong>
      <p id="title">Here is details page!</p>
      <p>You can go <f7-link back>back</f7-link>.</p>
      <p>Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst.</p>
      <p>Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi. Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.</p>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  data: function () {
    return {

    }
  },
  methods: {
    
    isEmptyObject:function (e) {
      var t;
      for (t in e)
        return !1;
      return !0
    }
  },
  mounted: function () {
    var $$=this.Dom7;
    // $$("#home-searchbar").css("display","none")
    // $$("#category-searchbar").css("display","none")
    console.log(this.$f7route,this.$f7route.params)
    
    console.log(this.isEmptyObject(this.$f7route.params));
    
    if(this.isEmptyObject(this.$f7route.params)){
      // 地址栏有参数，页面从分享链接进来 http://localhost:8080/details?products=P001200&user=1
      // console.log(this.Dom7.parseUrlQuery('http://google.com/?id=5&foo=bar'))
      console.log(window.location.search)//"?products=P001200&user=1"
      // this.$f7.$$.get('https://cod.api.dev.bz-bss.com/products/productsList',function(data){
      //   console.log(11,data)
      // })
    }
    else{
      // 地址栏没有参数 http://localhost:8080 数据从this.$f7route.params拿
      console.log(this.$f7route.params)
    }
  }
}
</script>