<template>
  <f7-page>
    <div class="detail">
      <div class="top">
        <div class="nav nav_fixed">
          <f7-link back class="back lt">
            <img src="static/img/nav_back.png">
          </f7-link>
          <span class="heart_icon rt">
            <img src="static/img/btn_wishlist.png">
          </span>
          <span class="share_icon rt">
            <img src="static/img/btn_share.png">
          </span>
        </div>
        <div class="pro clear">
          <img src="static/img/detail_1.png" class="lt">
          <div class="lt">
            <p>RM:199</p>
            <div>New product name name New product name name New product name name New product name name New product name name </div>
          </div>
        </div>
      </div>
      <div class="action_icon">
        <f7-link back class="back">
          <img src="static/img/nav_back_active.png">
        </f7-link>
        <div class="share_heart">
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="detail_intro">
        <f7-swiper class="banner" pagination :params="{speed:500}">
            <!--autoplay:{delay:2000,disableOnInteraction:false},-->
            <f7-swiper-slide v-for="(item,index) in banner" :key="index"><a> <img :src="item"> </a></f7-swiper-slide>
        </f7-swiper>  
        <div class="intro">
          <div class="price clear">
            <span class="sold_price lt">RM:259</span>
            <span class="origin_price lt">RM:625</span>
            <span class="rt store">
              <span>
                <img src="static/img/star_active.png">
                <img src="static/img/star_active.png">
                <img src="static/img/star_active.png">
                <img src="static/img/star_active.png">
                <img src="static/img/star_unactive.png">
              </span>
              <span>4.0</span>  
            </span>
          </div>
          <p class="pro_name">Product nameProduct nameProduct nameProduct nameProduct nameProduct nameProduct nameProduct nameProduct nameProduct nameProduct nameProduct name</p>
          <div class="hot">
            <span>Warn Clothing</span>
            <span>style Jacket</span>
            <span>Warn Clothing</span>
            <span>style Jacket</span>
            <span>style Jacketstyle Jacketstyle Jacketstyle Jacketstyle Jacketstyle Jacketstyle Jacketstyle Jacketstyle Jacketstyle Jacket</span>
            <span>warn</span>
          </div>
        </div>
        <div class="_block guarancetee">
          <f7-swiper :params="{speed:500, slidesPerView: 2.3}">
              <f7-swiper-slide>
                <img src="static/img/icon_guarantee.png">
                <span>Genuine Guarantee</span>
              </f7-swiper-slide>
              <f7-swiper-slide>
                <img src="static/img/icon_7days.png">
                <span>7 Days Hassle Free</span>
              </f7-swiper-slide>
              <f7-swiper-slide>
                <img src="static/img/icon_delivery.png">
                <span>Cash on Delivery</span>
              </f7-swiper-slide>
              <f7-swiper-slide>
                <img src="static/img/icon_shipping.png">
                <span>Free Shipping</span>
              </f7-swiper-slide>
          </f7-swiper>  
        </div>
        <div class="_block option clear">
          <span>Available Options</span>
          <img class="rt" src="static/img/btn_more.png">
        </div>
        <div class="_block review">
          <div class="title nav_fixed clear">
            <span>Reviews</span>
            <span class="view rt">
                View More
              <img src="static/img/btn_more.png">
            </span>
          </div>
          <ul>
            <li class="nav_fixed">
              <div class="clear">
                <img class="user_avartar" src="static/img/reviews_user.png" >
                <span class="user_name">Gunsf SimonGunsf SimonGunsf Simon</span>
                <span class="star">
                  <img src="static/img/star_active.png" >
                  <img src="static/img/star_active.png" >
                  <img src="static/img/star_active.png" >
                  <img src="static/img/star_active.png" >
                  <img src="static/img/star_unactive.png" >
                </span>
                <span class="time">2018.11.16</span>
              </div>
              <p>ReviewR evie wRe vi ewRe vie wRe view R evie wReviewR eviewRe viewReviewRe vie wReviewRe viewRe viewR eviewRev  iewRevie wRevi ewRevie wR eview Revi ewReviewR eviewReview </p>
            </li>
            <li class="nav_fixed">
              <div class="clear">
                <img class="user_avartar" src="static/img/reviews_user.png" >
                <span class="user_name">Gunsf SimonGunsf SimonGunsf Simon</span>
                <span class="star">
                  <img src="static/img/star_active.png" >
                  <img src="static/img/star_active.png" >
                  <img src="static/img/star_active.png" >
                  <img src="static/img/star_active.png" >
                  <img src="static/img/star_unactive.png" >
                </span>
                <span class="time">2018.11.16</span>
              </div>
              <p>ReviewR evie wRe vi ewRe vie wRe view R evie wReviewR eviewRe viewReviewRe vie wReviewRe viewRe viewR eviewRev  iewRevie wRevi ewRevie wR eview Revi ewReviewR eviewReview </p>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </f7-page>
</template>

<script>
export default {
  data: function () {
    return {
          banner:['static/img/detail_1.png','static/img/detail_2.png'],
    }
  },
  methods: {
  },
  mounted: function () {
  }
}
</script>