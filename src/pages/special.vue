<template>
  <f7-page name="special">
      <div class="search_box hs">
          <f7-link class="back lt" back></f7-link>
          <div class="search flash lt"> 
            <a href="/search">
                <div>
                    <img src="static/img/search.png">
                    <input type="text" placeholder="What do you like?">  
                </div>
            </a>
          </div> 
      </div>
      <div class="content flash special">
        <f7-swiper class="banner" pagination :params="{speed:500}">
            <!--autoplay:{delay:2000,disableOnInteraction:false},-->
            <f7-swiper-slide v-for="(item,index) in banner" :key="index"><a> <img src="static/img/detail_1.png" alt=""> </a></f7-swiper-slide>
        </f7-swiper>  
        <div class="title">
            <div>Flower fade,but you are beautiful .</div>
            <p>The signal of heartbeat begins here .</p>
        </div>
        <div class="_block flash_product special home_recommend">
            <div class="title clear">
                <span class="lt">Price</span>
                <div class="lt select">
                    <span></span>
                    <span></span>
                </div>
                <span class="rt">Popularity</span>
            </div>
            
            <ul>
            <li>
                <div class="re_img">
                <img src="static/img/women_product.png">
                </div>
                <div class="re_intro">
                <div class="price">
                    <span class="sold_price">
                    <span>RM</span>
                    <span>: 199</span>
                    </span>
                    <span class="origin_price">
                    RM:284
                    </span>
                </div>
                <p class="re_title">
                    Forever 21 Bag for you you oyu oyuyuyoyo 
                </p>
                <div class="re_star">
                    <div>
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_unactive.png">                                    
                    </div>
                    <span>4.0</span>
                </div>
                </div>
            <li>
            <li>
                <div class="re_img">
                <img src="static/img/women_product.png">
                </div>
                <div class="re_intro">
                <div class="price">
                    <span class="sold_price">
                    <span>RM</span>
                    <span>: 199</span>
                    </span>
                    <span class="origin_price">
                    RM:284
                    </span>
                </div>
                <p class="re_title">
                    Forever 21 Bag for you you oyu oyuyuyoyo 
                </p>
                <div class="re_star">
                    <div>
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_unactive.png">                                    
                    </div>
                    <span>4.0</span>
                </div>
                </div>
            </li>
            <li>
                <div class="re_img">
                <img src="static/img/women_product.png">
                </div>
                <div class="re_intro">
                <div class="price">
                    <span class="sold_price">
                    <span>RM</span>
                    <span>: 199</span>
                    </span>
                    <span class="origin_price">
                    RM:284
                    </span>
                </div>
                <p class="re_title">
                    Forever 21 Bag for you you oyu oyuyuyoyo 
                </p>
                <div class="re_star">
                    <div>
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_unactive.png">                                    
                    </div>
                    <span>4.0</span>
                </div>
                </div>
            </li>
            <li>
                <div class="re_img">
                <img src="static/img/women_product.png">
                </div>
                <div class="re_intro">
                <div class="price">
                    <span class="sold_price">
                    <span>RM</span>
                    <span>: 199</span>
                    </span>
                    <span class="origin_price">
                    RM:284
                    </span>
                </div>
                <p class="re_title">
                    Forever 21 Bag for you you oyu oyuyuyoyo 
                </p>
                <div class="re_star">
                    <div>
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_unactive.png">                                    
                    </div>
                    <span>4.0</span>
                </div>
                </div>
            </li>
            <li>
                <div class="re_img">
                <img src="static/img/women_product.png">
                </div>
                <div class="re_intro">
                <div class="price">
                    <span class="sold_price">
                    <span>RM</span>
                    <span>: 199</span>
                    </span>
                    <span class="origin_price">
                    RM:284
                    </span>
                </div>
                <p class="re_title">
                    Forever 21 Bag for you you oyu oyuyuyoyo 
                </p>
                <div class="re_star">
                    <div>
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_unactive.png">                                    
                    </div>
                    <span>4.0</span>
                </div>
                </div>
            </li>
            <li>
                <div class="re_img">
                <img src="static/img/women_product.png">
                </div>
                <div class="re_intro">
                <div class="price">
                    <span class="sold_price">
                    <span>RM</span>
                    <span>: 199</span>
                    </span>
                    <span class="origin_price">
                    RM:284
                    </span>
                </div>
                <p class="re_title">
                    Forever 21 Bag for you you oyu oyuyuyoyo 
                </p>
                <div class="re_star">
                    <div>
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_active.png">
                    <img src="static/img/star_unactive.png">                                    
                    </div>
                    <span>4.0</span>
                </div>
                </div>
            </li>
            </ul>
        </div>

      </div>
  </f7-page>
</template>

<script>
export default {
  props:{
  },
  data(){
      return {
          banner:['static/img/detail_1.png'],
      }
  },
  methods:{
  },
  created(){
  },
  mounted: function () {
      if(this.banner.length<=1){
          console.log(1)
          $('.swiper-container-horizontal > .swiper-pagination-bullets').css('display','none')
      }else if(this.banner.length>1){
          $('.swiper-container-horizontal > .swiper-pagination-bullets').css('display','block')
      }
  }
}
</script>