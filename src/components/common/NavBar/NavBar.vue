<template>
  <div class="nav-bar">
    <div class="left"><slot name="left-nav"></slot></div>
    <div class="middle"><slot name="middle-nav"></slot></div>
    <div class="right"><slot name="right-nav"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>
<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }

  .left, .right {
    width: 60px;
  }

  .middle {
    flex: 1;
    color: white;
    font-size: 18px;
  }
</style>