<template>
  <div  ref="wrapper">
    <div class="content" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  data() {
    return {
      scroll: {
        type:Object,
        default() {
          return []
        }
      },
    }
  },
  props: {
    probeType: {//用于监听滚动的位置
      type:Number,
      default: 0
      },
    pullUpLoad: {//用于监听上拉加载
      type:Boolean,
      default: false
    }
    },
  mounted() {
    //创建bscroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
      click:true
  })
    console.log(this.scroll);
    //监听滚动的位置
    this.scroll.on('scroll',(position)=>{
      // console.log(position);
      this.$emit('scroll',position)
    })
    //监听上拉加载事件
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })
  },
  methods: {
    refresh(){
      this.scroll&&this.scroll.refresh()
      // console.log('防抖中');
    }
  }
}
</script>
<style scoped>
  
</style>