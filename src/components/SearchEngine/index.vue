<template><div>
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

</div></div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            keyword: "",
        }
    },
    methods:{
        search(){
            let that = this
            console.log(that.keyword)
                axios.get("/interface/api/theory/theory?title=" + that.keyword).
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
                 }
                }).
                catch(function (error) {
                console.log(error);
            });
            }
        }
}
</script>
