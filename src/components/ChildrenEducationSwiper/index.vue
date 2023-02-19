<template>
  <div class="root">
    <div class="points">
      <div>
        <span>校园看点</span>
        <span>大师讲座、学术论坛、文体活动、演出展览…… 清华365天精彩活动，邀您共见。</span>
        <span>查看更多</span>
      </div>
      <div class="act_block">
        <span class="prev" @click="otherPage('left')">←</span>
        <span class="next" @click="otherPage('right')">→</span>
      </div>
    </div>
    <div style="width: 100%;height: 200px;">
      <swiper
      :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
      }"
        :loop="true"
        :slidesPerView="4"
        :spaceBetween="20"
        :pagination="{
          clickable: true
        }"
        :mousewheel="true"
        :modules="modules"
        class="mySwiper"
        ref="mySwiper"
      >
        <swiper-slide v-for="(item, index) in list" :key="index">
          <div class = "big_logo"><img :src='item.URL'></div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
  // Import Swiper Vue.js components
  import {Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay} from 'swiper';
  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';

  import './style.css';

  // import required modules
  import { Pagination } from 'swiper';
  import 'video.js/dist/video-js.css'
  import axios from 'axios';
  const MySwiper = {
    data(){
      return {
      list: [],
    }
    },
    name: "MySwiper",
    components: {
      Swiper,
      SwiperSlide,
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
      const otherPage = (direction) => {
        var mySwiper = document.querySelector('.swiper').swiper
        switch(direction){
          case 'left':
            console.log('left')
            mySwiper.slidePrev()
            break
          case 'right':
            console.log('right')
            mySwiper.slideNext()
            break
          default:
            break
        }
      }
      return {
        modules: [Pagination, Autoplay],
        otherPage,
         // 视频播放器配置
      };
    },
  };
  export default MySwiper
</script>
<style >
.root{
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.points{
  height: 100px;
  width: 100%;
  margin: 15px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.act_block{
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;
}
.prev,.next{
  font-size: 25px;
  line-height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #ffffff00;
  border: .5px solid rgb(99,17,174);
  margin: 0 5px;
}
.prev:hover,.next:hover{
  cursor: pointer;
}

.swiper-pagination{
  visibility: hidden;
}
</style>