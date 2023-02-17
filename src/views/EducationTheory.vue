<template>
  <div class="root"  style="float: left">
    <div style="float: left ">
    <div class="theory">           
      <div :style="{height:item.Image.length==0?'70px':'110px'}" v-for="item in list">
        <div class="image" :style="{backgroundImage:`url(${item.Image})`,width:item.Image.length==0?'60px':'30%'}"  @click="theoryDetail(item)">
          <div class="time" :style="{bottom:item.Image.length==0?'0':'10px',background:item.Image.length==0?'#fff':'rgba(186, 154, 5, 0.8)',color:item.Image.length==0?'#791cb5':'#fff'}">
            <span style="font-size: 17px;font-weight: bold;">13</span>
            <span style="font-size: 14px;">2023.2</span>
          </div>
        </div>
        <div class="desc_block" :style="{width:item.Image.length==0?'80%':'60%'}">
          <span class="title" @click="theoryDetail(item)">{{item.Title}}</span>
          <div class="abstract">
            <span>{{ item.Abstract }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <Pagi :total="total" ></Pagi>
    </div></div>
  </div>
  <div class="artists">书法教育理论
      汉代
      唐
      宋
      清
      近现代
      当代
      更多
    </div>
</template>

<script>
import Pagi from '@/components/Pagination.vue'
   export default {
    components:{
      Pagi
    },
  name: 'EducationTheory',
  data(){
    return {
      list: [],
      total: 0,
      pagination:{}
    }
  },
  methods: {
    /**
     * 跳转到书法理论界面
     * @param {理论文章编号} id 
     */
    theoryDetail(id) {
      this.$router.push({
        name: 'theoryDetail',
        params: {
          id: id.ID
        }
      })
    },
    async getPageList(){
      let res = await this.$axios({
        url:'/interface/api/theory/theory',
        method:'get',
        params:this.pagination
      })
      if (res.status == 200){
        this.list = []
        console.log(res.data.data.results)
        for(let item of res.data.data.results) {
          this.list.push(item)
        }
        this.total = res.data.data.page.total
      }
        
    }
  },
  created(){
      let that = this
         this.$axios.get("http://101.43.39.188:10000/api/theory/theory?limit=10&page=1")
        .then(function (response) {
          if (response.status == 200){
            console.log(response.data.data.results)
            let res =[];
            // that.list = response.data.data.results
            for(var item of response.data.data.results) {
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
  },
}
</script>

<style>
  .root{
    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .pagination{
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 10px 0;
  }
  .theory{
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .theory .image{
    width: 30%;
    height: 100%;
    /* background-repeat: no-repeat; */
    background-position: center;
    background-size: 100%;
    position: relative;
    transition: background-size ease-in .5s;
  }
  .theory .image:hover{
    cursor:pointer;
    background-size: 120%;
  }
  .theory>div{
    display:flex;
    align-items: center;
    width: 80%;
    height: 110px; 
    margin: 10px;
    overflow: hidden;
    padding-bottom: 10px;
    border-bottom: 1px solid #dcdcdc;
  }
  .image .time{
    background-color: rgba(186, 154, 5, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 53px;
    height: 53px;
    position: absolute;
    left: 10px;
    bottom: 10px;
    color: #eee;
  }
  .desc_block{
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }
  .desc_block .title{
    margin-bottom: 5px;
    font-size: 13.5px;
    font-weight: bold;
    color: rgb(33, 33, 33);
    font-family: "SourceSansPro-Regular", "微软雅黑";
  }
  .desc_block .title:hover{
    cursor:pointer;
    text-decoration: underline;
  }
  .abstract > span{
    display: inline-block;
    width: 100%;
    height: 50px;
    line-height: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 12.5px;
    text-align: left;
    color: #767676;
  }
</style>