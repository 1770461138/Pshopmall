<template>
  <div class="detail-storeinfo">
    <div class="store-top">
      <img :src="Dstore_info.storeLogo" alt="">
      <span>{{Dstore_info.name}}</span>
    </div>
    <div class="store-middle">
      <div class="store-middle-item store-middle-left">
        <div class="info-sell">
          <div class="sell-num">{{Dstore_info.sell|sellNumFilter}}</div>
          <div class="sell-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-num">{{Dstore_info.goodsNum}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="store-middle-item store-middle-right">
        <table>
          <tr v-for="(item,index) in Dstore_info.storeScore" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'active': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'active': item.isBetter}">{{item.isBetter ? '高' : '低'}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
//店铺信息
export default {
  name:'DetailStoreInfo',
  data() {
    return{}
},
  props: {
    Dstore_info: {
      type:Object,
      default() {
        return{}
      }
    }
  },
  filters: {
    sellNumFilter(value) {
      if(value<10000) return value;
      return (value/10000).toFixed(0)+'万+'
    }
  }
}
</script>
<style scoped>
  .detail-storeinfo {
    background: white;
    padding: 15px 8px;
    border-bottom: 1px solid rgba(224, 218, 218,.7);
  }
  .store-top {
    line-height: 45px;
    display: flex;
    align-items: center;
  }
  .store-top img {
    width: 40px;
    height:40px;
    border: 1px solid black;
    border-radius: 4px;
  }
  .store-top span {
    font-size: 18px;
    margin-left: 8px;
  }
  .store-middle {
    display: flex;
    margin-top: 5px;
    align-items: center;
  }
  .store-middle-item {
    flex: 1;
    
  }
  .store-middle-left {
    display: flex;
    text-align: center;
    border-right: 1px solid black;
    justify-content: space-evenly;
  }
  .sell-num .goods-num {
    font-size: 20px;
  
  }
  .sell-text .goods-text {
    font-size: 14px;
  }
  .store-middle-right table {
    width: 140px;
    margin-right: 20px;
    margin-left: 20px;
  }
  .store-middle-right td {
    padding: 5px 0;
    margin: 15px 0;
  }
  .score  {
    color: rgb(34, 218, 110);
  }
  .better {
    color: rgb(34, 218, 110);
  }
  .active {
    color: red;
  }
</style>