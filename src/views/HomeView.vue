<template>
 <TopHyperlink></TopHyperlink>
 <HomeSwiper></HomeSwiper>
 <SearchEngine></SearchEngine>
 <Hyperlink></Hyperlink>     
 <Footer></Footer>   
</template>

<script>
import axios from 'axios'
import Hyperlink from '@/components/Hyperlink.vue'
import TopHyperlink from '@/components/TopHyperlink.vue'
import Footer from '@/components/Footer.vue'
import HomeSwiper from '@/components/HomeSwiper/index.vue'
import SearchEngine from '@/components/SearchEngine/index.vue'

export default {
  components: {
    Hyperlink,
    Footer,
    TopHyperlink,
    HomeSwiper,
    SearchEngine,
  },
  name: 'HomeView',
}

</script>
