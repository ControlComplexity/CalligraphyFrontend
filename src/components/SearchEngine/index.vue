<template><div>
<div id="app">
    <input type="text" v-model="city" @keyup.enter="getWeather">
    <button @click="getWeather">点击查询</button>
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

export default {
    data(){
        return{
            city: "",
        }
    },
    methods:{
        getWeather(){
     console.log(this.city)
            }
        }
}
</script>
