<template>
 <!-- <TopHyperlink></TopHyperlink> -->
 <HomeSwiper></HomeSwiper>
 <div>
<div id="app">
    <input type="text" v-model="keyword" @keyup.enter="search">
    <button @click="search">点击查询</button>
</div>
<div>
 <div>
高频搜索内容 
<a href="https://www.baidu.com">天下十大行书</a>&nbsp;
<a href="https://www.baidu.com">王羲之</a>&nbsp;
<a href="https://www.baidu.com">颜真卿</a>&nbsp;
<a href="https://www.baidu.com">启功</a>&nbsp;
<a href="https://www.baidu.com">欧阳询</a>
</div>
</div>
</div>
 <SearchResult  v-show="dialog_visible" 
      :dialog_visible="dialog_visible"
      >
    </SearchResult>
 <Hyperlink></Hyperlink>     
 <Footer></Footer>   
</template>

<script>
import Hyperlink from '@/components/Hyperlink.vue'
import TopHyperlink from '@/components/TopHyperlink.vue'
import Footer from '@/components/Footer.vue'
import HomeSwiper from '@/components/HomeSwiper/index.vue'
import SearchEngine from '@/components/SearchEngine/index.vue'
import SearchResult from '@/components/SearchResult/index.vue'
import axios from 'axios'
export default {
  components: {
    Hyperlink,
    Footer,
    TopHyperlink,
    HomeSwiper,
    SearchEngine,
    SearchResult
  },
  name: 'HomeView',
  methods:{
   
    search(){
            let that = this
            console.log(that.keyword)
                axios.get("http://101.43.39.188:10000/api/theory/theory?title=" + that.keyword).
                then(function(response){
                    if (response.status == 200){
                        console.log(response.data.data.results)
                        let res =[];
                        for(var item of response.data.data.results) {
                        res.push(item)
                        }
                        that.list = res
                        that.total = response.data.data.page.total
                        console.log("that.total: ", that.total)
                        that.dialog_visible = true;
                 }
                }).
                catch(function (error) {
                console.log(error);
            });
            }
  },
  data() {
    return {
      // 控制子组件显示与隐藏的标识，类型为Boolean
      dialog_visible: false,
      keyword: "",
    }
  },
}

</script>
