<template>
  <div class="profile-header">
    <div class="left">
      <img src="~@/assets/img/profile/header.png" alt="">
    </div>
    <div class="middle">
      <span>登录 / 注册</span><br>
      <span class="mob">暂无绑定手机</span>
    </div>
    <div class="right">
      <img src="~@/assets/img/profile/go.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name:'ProfileHeader',
  data() {
    return{}
  },
}
</script>
<style scoped>
  .profile-header {
    height: 70px;
    background: rgb(248, 99, 124);
    display: flex;
  }
  .left {
    width: 90px;
    padding:3px 15px 0 8px;
  }
  .middle {
    flex: 1;
    color: white;
    padding-top: 10px ;
  }
  span {
   
    line-height: 25px;
  }
  .right {
    width: 40px;
    margin: 20px 8px;
  }
</style>