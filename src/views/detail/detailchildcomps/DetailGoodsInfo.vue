<template>
  <div class="detail-goods" v-if="Object.keys(Ddetail_info).length !== 0">
    <div class="info-key">宝贝详情</div>
    <div class="info-list">
      <img 
        v-for="(item,index) in Ddetail_info.detailImage[0].list"
        :key="index"
        :src="item" alt=""
        @load="imgLoad"
      >
    </div>
  </div>
</template>
<script>
//商品的详细信息
export default {
  name:'DetailGoodsInfo',
  data() {
    return{
      // couter:0,
      // imageLength:0
    }
  },
  props: {
    Ddetail_info: {
      type: Object,
      default() {
        return{}
      }
    }
  },
  methods: {
    imgLoad() {//监听图片加载，全部加载完后，进行一次回调就可以了，没有必要加载一张就回调一次
    /**
     * 这里有一个问题if的：要是等所有图片都加载完成了再进行回调的话，用户在刚进入详情页时可能会短暂
     * 的屏幕滚动不了，因为需要等所有图片加载结束才回调刷新
     */
      // if(++this.couter === this.imageLength){
      //   this.$emit('imageLoadItem')
      // }
      this.$emit('imageLoadItem')
    }
  },
  // watch: {
  //   Ddetail_info() {//监听Ddetail_info
  //     this.imageLength = this.Ddetail_info.detailImage[0].list.length
  //     // console.log(this.imageLength);
  //   }
  // }
}
</script>
<style scoped>
  .detail-goods {
    background: white;
  }
  .info-list img{
    width: 100%;
  }
  .info-key {
    font-size: 14px;
    width:100%;
    height:50px;
    line-height:50px;
    text-align:center;
    position:relative;
    background: rgb(236, 234, 234);
    border-bottom: 3px solid white;
  }
  .info-key::after, .info-key::before{
    position: absolute;
    width:30px;
    height:1px;
    background:rgb(192, 190, 190);
    content:'';
    top:25px;
  }
    .info-key::after{
      
      right: 100px;
  } 
    .info-key::before{
      left: 100px;
      
  }
  .info-list {
    border-bottom: 5px solid rgb(235, 231, 231);
  }
</style>