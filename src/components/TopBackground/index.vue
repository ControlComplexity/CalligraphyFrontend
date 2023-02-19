<template>
    <div class="root">
        <img class="image" v-show="currentImage" :style="{backgroundImage:`url(${currentImage?.src})`}">
    </div>
</template>
   
<script>
    import { computed,getCurrentInstance,reactive,onBeforeUpdate,onUpdated,toRefs,watch} from 'vue'
    import { useRoute,useRouter,onBeforeRouteUpdate } from 'vue-router'
    
    export default {
        props:{
            page:{
                type:String,
                default(){
                    return 'none'
                }
            }
        },
        setup() {
            const { proxy } = getCurrentInstance()
            const router = useRouter()
            const route = useRoute()
            const state = reactive({
                imageList:[
                    {
                        page:'children_education',
                        src:'src/assets/children/children_top.jpeg'
                    },
                    {
                        page:'university_education',
                        src:'src/assets/university/university_top.jpg'
                    },
                    {
                        page:'technology',
                        src:'src/assets/technology/technology_top.jpeg'
                    },
                    {
                        page:'theory',
                        src:'src/assets/theory/theory_top.jpeg'
                    },
                    {
                        page:'communicate',
                        src:'src/assets/communicate/communicate_top.jpg'
                    }
                ],
                currentImage:{}
            })
            watch(()=> proxy.page,(nval,oval)=>{
                console.log(nval,'值發生變化')
                state.imageList.forEach(v => {
                    if(v.page == proxy.page) state.currentImage = v
                })
            },{
                immediate:true, //立即執行
                deep:true //深度監聽
            })
            
            return {
            ...toRefs(state),
            }
        }
    }
</script>

<style scoped>
    .root{
        width: 100vw;
        height: 500px;
    }
    .image{
        width: 100vw;
        height: 500px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;
    }
</style>