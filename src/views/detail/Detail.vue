<template>
  <div class="detail">
    <DetailNavBar class="detail-nav" @navClick="navClick" ref="nav"/>
    <Scroll class="content" ref="scroll" 
    :probeType="3" 
    :pullUpLoad="true"
    @scroll="rollscroll">
    <!-- pullUpLoad为false时会报一个错误： EventEmitter has used unknown event type: "pullingUp", should be oneof
    不影响使用 -->
    <!-- 1.轮播图 -->
      <DetailSwiper :Dbanners_data="topImages"/>
    <!-- 2.基础信息 -->
      <DetailBaseInfo :Dgoods_info="goodsInfo"/>
    <!-- 3.店铺信息 -->
      <DetailStoreInfo :Dstore_info="storeInfo"/>
    <!-- 4.评论信息 -->
      <DetailComments :Drate_info="rateInfo" ref="comments"/>
    <!-- 5.详情：穿着效果 -->
      <DetailGoodsInfo :Ddetail_info="detailInfo" @imageLoadItem="imgLoad" ref="details"/>
    <!-- 6.商品参数 -->
      <DetailGoodsParams :Dgoods_params="paramsInfo"/>
    <!-- 7.推荐信息 -->
      <GoodsList :goods_data="recommendsInfo" ref="recommend"/>
    </Scroll>
    <AddCart class="addcart-navbar" @addShopCart="addShopCart"/>
    <BackTop v-show="isShowBackTop" @click.native="backClick"/>
  </div>
</template>

<script>
import Scroll from '@/components/common/Scroll/Scroll'
import DetailNavBar from './detailchildcomps/DetailNavBar'
import DetailSwiper from './detailchildcomps/DetailSwiper'
import DetailBaseInfo from './detailchildcomps/DetailBaseInfo'
import DetailStoreInfo from './detailchildcomps/DetailStoreInfo'
import DetailGoodsInfo from './detailchildcomps/DetailGoodsInfo'
import DetailGoodsParams from './detailchildcomps/DetailGoodsParams'
import DetailComments from './detailchildcomps/DetailComments'
import AddCart from '@/components/common/Addcarttabbar/AddCart'
import GoodsList from '@/components/content/Goods/GoodsList'
import BackTop from '@/components/content/BackTop/BackTop'

import {
  getDetail,
  DetailGoodsData,
  DetailStoreData,
  GoodsParams,
  CommentsData,
  getRecommend
  } from '@/network/detail'
import {debounce} from '@/utils/debounce.js'
import {BackTopMixin} from '@/utils/mixin.js'//导入‘混入’
export default {
  //详情页组件
  name:'Detail',
  data() {
    return {
      iid:null,//商品的id
      topImages:[],//详情页顶部轮播图数据
      goodsInfo:{},//存储详情页的各项商品信息
      storeInfo:{},//店铺信息
      detailInfo:{},//特定商品的详细信息，包括穿着效果
      paramsInfo:{},//商品的参数信息
      rateInfo:{},//评价信息
      recommendsInfo:[],//推荐数据
      imageListener:null,//存储全局监听函数
      themeTopY:[0,1000,2000,3000],//存储顶部导航栏各主题的位置高度y
      
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailStoreInfo,
    Scroll,
    DetailGoodsInfo,
    DetailGoodsParams,
    DetailComments,
    AddCart,
    GoodsList,
    BackTop
  },
  mixins:[BackTopMixin],//使用混入可以来避免代码的重复性
  created() {
    this.iid = this.$route.params.id
    // console.log(this.iid);
    this.getDetail()
    this.getRecommend()
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,20)
    this.imageListener = ()=>{
      refresh()
    }
    this.$bus.$on('imageLoadItem',this.imageListener)
  },
  destroyed() {//销毁时取消全局监听事件
    this.$bus.$off('imageLoadItem',this.imageListener)
  },
  updated() {//获取各主题的高度并赋值
    //因为刷新比较频繁，所以themetopy会不断被赋值，直到全部
    //图片都加载完成后，themetopy才能拿到最终的准确值，可以用防抖函数进行包装优化
    this.themeTopY = []
    this.themeTopY.push(0)
    this.themeTopY.push(this.$refs.comments.$el.offsetTop)
    this.themeTopY.push(this.$refs.details.$el.offsetTop)
    this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
    // console.log(this.themeTopY);
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    imgLoad() {//监听图片加载，加载完成后即刷新一次页面
      this.$refs.scroll.scroll.refresh()
    },
    navClick(index) {//顶部导航栏点击监听事件
      this.IndexNum = index
      this.$refs.scroll.scroll.scrollTo(0,-this.themeTopY[index])
    },
    rollscroll(position) {//联动效果，通过判断滑动的位置，让顶部导航栏显示高亮
      //保存滚动事件的y值
      const positionY = -position.y
      let length = this.themeTopY.length
      //滚动的位置和主题的位置进行比较，从而改变顶部导航栏的index值，从而显示高亮
      for(let i = 0; i < length; i++) {
        if((i<length-1 && positionY>this.themeTopY[i] && positionY<this.themeTopY[i+1])||(i===length-1 && positionY>this.themeTopY[i])) {
            // console.log(i);
            this.$refs.nav.currentIndex = i
        } 
      }
      //判断是否显示返回顶部组件
      this.isShowBackTop = (-position.y)>1000
    },
    addShopCart() {//监听加入购物车
      //获取需要在购物车里展示的信息
      const product_data = {}
      product_data.image = this.topImages[0]
      product_data.title = this.goodsInfo.title
      product_data.desc = this.goodsInfo.desc
      product_data.price = this.goodsInfo.realPrice
      product_data.id = this.iid
      
      console.log(product_data);
      // this.$store.commit('addCart',product_data)
      this.$store.dispatch('addCart',product_data)
    },
    /**
     * 网络请求相关的方法
     */
    getDetail() {//获取详情页各项数据
      getDetail(this.iid).then((res)=>{
        const data = res.result
        // console.log(res);
        //1.获取顶部轮播图数据
        this.topImages = data.itemInfo.topImages
        //2.获取商品的各项信息，包括价格、销量、商家信息等等，后续就可以直接通过goods.item等获取相应的信息
        this.goodsInfo = new DetailGoodsData(data.itemInfo,data.columns,data.shopInfo.services)
        // console.log(this.goodsInfo);
        //3.获取店铺信息
        this.storeInfo = new DetailStoreData(data.shopInfo)
        // console.log(this.storeInfo);
        //4.获取商品详细信息，包括穿着效果数据等
        this.detailInfo = data.detailInfo
        // console.log(this.detailInfo);
        //5.获取商品的参数信息
        this.paramsInfo = new GoodsParams(data.itemParams.info,data.itemParams.rule)
        // console.log(this.paramsInfo);
        //6.获取评价信息
        this.rateInfo = new CommentsData(data.rate)
        // console.log(this.rateInfo);
      })
    },
    getRecommend(){//获取详情页推荐的数据
      getRecommend().then((res)=>{
        // console.log(res);
        //1.获取推荐数据
        this.recommendsInfo = res.data.list
        // console.log(this.recommendsInfo);
      })
    }
  }
}
</script>
<style scoped>
  #detail{
    height: 100vh;
    position: relative;
    background: white;
    z-index: 111;
  }
  /* .detail-nav { */
    /* 顶部导航栏样式 */
  /* } */
  .content {
    height: calc(100%-93px);
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: 111;
}
  .addcart-navbar {
    
    z-index: 120;
    
  }
</style>