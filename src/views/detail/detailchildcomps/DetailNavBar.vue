<template>
    <NavBar>
      <div slot="left-nav" @click="backClick" class="icon-left">
        <img src="~@/assets/img/detail/返回.png" alt="">
      </div>
      <div slot="middle-nav" class="title">
        <div 
          v-for="(item,index) in titles" 
          :key="index"
          class="title-item"
          :class="{active: index === currentIndex}"
          @click="titleClick(index)"
          >{{item}}</div>
      </div>
    </NavBar>
  
</template>
<script>
import NavBar from '@/components/common/NavBar/NavBar'
export default {
  name:'DetailNavBar',
  data() {
    return {
      titles:['宝贝','评论','详情','推荐'],
      currentIndex: 0,
    }
  },
  components: {
    NavBar
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
      this.$emit('navClick',index)
    },
    backClick() {
      this.$router.push('/home')
    }
  }
}
</script>
<style scoped>
   .icon-left img{
     margin-top: 7px;
   }
   .title {
     display: flex;
   }
   .title-item {
     color: black;
     flex: 1;
   }
   .active {
     color: red;
   }
</style>