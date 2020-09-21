<template>
  <TabBar>
    <TabBarItem link="/home">
      <img slot="item-icon" src="~@/assets/img/tabbar/home.png" alt="">
      <img slot="item-icon-active" src="~@/assets/img/tabbar/home-red.png" alt="">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem link="/category">
      <img slot="item-icon" src="~@/assets/img/tabbar/category.png" alt="">
      <img slot="item-icon-active" src="~@/assets/img/tabbar/category-red.png" alt="">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem link="/shop">
      <img slot="item-icon" src="~@/assets/img/tabbar/shop.png" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/shop-red.png" alt="">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem link="/profile">
      <img slot="item-icon" src="~@/assets/img/tabbar/profile.png" alt="">
      <img slot="item-icon-active" src="~@/assets/img/tabbar/profile-red.png" alt="">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>

import TabBar from '../../common/TabBar/TabBar'
import TabBarItem from '../../common/TabBarItem/TabBarItem'
export default {
  name: 'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  },
}
</script>
<style scoped>
  
</style>