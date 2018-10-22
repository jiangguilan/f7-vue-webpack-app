<template>
  <f7-page name="account">
    <f7-navbar title="Account" back-link="Back"></f7-navbar>
    <!--<f7-block-title>About My App</f7-block-title>-->
    <f7-block strong no-hairlines>
      <img src="static/img/detail-2.jpg" alt="">
    </f7-block>
    <f7-block >
      <f7-swiper class="account-cate" next-button prev-button :params="{slidesPerView: 5, spaceBetween: 20}">
        <f7-swiper-slide><img src="static/img/detail-5.jpg" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="static/img/detail-2.jpg" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="static/img/detail-3.jpg" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="static/img/detail-4.jpg" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="static/img/detail-5.jpg" alt=""></f7-swiper-slide>
        <f7-swiper-slide><img src="static/img/detail-6.jpg" alt=""></f7-swiper-slide>
      </f7-swiper>
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

  },
  mounted: function () {
    var $$=this.Dom7;
    $$("#home-searchbar").css("display","none")
    $$("#category-searchbar").css("display","none")
  } 

}
</script>