<template>
<UniversitySwiper></UniversitySwiper>
</template>

<script>
/**
 *  大学书法教育
 */
import UniversitySwiper from '@/components/UniversitySwiper/index.vue'
   export default {
    components:{
      UniversitySwiper,
    },
  name: 'UniversityEducation',
  props: {
    msg: String
  }
}
</script>