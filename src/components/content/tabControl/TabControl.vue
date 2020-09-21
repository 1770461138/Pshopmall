<template>
  <div class="control">
    <!--因为需求上看这里只是字不一样所以并没有使用插槽-->
    <div 
      v-for="(item,index) in titles" 
      :key="index" 
      class="tabcontrol-item"
      :class="{active: index === currentIndex}"
      @click="itemClick(index)"
      >
        <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return[]
      }
    }
  },
  data() {
    return{
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  }
}
</script>
<style scoped>
  .control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background: #fff;
  }
  .tabcontrol-item {
    flex: 1;
  }
  .tabcontrol-item span {
    padding: 5px;
  }
  .active {
    color: red;
  }
  .active span{
    border-bottom: 3px solid red;
  }
</style>