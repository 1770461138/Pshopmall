<template>
  <div class="profile-middleinfo">
    <div class="info">
      <img src="~@/assets/img/profile/info.png" alt="">
      我的消息</div>
    <div class="inte-shop">
      <img src="~@/assets/img/profile/inte-shop.png" alt="">
      积分商城</div>
    <div class="card">
      <img src="~@/assets/img/profile/card.png" alt="">
      会员卡</div>
    <div class="kong"></div>
    <div class="cart" @click="ToShop">
      <img src="~@/assets/img/profile/cart.png" alt="">
      我的购物车</div>
    <div class="download">
      <img src="~@/assets/img/profile/download.png" alt="">
      下载购物App</div>
  </div>
</template>
<script>
export default {
  name:'ProfileMiddleInfo',
  data() {
    return{}
  },
  methods: {
    ToShop() {
      this.$router.push('/shop')
    }
  }
}
</script>
<style scoped>
  .profile-middleinfo {
    height: 265px;
    line-height: 25px;
    font-size: 18px;
  }
  .profile-middleinfo img {
    width: 20px;
    height: 20px;
    margin-top: 1px;
    margin-right: 8px;
  }
  .info, .inte-shop, .card, .cart, .download {
    height: 50px;
    padding-top: 13px;
    border-top: 1px solid rgba(155, 155, 155,0.1);
    padding-left: 15px;
    display: flex;
  }
  .kong {
    height: 15px;
    background: rgba(155, 155, 155,0.1);
  }
</style>