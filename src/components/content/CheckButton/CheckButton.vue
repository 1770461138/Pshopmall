<template>
  <div class="checkbutton" :class="{'check':isChecked}">
    <img src="~@/assets/img/check/ZS打勾.png" alt="">
  </div>
</template>
<script>
export default {
  name:'CheckButton',
  data() {
    return{
    }
  },
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
  .checkbutton {
    border: 1px solid #aaa;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    
  }
  .check{
    border-color: red;
    background-color: red;
  }
</style>