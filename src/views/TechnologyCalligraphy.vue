<template>
  <div class="tab-container" id="tabContainer">
    <TopBackground :page='page'></TopBackground>

    <div class="video_tech_block">
      <video style="width: 100%; clip-path: inset(15% 0); height: 100%; object-fit: fill" controls loop="loop"
        preload="metadata" poster="http://101.43.39.188/image/calligraphy/carousel/carousel3.jpg">
        <source src="https://v.cic.tsinghua.edu.cn/vod/video/2/8/421731.mp4" type="video/mp4">
      </video>
    </div>
    <!-- <div class="tab-item" v-for="(item, index) in list" :key="index">
      <img :src="item.Image" />
    </div> -->
    <div style="width: 100%;height: 200px;">
      <swiper :loop="true" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }" :slidesPerView="4" :spaceBetween="20" :pagination="{
  clickable: true
}" :mousewheel="true" :modules="modules" class="mySwiper" ref="mySwiper">
        <swiper-slide v-for="(item, index) in list" :key="index">
          <div><img :src='item.Image'></div>
        </swiper-slide>
      </swiper>
    </div>

  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios'
import TopBackground from '@/components/TopBackground/index.vue'
export default {
  components: {
    TopBackground,
    Pagination, 
    Autoplay,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      page: 'technology',
      list: [],
    };
  },
  created() {
    let that = this
    axios.get("/interface/api/tech/tech")
      .then(function (response) {
        if (response.status == 200) {
          console.log(response.data.data.results)
          let res = [];
          // that.list = response.data.data.results
          for (var item of response.data.data.results) {
            res.push(item)
          }
          that.list = res
          that.total = response.data.data.page.total
          console.log("that.total: ", that.total)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
</script>



<style>
#app {
    height: 100%;
  }
  html,
  body {
    position: relative;
    height: 100%;
  }
  
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
  }
  
  .swiper {
    width: 100%;
    height: 60%;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
  
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
</style>