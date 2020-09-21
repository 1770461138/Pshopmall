<template>
  <div class="tab-bar-item" @click="TabBarBtn">
    <div v-if="!RouteIsActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="ItemActiveStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data() {
    return{
    }
  },
  props: {
    link:String,
  },
  computed: {
    RouteIsActive() {//判断当前哪个路由处于活跃状态
      return this.$route.path.indexOf(this.link) !== -1
    },
    ItemActiveStyle() {
      return this.RouteIsActive ? {color: "red"} : {}
    }
  },
  methods: {
    TabBarBtn() {
      this.$router.push(this.link)
    }
  }
}
</script>
<style scoped>

  .tab-bar-item {
    flex: 1;
    text-align: center;
  }

  .tab-bar-item img {
    width: 27px;
    height: 27px;
    margin-top: 2px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  /* .tab-bar-item span{
    display: block;
    font-size: 14px;
    height: 20px;
  } */
</style>