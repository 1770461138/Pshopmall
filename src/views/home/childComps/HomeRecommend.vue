<template>
  <div class="recommend">
    <div v-for="item in recommends_data" class="recommend-item" :key="item.sort">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
//推荐信息的封装
export default {
  name: 'HomeRecommend',
  props: {
    recommends_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>
<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 14px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item a{
    text-decoration: none;
    color: black;
  }
  .recommend-item img{
    width:90%;
    margin-bottom: 2px;
  }
</style>