<template>
   <div class="home5">
 <!-- <TopHyperlink></TopHyperlink> -->
 <HomeSwiper></HomeSwiper>

<div>
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

<div class="news_block">
  <div class = "title">书法教育 · 要闻</div>
  <div class="content clearfix">

    <div class="list">
          <div class="ptbox">
            <div class="inner">
            <div class="pic"> 
              <div class="img" style="background-image:url(https://news.pku.edu.cn/esdzt/images/2022-12/ed9ad90437674658ad25941be829ade1.jpeg);">
              </div>
            </div>
            <div class="text">
            <a target="_blank" href="https://news.pku.edu.cn/esdzt/">
                  <div style="font-size: 18px;">党建活动网站</div>
                </a>
            </div>
          </div></div> 
        <div class="box">
          <div class="item">
            <a target="_blank" href="https://news.pku.edu.cn/xwzh/fabef6fd1e9b4f82b8026ea061160485.htm">
              <div class="text">
                <div class="h">文化情缘|温故知新</div>
              </div>
          </a>
          </div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
        </div>
</div>
</div>
 <SearchResult  v-show="dialog_visible" 
      :dialog_visible="dialog_visible">
    </SearchResult>
 <Hyperlink></Hyperlink>     
 <Footer></Footer>   
</div>
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

<style>
.news_block{
  margin-top: 3%;
  margin-bottom: 3%;

}
.list{
  display: flex;
  justify-content: space-between;
}
.list .ptbox {
    width: calc(50% - 10px);
    position: relative;
}
.content {
    margin-top: 45px;
}
.ptbox .inner {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
}
.ptbox .text {
    position: absolute;
    left: 0;
    bottom: -1px;
    right: 0;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.9));
    color: #fff;
}
.ptbox .img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 0.3s ease-out 0s;
}

 .text .h {
    font-size: 16px;
    line-height: 1.5;
}
.ptbox .pic {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
a{
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  }

  .list .box {
    width: calc(50% - 10px);
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.list .item{
    background-size: contain;
    position: absolute;
  
    background: #fff;
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
    width: calc(50% - 10px);
    cursor: pointer;
    position: relative;
    border-bottom: 4px solid #94070a;
}
.home5 .list .item .text {
    padding: 40px 30px;
    position: relative;
}
.home5 .list .item:nth-child(1):before {
    content: "";
    background: url(../assets/svg/bg9a.svg) right bottom no-repeat;
    background-size: contain;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
.home5 {
    padding: calc(5vw + 95px) 0 5vw;
    background: #efebea;
}

</style>