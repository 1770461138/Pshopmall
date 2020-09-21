<template>
  <Swipe class="detail-swiper" :auto="2000">
    <SwipeItem v-for="(item,index) in Dbanners_data" :key="index">
      <img :src="item" alt="">
    </SwipeItem>
  </Swipe>
</template>
<script>
import {Swipe,SwipeItem} from 'mint-ui'
import 'mint-ui/lib/style.css'
export default {
  name:'DetailSwiper',
  
  props: {
    Dbanners_data: {
      type:Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swipe,
    SwipeItem
  }
}
</script>
<style scoped>
   img{
     width:100%
   }
   .detail-swiper{
     height: 300px;
   }
</style>