<template>
  <div id="home" class="wrapper">
    <NavBar class="home-nav">
      <div slot="middle-nav">购物街</div>
    </NavBar>
        <!-- 因为单纯给class添加fixed无法满足吸顶的需求 -->
        <TabControl 
            :titles="['流行','新款','精选']" 
            class="fixed"
            @tabClick="tabClick"
            ref="tabcontrol1"
            v-show="tabcontrol_isShow"
          />
    <Scroll 
      class="content" 
      ref="scroll"
      :probeType="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <HomeSwiper :banners_data="banners" @swiperImgLoad="swiperImgLoad"/>
      <HomeRecommend :recommends_data="recommends"/>
      <HomeFeature/> 
      <TabControl 
        :titles="['流行','新款','精选']" 
        @tabClick="tabClick"
        ref="tabcontrol2"
      />
      <GoodsList :goods_data="showGoods"/>
    </Scroll>
    <BackTop @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar/NavBar'
import TabControl from '@/components/content/tabControl/TabControl'

import Scroll from '@/components/common/Scroll/Scroll'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import HomeFeature from './childComps/HomeFeature'
import GoodsList from '@/components/content/Goods/GoodsList'
import BackTop from '@/components/content/BackTop/BackTop'


import {getHomeMultidata, getHomeGoods} from '@/network/home'
import {debounce} from '@/utils/debounce.js'
export default {
  name: 'Home',
  data() {
    return {
      banners: [],//轮播图数据
      recommends: [],//今日推荐数据
      goods: {//商品数据：流行、新款、精选
        'pop':{page: 0 ,list: [],},//流行数据
        'new':{page: 0 ,list: [],},//新款数据
        'sell':{page: 0 ,list: [],},//精选数据
      },
      HCurrentIndex: 'pop',//home中当前的index，用于切换tabcontrol的数据
      isShowBackTop: false,//用于控制是否显示BackTop
      tabcontrol_OffsetTop: 0,//用于保存tabcontrol所处的位置高度
      tabcontrol_isShow: false,//用于控制tabcontrol是否要吸顶固定
      imageListener:null
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    this.getHomeMultidata()     //调取函数一

    this.getHomeGoods('pop')    //调取函数二：流行的数据
    this.getHomeGoods('new')    //调取函数二：新款的数据
    this.getHomeGoods('sell')   //调取函数二：精选的数据

  },
  mounted() {
      // 1.监听图片加载完成，解决bs无法滚动的bug
      // this.$bus.$on('imageLoadItem',()=>{
      //   this.$refs.scroll.scroll.refresh()
        // 如果没有防抖函数，需要刷新30次
      // })
      // 2.利用防抖函数
        const refresh = debounce(this.$refs.scroll.refresh,20)
        this.imageListener = ()=>{
          refresh()
        }
        this.$bus.$on('imageLoadItem',this.imageListener)
  },
  deactivated() {//离开时取消全局监听事件
    this.$bus.$off('imageLoadItem',this.imageListener)
  },
  computed: {
    showGoods() {//显示商品
      return this.goods[this.HCurrentIndex].list
     }
  },
  methods: {
    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {//1.请求轮播图和推荐的数据
      getHomeMultidata().then((res)=>{
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {//2.请求商品的数据
      let page = this.goods[type].page + 1
      getHomeGoods(type,page).then((res)=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page = res.data.page
        //调用完成上拉加载
        this.$refs.scroll.scroll.finishPullUp()
        // console.log(res);
        // console.log(this.goods[type]);
        /* ‘...’解析语法:对数组进行解析，避免将请求到的数据作为一个整体
                        塞到goods[type]中，就会出现数组中含有数组的情况
                        也可以用for循环来进行赋值
               */  
        // for(let n of res.data.list){//1.用for循环给goods赋值
        //   this.goods[type].list.push(n)
        // }
      })
    },
    /**
     * 事件监听相关的方法
     */
    tabClick(index){//接收从tabcontrol传过来的index，从而对流行、新款、精选之间的数据切换显示
        switch (index) {
          case 0:
            this.HCurrentIndex = 'pop'
            break;
          case 1:
            this.HCurrentIndex = 'new'
            break;
          case 2:
            this.HCurrentIndex = 'sell'
            break;
          default:
            break;
        }
        this.$refs.tabcontrol1.currentIndex = index,
        this.$refs.tabcontrol2.currentIndex = index
      },
    backClick() {//触发回到顶部
      this.$refs.scroll.scroll.scrollTo(0,0)
    },
    contentScroll(position){
      //1.判断是否显示backtop图标，高于1000时才显示
      this.isShowBackTop = (-position.y)>1000
      
      //2.决定tabcontrol是否要吸顶（定位position:fixed）
      this.tabcontrol_isShow = (-position.y)>this.tabcontrol_OffsetTop
    },
    loadMore() {//出发上拉加载更多数据
      this.getHomeGoods(this.HCurrentIndex)
      //利用refresh函数修复betterscroll无法滚动的bug
      // this.$refs.scroll.scroll.refresh()
    },
    swiperImgLoad() {//轮播图加载完成后，获取tabcontrol所处位置的高度
      // console.log(this.$refs.tabcontrol.$el.offsetTop);
      this.tabcontrol_OffsetTop = this.$refs.tabcontrol2.$el.offsetTop
    }
  }
}
</script>
<style scoped>
  #home {
    /* margin-top: 44px; */
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background: rgb(248, 99, 124);
    color: #fff;
    /* 使用浏览器原生滚动时生效
    position: fixed;
    right: 0;
    left: 0;
    top: 0; */
    z-index: 9;
  }
  /* .tabcontrol {
    position: sticky;
    top: 44px;
    z-index: 9;
  } */
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    height: calc(100%-93px);
    /* height: 5000px;
    margin-top: 44px; */
  }
  .fixed {
    position: relative;
    z-index: 90;
  }
  
</style>