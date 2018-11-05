<template>
  <f7-page name="home">
    <div class="search_box hs">
      <div class="search"> 
        <a href="/search">
          <div>
            <img src="static/img/search.png">
            <input type="text" placeholder="What do you like?">  
          </div>
        </a>
      </div> 
    </div>
    <!--<div v-show="hs_history_show" @click="show_history" class="search_history clear">
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
    </div>-->
    <div class="content">
      <f7-swiper class="banner" pagination :params="{speed:500}">
        <!--autoplay:{delay:2000,disableOnInteraction:false},-->
        <f7-swiper-slide><a href="/details"> <img src="static/img/detail_1.png" alt=""> </a></f7-swiper-slide>
        <f7-swiper-slide><a href="/details"> <img src="static/img/detail_2.png" alt=""> </a></f7-swiper-slide>
        <f7-swiper-slide><a> <img src="static/img/detail_3.png" alt=""> </a></f7-swiper-slide>
        <f7-swiper-slide><a> <img src="static/img/detail_1.png" alt=""> </a></f7-swiper-slide>
        <f7-swiper-slide><a> <img src="static/img/detail_2.png" alt=""> </a></f7-swiper-slide>
        <f7-swiper-slide><a> <img src="static/img/detail_3.png" alt=""> </a></f7-swiper-slide>
      </f7-swiper>  
      <div class="home_nav">
        <div>
          <div>
            <a href="#"><img src="static/img/nav_hotsale.png" alt=""></a>
            <p>Hot sale</p>
          </div>
          <div>
            <a href="#"><img src="static/img/nav_clearance.png" alt=""></a>
            <p>Clearance</p>
          </div>
          <div>
            <a href="#"><img src="static/img/nav_freeshipping.png" alt=""></a>
            <p>Free shipping</p>
          </div>
          <div>
            <a href="#"><img src="static/img/nav_recommend.png" alt=""></a>
            <p>Recommend</p>
          </div>
        </div>
        <div>
          <div>
            <a href="#"><img src="static/img/nav_freegift.png" alt=""></a>
            <p>Free gift</p>
          </div>
          <div>
            <a href="#"><img src="static/img/nav_topup.png" alt=""></a>
            <p>Top up</p>
          </div>
          <div>
            <a href="#"><img src="static/img/nav_newproduct.png" alt=""></a>
            <p>New varieties</p>
          </div>
          <div>
            <a href="#"><img src="static/img/nav_collocation.png" alt=""></a>
            <p>Collocation</p>
          </div>  
        </div>
        
      </div>
      <div class="_block home_discount">
        <a href="#">
          <img src="static/img/nav_banner.png" alt="">
        </a>
      </div>
      <div class="home_flash _block">
        <div class="flash_title clear">
          <span class="title_tip">FLASH SALE</span>
          <span class="flash_time">
            <span>02</span> :
            <span>30</span> :
            <span>50</span> .
            <span>5</span>
          </span>
          <span class="flash_more rt">Shop more 
            <img src="static/img/btn_more.png" alt="">
          </span>
        </div>
        <f7-swiper class="flash_banner" :params="{speed:500,slidesPerView:3.5, spaceBetween: 24}">
          <f7-swiper-slide>
            <div class="flash_item">
              <a href="/details"> 
                  <img src="static/img/detail_1.png">
                  <div class="item_itro">
                    <p>2018 new bag new bag new bag</p>
                    <div class="flash_price clear">
                      <span class="sold_price lt">
                        <span>RM</span><span>199</span>
                      </span>
                      <span class="origin_price rt">
                        RM299
                      </span>
                    </div>
                    <div class="flash_progress clear">
                      <span class="progress_box lt">
                        <span></span>
                      </span>
                      <span class="_sold rt">Sold</span>
                    </div>
                  </div>
              </a>
            </div>
          </f7-swiper-slide>
          <f7-swiper-slide>
            <div class="flash_item">
              <a href="/details"> 
                  <img src="static/img/detail_1.png">
                  <div class="item_itro">
                    <p>2018 new bag new bag new bag</p>
                    <div class="flash_price clear">
                      <span class="sold_price lt">
                        <span>RM</span><span>199</span>
                      </span>
                      <span class="origin_price rt">
                        RM299
                      </span>
                    </div>
                    <div class="flash_progress clear">
                      <span class="progress_box lt">
                        <span></span>
                      </span>
                      <span class="_sold rt">Sold</span>
                    </div>
                  </div>
              </a>
            </div>
          </f7-swiper-slide>
          <f7-swiper-slide>
            <div class="flash_item">
              <a href="/details"> 
                  <img src="static/img/detail_1.png">
                  <div class="item_itro">
                    <p>2018 new bag new bag new bag</p>
                    <div class="flash_price clear">
                      <span class="sold_price lt">
                        <span>RM</span><span>199</span>
                      </span>
                      <span class="origin_price rt">
                        RM299
                      </span>
                    </div>
                    <div class="flash_progress clear">
                      <span class="progress_box lt">
                        <span></span>
                      </span>
                      <span class="_sold rt">Sold</span>
                    </div>
                  </div>
              </a>
            </div>
          </f7-swiper-slide>
          <f7-swiper-slide>
            <div class="flash_item">
              <a href="/details"> 
                  <img src="static/img/detail_1.png">
                  <div class="item_itro">
                    <p>2018 new bag new bag new bag</p>
                    <div class="flash_price clear">
                      <span class="sold_price lt">
                        <span>RM</span><span>199</span>
                      </span>
                      <span class="origin_price rt">
                        RM299
                      </span>
                    </div>
                    <div class="flash_progress clear">
                      <span class="progress_box lt">
                        <span></span>
                      </span>
                      <span class="_sold rt">Sold</span>
                    </div>
                  </div>
              </a>
            </div>
          </f7-swiper-slide>
          <f7-swiper-slide>
            <div class="flash_item">
              <a href="/details"> 
                  <img src="static/img/detail_1.png">
                  <div class="item_itro">
                    <p>2018 new bag new bag new bag</p>
                    <div class="flash_price clear">
                      <span class="sold_price lt">
                        <span>RM</span><span>199</span>
                      </span>
                      <span class="origin_price rt">
                        RM299
                      </span>
                    </div>
                    <div class="flash_progress clear">
                      <span class="progress_box lt">
                        <span></span>
                      </span>
                      <span class="_sold rt">Sold</span>
                    </div>
                  </div>
              </a>
            </div>
          </f7-swiper-slide>
        </f7-swiper>
      </div>
      <div class="_block first home_product">
        <div class="title">
          <div>
            WOMEM
          </div>
          <p>The signal of heartbeat hegins here.</p>
        </div>
        <div class="banner_img">
          <a href="#">
            <img src="static/img/detail_3.png">
          </a>
        </div>
        <f7-swiper class="product_banner" next-button prev-button :params="{speed:500, slidesPerView: 2.7, spaceBetween: 20}">
          <f7-swiper-slide>
            <div class="container">
              <div class="pro_img">
                <img src="static/img/women_product.png">
              </div>
              <div class="pro_intro clear">
                <div class="price">
                  <span class="sold_price">
                    <span>RM</span>
                    <span>: 199</span>
                  </span>                    
                  <span class="origin_price">RM:284</span>
                </div>
                <p class="pro_title">Your have your style style style style</p>
                <div class="good_star">
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
            </div>
          </f7-swiper-slide>
          <f7-swiper-slide>
            <div class="container">
              <div class="pro_img">
                <img src="static/img/women_product.png">
              </div>
              <div class="pro_intro clear">
                <div class="price">
                  <span class="sold_price">
                    <span>RM</span>
                    <span>: 199</span>
                  </span>                    
                  <span class="origin_price">RM:284</span>
                </div>
                <p class="pro_title">Your have your style style style style</p>
                <div class="good_star">
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
            </div>
          </f7-swiper-slide>
          <f7-swiper-slide>
            <div class="container">
              <div class="pro_img">
                <img src="static/img/women_product.png">
              </div>
              <div class="pro_intro clear">
                <div class="price">
                  <span class="sold_price">
                    <span>RM</span>
                    <span>: 199</span>
                  </span>                    
                  <span class="origin_price">RM:284</span>
                </div>
                <p class="pro_title">Your have your style style style style</p>
                <div class="good_star">
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
            </div>
          </f7-swiper-slide>
          <f7-swiper-slide>
            <div class="container">
              <div class="pro_img">
                <img src="static/img/women_product.png">
              </div>
              <div class="pro_intro clear">
                <div class="price">
                  <span class="sold_price">
                    <span>RM</span>
                    <span>: 199</span>
                  </span>                    
                  <span class="origin_price">RM:284</span>
                </div>
                <p class="pro_title">Your have your style style style style</p>
                <div class="good_star">
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
            </div>
          </f7-swiper-slide>
        </f7-swiper>
      </div>
      
      <div class="_block second home_product">
        <div class="title">
          <div>
            MEM
          </div>
          <p>The signal of heartbeat hegins here.</p>
        </div>
        <div class="banner_img">
          <a href="#">
            <img src="static/img/detail_3.png">
          </a>
        </div>
        <f7-swiper class="product_banner" next-button prev-button :params="{speed:500, slidesPerView: 2.7, spaceBetween: 20}">
          <f7-swiper-slide>
            <div class="container">
              <div class="pro_img">
                <img src="static/img/women_product.png">
              </div>
              <div class="pro_intro clear">
                <div class="price">
                  <span class="sold_price">
                    <span>RM</span>
                    <span>: 199</span>
                  </span>                    
                  <span class="origin_price">RM:284</span>
                </div>
                <p class="pro_title">Your have your style style style style</p>
                <div class="good_star">
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
            </div>
          </f7-swiper-slide>
          <f7-swiper-slide>
            <div class="container">
              <div class="pro_img">
                <img src="static/img/women_product.png">
              </div>
              <div class="pro_intro clear">
                <div class="price">
                  <span class="sold_price">
                    <span>RM</span>
                    <span>: 199</span>
                  </span>                    
                  <span class="origin_price">RM:284</span>
                </div>
                <p class="pro_title">Your have your style style style style</p>
                <div class="good_star">
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
            </div>
          </f7-swiper-slide>
          <f7-swiper-slide>
            <div class="container">
              <div class="pro_img">
                <img src="static/img/women_product.png">
              </div>
              <div class="pro_intro clear">
                <div class="price">
                  <span class="sold_price">
                    <span>RM</span>
                    <span>: 199</span>
                  </span>                    
                  <span class="origin_price">RM:284</span>
                </div>
                <p class="pro_title">Your have your style style style style</p>
                <div class="good_star">
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
            </div>
          </f7-swiper-slide>
          <f7-swiper-slide>
            <div class="container">
              <div class="pro_img">
                <img src="static/img/women_product.png">
              </div>
              <div class="pro_intro clear">
                <div class="price">
                  <span class="sold_price">
                    <span>RM</span>
                    <span>: 199</span>
                  </span>                    
                  <span class="origin_price">RM:284</span>
                </div>
                <p class="pro_title">Your have your style style style style</p>
                <div class="good_star">
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
            </div>
          </f7-swiper-slide>
        </f7-swiper>
      </div>

      <div class="_block third home_product">
        <div class="title">
          <div>
            Shoes
          </div>
          <p>The signal of heartbeat hegins here.</p>
        </div>
        <div class="banner_img">
          <a href="#">
            <img src="static/img/detail_3.png">
          </a>
        </div>
        <f7-swiper class="product_banner" next-button prev-button :params="{speed:500, slidesPerView: 2.7, spaceBetween: 20}">
          <f7-swiper-slide>
            <div class="container">
              <div class="pro_img">
                <img src="static/img/women_product.png">
              </div>
              <div class="pro_intro clear">
                <div class="price">
                  <span class="sold_price">
                    <span>RM</span>
                    <span>: 199</span>
                  </span>                    
                  <span class="origin_price">RM:284</span>
                </div>
                <p class="pro_title">Your have your style style style style</p>
                <div class="good_star">
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
            </div>
          </f7-swiper-slide>
          <f7-swiper-slide>
            <div class="container">
              <div class="pro_img">
                <img src="static/img/women_product.png">
              </div>
              <div class="pro_intro clear">
                <div class="price">
                  <span class="sold_price">
                    <span>RM</span>
                    <span>: 199</span>
                  </span>                    
                  <span class="origin_price">RM:284</span>
                </div>
                <p class="pro_title">Your have your style style style style</p>
                <div class="good_star">
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
            </div>
          </f7-swiper-slide>
          <f7-swiper-slide>
            <div class="container">
              <div class="pro_img">
                <img src="static/img/women_product.png">
              </div>
              <div class="pro_intro clear">
                <div class="price">
                  <span class="sold_price">
                    <span>RM</span>
                    <span>: 199</span>
                  </span>                    
                  <span class="origin_price">RM:284</span>
                </div>
                <p class="pro_title">Your have your style style style style</p>
                <div class="good_star">
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
            </div>
          </f7-swiper-slide>
          <f7-swiper-slide>
            <div class="container">
              <div class="pro_img">
                <img src="static/img/women_product.png">
              </div>
              <div class="pro_intro clear">
                <div class="price">
                  <span class="sold_price">
                    <span>RM</span>
                    <span>: 199</span>
                  </span>                    
                  <span class="origin_price">RM:284</span>
                </div>
                <p class="pro_title">Your have your style style style style</p>
                <div class="good_star">
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
            </div>
          </f7-swiper-slide>
        </f7-swiper>
      </div>

      <div class="_block home_recommend">
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

      <div class="bottom">
        <a href="/home">
          <div class="bottom_item active">
              <div>
                <img src="static/img/bottom_home_active.png">
              </div>
              <span>Home</span>
          </div>
        </a>
        <a href="/category">
          <div class="bottom_item">
              <div>
                <img src="static/img/bottom_categories_unactive.png">
              </div>
              <span>categories</span>
          </div>
        </a>
        <a href="/cart">
          <div class="bottom_item">
              <div>
                <img src="static/img/bottom_cart_unactive.png">
              </div>
              <span>Cart</span>
          </div>
        </a>
        <a href="/account">
          <div class="bottom_item">
              <div>
                <img src="static/img/bottom_account_unactive.png">
              </div>
              <span>Account</span>
          </div>
        </a>
      </div>

    </div>
  </f7-page>
