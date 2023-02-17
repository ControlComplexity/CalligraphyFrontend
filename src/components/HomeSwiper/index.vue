<template>
    <swiper
      :spaceBetween="30"
      :effect="'fade'"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
    <swiper-slide v-for="(item, index) in list" :key="index">
      <!-- <slide-item :slideItem="item"></slide-item> -->
    <img :src="item.URL" />
    </swiper-slide>
    </swiper>
  </template>
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  
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
        modules: [EffectFade, Navigation, Pagination],
      };
    },
  };
  </script>
  <style scoped>
#app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

</style>