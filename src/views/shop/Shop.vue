<template>
  <div id="shop">
    <NavBar class="shop-nav">
      <div slot="middle-nav">购物车({{$store.getters.getGoodsNum}})</div>
    </NavBar>
    <Scroll 
    class="content" ref="scroll" 
    :probeType="3" 
    :pullUpLoad="true">
      <ShopGoodsListItem v-for="(item,index) in getCartList" :key="index" :SProduct_info="item"/>
    </Scroll>
    <ShopButtonBar class="buttonbar"/>
  </div>
</template>
<script>
import NavBar from '@/components/common/NavBar/NavBar'
import Scroll from '@/components/common/Scroll/Scroll'
import ShopGoodsListItem from './shopchildcomps/ShopGoodsListItem'
import ShopButtonBar from './shopchildcomps/ShopButtonBar'

import { mapGetters } from 'vuex'
export default {
  name:'Shop',
  data() {
    return{}
  },
  components: {
    NavBar,
    Scroll,
    ShopButtonBar,
    ShopGoodsListItem
  },
  computed: {//mapGetters是vuex提高的方法，可以将getters里的方法映射到computed中
    ...mapGetters(['getCartList'])
  },
  activated() {
    this.$refs.scroll.scroll.refresh()
  },
}
</script>
<style scoped>
  #shop {
    height: 100vh;
  }
  .shop-nav {
    background: rgb(248, 99, 124);
    color: #fff;
  }
  .buttonbar {
    z-index: 999;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 49px;
  }
  .content {
    height: calc(100% - 135px);
    position: absolute;
    top: 44px;
    bottom: 89px;
    left: 0;
    right: 0;
    overflow: hidden;
    }
</style>