<template>
<MySwiper></MySwiper>
</template>

<script>
import MySwiper from '@/components/mySwiper/index.vue'
export default{
    setup(){
        return{
            modules: [MySwiper],
        }
    }
}
</script>