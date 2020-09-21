<template>
  <div class="goods">
      <GoodsListItem 
        v-for="(item,index) in goods_data" 
        :key="index"
        :goods_item="item"
        />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  props: {
    goods_data: {
      type:Array,
      default() {
        return[]
      }
    }
  },
  components: {
    GoodsListItem
  },
  
  
}
</script>
<style>
  
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>