</template>
<script>
export default {
    data: function () {
      return {
        // hs_isFocus:false,
        // hs_text:'',
        // hs_history_show:false,
        // history:{'hot_sale':['shoes','wowen underwear only $89','fashion','shoes','wowen underwear only $89','fashion',],'history':['shoes1','wowen underwear only $892','fashion3',]},
      }
    },
    methods: {
      // triger_search:function(){
      //   $('.search input').focus()
      // },
      // hs_focus:function(){
      //   $('.search').addClass('active')
      //   $('.hs_cancle').addClass('active')
      //   if(!$('.search input').hasClass('focus')){
      //     $('.search input').addClass('focus')
      //   }
      //   this.hs_isFocus=true;
      //   this.hs_history_show=true;
      //   // $('.search_history').fadeIn(300,'linear')
      // },
      // hs_blur:function(){
      //   $('.search').removeClass('active')
      //   $('.hs_cancle').removeClass('active')
      //   if(this.hs_text==''){
      //     this.hs_isFocus=false
      //     this.hs_history_show=false;
      //     // $('.search_history').fadeOut(300,'linear')
      //     $('.search input').removeClass('focus')
      //   }else{
      //     this.hs_isFocus=true
      //     this.hs_history_show=true
      //     // $('.search_history').fadeIn(300,'linear')
      //     if(!$('.search input').hasClass('focus')){
      //       $('.search input').addClass('focus')
      //     }
      //   }
      // },
      // del_hs_text:function(){
      //   this.hs_text=''
      // },
      // show_history:function(){
      //   $('.search input').focus()
      //   // $('.search_history').fadeIn(1,'linear')
      // },
      // choose_tip:function(e){
      //   this.hs_text=this.history.hot_sale[e]
      // },
      // choose_his:function(e){
      //   this.hs_text=this.history.history[e]
      // },
      // cancle_search:function(){
      //   this.hs_text=""
      //   $('.search input').blur()
      //   this.hs_history_show=false
      //   // $('.search_history').fadeOut(300,'linear')
      // },
    },
    mounted: function () {
      // $("#home-searchbar").css("display","block")
      // $("#category-searchbar").css("display","none")
      // $('.search_history').click(function(){
      //   console.log(12121)
      //   $('.search input').focus()
      // })
    },
    watch: {
    },
  }
</script>
