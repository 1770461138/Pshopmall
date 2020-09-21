<template>
  <Swipe class="home-swiper" :auto="2000">
    <SwipeItem v-for="item in banners_data" :key="item.background">
        <img :src="item.image" alt="" class="img" @load="swiperImgLoad">
    </SwipeItem>
  </Swipe>
</template>

<script>
//轮播图的封装
import {Swipe, SwipeItem} from 'mint-ui'
import 'mint-ui/lib/style.css'
// import {Swiper,SwiperItem} from '@/components/common/Swiper'

export default {
  name: 'HomeSwiper',
  props: {
    banners_data:{
      type:Array,
      default() {
        return []
          }
        }
    },
  data(){
    return{
      imgisLoad: false
    }
  },
  components:{
    Swipe,
    SwipeItem
    // Swiper,
    // SwiperItem
  },
  methods: {
    swiperImgLoad() {//监听图片加载完成
      if(!this.imgisLoad){
        this.$emit('swiperImgLoad')
        this.imgisLoad = true
      }
    }
  }
}
</script>
<style scoped>
  img {
 width: 100%;
 }
 .mint-swipe {
 height: 195px;
 }
</style>