<template>
  <div id="category">
    <NavBar class="category-nav">
      <div slot="middle-nav">商品分类</div>
    </NavBar>
    <div class="category-content">
      <TabMenu :CcategoryTitles="categories" @selectItem="selectItem" />
      <!-- <div class="right"> -->
        <Scroll class="content">
          <div>
            <Subcategory :Csubcategory="Showsubcategory"/>
          <TabControl 
          :titles="['综合', '新品', '销量']" 
          @tabClick="tabClick"
          ref="tabcontrol2"/> 
          <tabcategoryDetail :Ccategory_detail="ShowcategoryDetail"/>
          </div>
        </Scroll>
        <!-- <button @click="btn">按钮</button> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar/NavBar'
import TabMenu from './categorychildcomps/TabMenu'
import Subcategory from './categorychildcomps/Subcategory'
import TabControl from '@/components/content/tabControl/TabControl'
import Scroll from '@/components/common/Scroll/Scroll'
import tabcategoryDetail from './categorychildcomps/tabcategoryDetail'
import {
  getCategory,
  getsubCategory,
  getCategoryDetail
      } from '@/network/category'

import { tabControlMixin } from '@/utils/mixin.js'
export default {
  name: 'Category',
  data() {
    return {
      categories:[],//存储左侧导航栏标题等数据
      CcurrentIndex: -1,//当前选中的标题（左侧）
      categoryData:[],//存储每个小标题里的所有数据，包括预览(28条)、流行、综合、新款
    }
  },
  components: {
    NavBar,
    TabMenu,
    Subcategory,
    TabControl,
    Scroll,
    tabcategoryDetail
  },
  mixins:[tabControlMixin],
  created() {
    this.getCategory()
  },
  mounted() {
    // console.log(typeof(this.Showsubcategory));
  },
  computed: {
    Showsubcategory() {
      if(this.CcurrentIndex === -1) return {}
      return this.categoryData[this.CcurrentIndex].subcategories
    },
    ShowcategoryDetail() {
      if(this.CcurrentIndex === -1) return {}
      return this.categoryData[this.CcurrentIndex].categoryDetail[this.HCurrentIndex]
    }
  },
  methods: {
    getCategory() {//获取左侧导航栏的数据
      getCategory().then((res)=>{
        // console.log(res);
        //获取左侧小标题数据并储存到categories中
        this.categories = res.data.category.list
        // console.log(this.categories);
        for(let i=0; i<this.categories.length; i++){
          this.categoryData[i] = {
            subcategories:[],//预览数据
            categoryDetail:{//流行、新款、综合栏目的数据 
              'pop':[],
              'sell':[],
              'new':[]
            }
          }
        }
        // console.log(this.categoryData);
        this.getsubCategory(0)
      })
      // 
    },
    getsubCategory(index) {//获取左侧导航栏每个子标题的顶部商品数据
      this.CcurrentIndex = index;//在调用this.getCategoryDetail('pop')时要用到
      const maitKey = this.categories[index].maitKey
      // console.log(this.categories[0].maitKey); 
      getsubCategory(maitKey).then(res=>{
        //获取每个小标题对应的预览数据并赋值给subcategories
        this.categoryData[index].subcategories = res.data
        this.categoryData = {...this.categoryData}
        // console.log(res);
        // console.log(this.categoryData);
        this.getCategoryDetail('pop')
        this.getCategoryDetail('sell')
        this.getCategoryDetail('new')
        
      })
    },
    getCategoryDetail(type) {//获取左侧导航栏每个子标题对应的商品数据（流行、新品、综合）
      const miniWallkey = this.categories[this.CcurrentIndex].miniWallkey;
      getCategoryDetail(miniWallkey,type).then(res=>{
        // console.log(res);
        // console.log(this.CcurrentIndex);
        this.categoryData[this.CcurrentIndex].categoryDetail[type] = res
        this.categoryData = {...this.categoryData}
        // console.log(this.categoryData[this.CcurrentIndex].categoryDetail[type]);
    })
    },
    /**
     * 事件监听相关的方法
     */
    selectItem(index) {//左侧导航栏的切换
      this.currentIndex = index
      this.getsubCategory(index)
    },
    btn() {
      console.log(this.Showsubcategory);
      console.log(this.ShowcategoryDetail);
    }
  }
}
</script>
<style scoped>
  #category {
    height: 100vh;
  }
  .category-nav {
    background: rgb(248, 99, 124);
    color: #fff;
    /* z-index: 99; */
  }
  .category-content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    display: flex;
  }
  .content {
    flex: 1;
    height: 100%;
    
  }
 
</style>