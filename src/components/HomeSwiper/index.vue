<template>
    <swiper
      :spaceBetween="30"
      :effect="'fade'"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
      }"
      :modules="modules"
      class="mySwiper"
    >
    <swiper-slide v-for="(item, index) in list" :key="index">
     <div class="top_link" v-bind:style="{ 'background-image': 'url(' + item.URL + ')','background-repeat':'no-repeat','background-size':'cover' }" > 
     <div class="nav_block">
      <div class = "big_logo"><img src="../../assets/biglogo.png"></div>
      <div class="nav_main"> 
      <div class = "nav_main_link" ><a href="http://localhost:3001/children">少儿书法教育</a></div>
      <div class = "nav_main_link" ><a href="http://localhost:3001/university">大学书法教育</a></div>
      <div class = "nav_main_link" ><a href="http://localhost:3001/theory">书法教育理论</a></div>
      <div class = "nav_main_link"><a href="http://localhost:3001/tech">科技与书法</a></div>
      <div class = "nav_main_link" ><a href="http://localhost:3001/communicate">学习与交流</a></div>
    </div></div>
    </div>
    <!-- <img :src="item.URL"  /> -->
    </swiper-slide>
    </swiper>
  </template>
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Autoplay} from 'swiper';
  // Import Swiper styles
  import "swiper/css";
  
  import "swiper/css/effect-fade";
  import "swiper/css/navigation";
  import "swiper/css/pagination";

  import axios from 'axios'
  // import required modules
  import { EffectFade, Navigation, Pagination } from "swiper";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        list: [],
      }
    },
    created(){
      let that = this
         axios.get("http://101.43.39.188:10000/api/carousel/carousels")
        .then(function (response) {
          if (response.status == 200){
            console.log(response.data.data.results)
            let res =[];
            that.list = response.data.data.results
            for(var item of response.data.data.results) {
              res.push(item)
            }
            that.list = res
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  },
    setup() {
      return {
        modules: [EffectFade, Navigation, Pagination, Autoplay],
      };
    },
  };
  </script>
  <style scoped>
#app { height: 100% }
html,
body {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
  position: relative;
  height: 100%;
}
.top_link{
  width: 100%;
  height: 800px;
}
.nav_main_link{
  float: left;
  margin-left: 3%;
  color: #fff;
}
.nav_block{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: url(../../assets/head-bg.png) center repeat-x;
    background-size: 100% 100%;
}
.swiper {
  width: 100%;
  height: auto;
}
.big_logo{
  float: left;
  width: 25%;
  height: auto;
  margin-left: 5%;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  height: 700px;
}
.nav_main{
  width: 70%;
  font-family: 微软雅黑;
  font-size: 21px;
}
.swiper-slide img {
  display: block;
  width: 100%;
}

</style>