<template>
  <div class="shop-goodslistitem">
    <div class="item-selector" @click="changeCheck">
      <CheckButton :isChecked="SProduct_info.checked" />
    </div>
    <div class="item-img">
      <img :src="SProduct_info.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-info-title">{{SProduct_info.title}}</div>
      <div class="item-info-desc">{{SProduct_info.desc}}</div>
      <div>
        <div class="item-price">￥{{SProduct_info.price}}</div>
        <div class="item-count">x{{SProduct_info.count}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import CheckButton from '@/components/content/CheckButton/CheckButton'
export default {
  name:'ShopGoodsListItem',
  data() {
    return{}
  },
  props: {
    SProduct_info: {
      type:Object,
      default() {
        return {}
      }
    },
    },
  components: {
    CheckButton
  },
  created() {
    // console.log(this.SProduct_info);
  },
  methods: {
    changeCheck() {//改变商品的选中状态
      this.SProduct_info.checked = !this.SProduct_info.checked
      // console.log(this.SProduct_info.checked);
    }
  }
}
</script>
<style scoped>
  .shop-goodslistitem {
    width: 375px;
    height: 120px;
    padding: 5px;
    display: flex;
    border-bottom: 1px solid #ccc;
  }
  .item-selector {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .item-img {
    padding: 5px;
  }
  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }
  .item-info {
    overflow: hidden;
    padding-right: 20px;
    position: relative;
  }
  .item-info-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 5px;
    font-size: 16px;
  }
  .item-info-desc {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 10px;
    font-size: 14px;
  }
  .item-price {
    color: orangered;
    position: absolute;
    bottom: 5px;
    left: 10px;
  }
  .item-count {
    position: absolute;
    bottom: 5px;
    right: 30px;
  }
</style>