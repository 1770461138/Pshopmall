<template>
  <div class="goods-params">
    <table class="rule-info" v-for="(table,index) in Dgoods_params.sizes" :key="index">
      <tr v-for="(tr,index) in table" :key="index">
        <td v-for="(td,index) in tr" :key="index">{{td}}</td>
      </tr>
    </table>
    <table class="params-info">
      <tr v-for="(params,index) in Dgoods_params.infos" :key="index">
        <td class="params-info-key">{{params.key}}</td>
        <td class="params-info-value">{{params.value}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name:'DetailGoodsParams',
  data() {
    return{}
  },
  props: {
    Dgoods_params: {
      type:Object,
      default() {
        return{}
      }
    }
  },
}
</script>
<style scoped>
  .goods-params{
    background: white;
    padding: 5px 15px;
    border-bottom: 15px solid rgb(250, 244, 244);
    margin-bottom:20px;
  }
  .goods-params table {
    width: 100%;
    border-collapse: collapse;
  }
  .goods-params table tr {
    height: 42px;
  }
  .goods-params table tr td {
    border-bottom: 1px solid rgb(235, 225, 225);
  }
  .params-info {
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .params-info-key {
    width: 95px;
  }
  .params-info-value {
    color: rgb(224, 72, 72);
  }
</style>