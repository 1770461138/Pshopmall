<template>
  <div class="addcart-nav">
    <div class="addcart-left">
      <div class="store">
        <img src="~@/assets/img/addcart/store.png" alt="">
        <div>店铺</div>
      </div>
      <div class="customer-service">
        <img src="~@/assets/img/addcart/customerS.png" alt="">
        <div>客服</div>
      </div>
      <div class="cfav">
        <img src="~@/assets/img/addcart/cfav.png" alt="">
        <div>收藏</div>
      </div>
    </div>
    <div class="addcart-right">
      <div class="addcart-right-cart" @click="addto_shopcart"><span>加入购物车</span></div>
      <div class="addcart-right-buy"><span>立即购买</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name:'',
  data() {
    return{}
 },
  methods: {
    addto_shopcart() {
      // console.log('加入购物车');
      this.$emit('addShopCart')
    }
  }
}
</script>
<style scoped>
  .addcart-nav {
    display: flex;
    background: white;
    height: 49px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    padding-top: 5px;
    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
  }
  .addcart-left {
    display: flex;
    width: 40%;
    text-align: center;
    font-size: 12px;
  }
  .addcart-left img {
    padding-bottom: 3px;
  }
  .store  {
    flex: 1;
  }
  .customer-service {
    flex: 1;
  }
  .cfav {
    flex: 1;
  }
  .addcart-right {
    text-align: center;
    display: flex;
    width: 60%;
    font-size: 18px;
    height: 39px;
    color: white;
  }
  .addcart-right-cart {
    flex: 1;
    background: rgb(255, 195, 66);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding-top: 10px;
  }
  .addcart-right-buy {
    flex: 1;
    background: rgb(248, 79, 93);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding-top: 10px;
  }
</style>