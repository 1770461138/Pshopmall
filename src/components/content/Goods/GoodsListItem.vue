<template>
  <div class="goods-item" @click="itemClick">
    <!-- <img :src="goods_item.show.img" alt=""> -->
    <!-- load事件：监听图片加载完成，解决bs无法滚动的bug：home.vue/mainjs -->
    <img :src="ShowImage" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goods_item.title}}</p>
      <span class="price">{{goods_item.price}}</span>
      <span class="collection">{{goods_item.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goods_item: {
      type:Object,
      default() {
        return []
      }
    }
  },
  methods: {
    imageLoad() {//监听图片加载完成，解决bs无法滚动的bug
      this.$bus.$emit('imageLoadItem')
    },
    itemClick() {//跳转到详情页面
      // console.log('跳转到详情页面');
      this.$router.push('/detail/'+this.goods_item.iid)
      // this.$router.push({
      //   path:'/detail',
      //   query:{
      //     id:this.goods_item.iid
      //   }
      // })
    },
  },
  computed: {
    /**
     * 因为这个组件到详情页也需要用到，但是里面的数据并没有show.img，
     * 只有image,所以搞一个计算属性来判断
     */
    ShowImage() {
      return this.goods_item.image || this.goods_item.img || this.goods_item.show.img
    }
  }
}
</script>
<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;

    width: 48%;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
    
  }
  

  .goods-info {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    font-size: 12px;
    overflow: hidden;
    text-align: center;
    
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: rgb(247, 62, 92);
    margin-right: 30px;
  }
  .goods-info img {
    
    width: 14px;
    height: 14px;
  }
  .goods-info .collection {
    /* 问题：页面出现抖动 */
    position: relative;
  }
  
  .goods-info .collection::before {
    content: '';
    position: absolute;
    left: -15px;
    top:0px;
    width: 14px;
    height: 14px;
    background:url("~@/assets/img/home/cfav.png") 0 0/14px 14px;
  }
</style>