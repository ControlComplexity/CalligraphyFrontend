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
        :loop="true"
        :slidesPerView="3"
        :spaceBetween="30"
        :pagination="{
          clickable: true
        }"
        :mousewheel="true"
        :modules="modules"
        class="mySwiper"
        ref="mySwiper"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';

  import './style.css';

  // import required modules
  import { Pagination } from 'swiper';
  import 'video.js/dist/video-js.css'
  const MySwiper = {
    name: "MySwiper",
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const otherPage = (direction) => {
        var mySwiper = document.querySelector('.swiper').swiper
        switch(direction){
          case 'left':
            mySwiper.slideNext()
            break
          case 'right':
            mySwiper.slideNext()
            break
          default:
            break
        }
      }
      return {
        modules: [Pagination],
        otherPage,
         // 视频播放器配置
      };
    },
  };
  export default MySwiper
</script>
<style scoped>
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

.swiper-pagination{
  visibility: hidden;
}
</style>