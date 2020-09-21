<template>
  <div>
    <GridView :cols="3" :lineSpace="15" :v-margin="20"> 
      <div class="item" v-for="(item,index) in Csubcategory.list" :key="index">
        <img class="item-img" :src="item.image" alt="">
        <div class="item-text">{{item.title}}</div>
      </div>
    </GridView>
  </div>
</template>
<script>
import GridView from '@/components/common/GridView/GridView'
export default {
  name:'Subcategory',
  data() {
    return{}
  },
  props: {
    Csubcategory: {}
  },
  components: {
    GridView
  },
  mounted() {
    // console.log(this.Csubcategory);
  },
  methods: {
    
  }
}
</script>
<style scoped>
  .item {
    text-align: center;
    font-size: 12px;
  }

  .item-img {
    width: 80%;
  }

  .item-text {
    margin-top: 10px;
  }
</style>