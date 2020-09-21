<template>
  <div class="profile-topinfo">
    <div class="left">
      <div class="money">0.00元</div>
      <span>我的余额</span>
    </div>
    <div class="center">
      <div class="coupons">0个</div>
      <span>我的优惠</span>
    </div>
    <div class="right">
      <div class="integral">0分</div>
      <span>我的积分</span>
    </div>
  </div>
</template>
<script>
export default {
  name:'ProfileTopInfo',
  data() {
    return{}
  },
}
</script>
<style scoped>
  .profile-topinfo {
    height: 90px;
    display: flex;
    text-align: center;
    border-bottom: 15px solid rgba(155, 155, 155,0.1);
  }
  .left, .center, .right {
    flex: 1;
    padding-top: 20px;
  }
  .center {
    border-right: 1px solid rgba(0, 0, 0,.1);
    border-left: 1px solid rgba(0, 0, 0,.1);
  }
  .money, .coupons, .integral {
    padding-bottom: 5px;
  }
</style>