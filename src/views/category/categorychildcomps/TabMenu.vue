<template>
  <div id="tab-menu">
    <scroll class="content" ref="scroll" 
    :probeType="1" 
    :pullUpLoad="true">
     <div
        class="menu-list-item"
        v-for="(item,index) in CcategoryTitles"
        :key="index"
        :class="{active: index===currentIndex}"
        @click="itemClick(index)"
        >
        {{item.title}}
        </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/common/Scroll/Scroll'
export default {
  name:'TabMenu',
  data() {
    return{
      currentIndex: 0
    }
  },
  props: {
    CcategoryTitles: {
      type:Array,
      default() {
        return []
      }
    }
  },
  components: {
    Scroll
  },
  mounted(){
    // console.log('加载了');
    this.$refs.scroll.scroll.refresh()
  },
  methods: { 
    itemClick(index) {
      this.currentIndex = index
      this.$emit('selectItem',index)
    },
    
  }
}
</script>
<style scoped>
  #tab-menu {
    background-color: #f6f6f6;
    box-sizing: border-box;
    height: 100%;
    width: 100px;
    position: relative;
  }
  .content {
    height: 100%;
    /* height: calc(100% - 93px);
    position: absolute;
    top: 0px;
    bottom: 49px;
    left: 0;
    right: 0; */
    overflow: hidden;
  }
  
  .menu-list-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }
  .menu-list-item.active {
    background-color: white;
    color: red;
    border-left: 3px solid red;
  }
</style>