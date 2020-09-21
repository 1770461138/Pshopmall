<template>
  <GridView>
    <GoodsListItem v-for="(item,index) in Ccategory_detail" :key="index" :goods_item="item"/>
  </GridView>
  
</template>
<script>
import GridView from '@/components/common/GridView/GridView'
import GoodsListItem from '@/components/content/Goods/GoodsListItem'
export default {
  name:'tabcategoryDetail',
  props: {
    Ccategory_detail: {}
  },
  components: {
    GridView,
    GoodsListItem
  },
  methods: {
    
  }
}
</script>
<style scoped>
  
</style>