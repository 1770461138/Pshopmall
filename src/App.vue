<template>
  <div id="app">
    <MainTabBar class="maintabbar"/>
    <keep-alive exclude="Detail,Shop,Profile,Category">
      <router-view/>
    </keep-alive>
    
  </div>
</template>
<script>
import MainTabBar from './components/content/MainTabBar/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>
<style>
  @import './assets/css/base.css';
  .maintabbar{
    z-index: 99;
  }
</style>
