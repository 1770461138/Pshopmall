<template>
  <div class="detail-baseinfo" v-if="Object.keys(Dgoods_info).length !== 0">
    <div class="info-title">{{Dgoods_info.title}}</div>
    <div class="info-price">
      <span class="new-price">{{Dgoods_info.newPrice}}</span>
      <span class="old-price">{{Dgoods_info.oldPrice}}</span>
      <span class="discount">{{Dgoods_info.discount}}</span>
    </div>
    <div class="columns">
      <span>{{Dgoods_info.columns[0]}}</span>
      <span>{{Dgoods_info.columns[1]}}</span>
      <span>{{Dgoods_info.services[Dgoods_info.services.length-1].name}}</span>
    </div>
    <div class="service">
      <span class="service-item" v-for="index in Dgoods_info.services.length-1" :key="index">
        <img :src="Dgoods_info.services[index-1].icon" alt="">
        <span>{{Dgoods_info.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>
<script>
//展示详情页的基础信息
export default {
  name:'DetailBaseInfo',
  data() {
    return{}
  },
  props: {
    Dgoods_info:{
      type:Object,
      default(){
        return{}
      }
    },
    
  }
}
</script>
<style scoped>
  .info-title {
    font-size: 20px;
    margin: 15px 8px 15px 8px;
  }
  .info-price {
    position: relative;
    padding-bottom: 10px;
    border-bottom: 5px solid #eee;
  }
  .new-price {
    font-size: 32px;
    color:rgb(230, 71, 71);
    margin: 0 4px 0 8px;
  }
  .old-price {
    font-size: 15px;
    text-decoration:line-through;
  }
  .discount {
    font-size: 16px;
    padding: 2px 5px;
    color: #fff;
    background: rgb(245, 64, 94);
    border-radius: 8px;
    margin-left: 5px;
    position: absolute;
    top: 10px;
  }
  .columns {
    font-size: 15px;
    margin: 0 8px 0 8px;
    line-height: 30px;
    display: flex;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }
  .service {
    display: flex;
    padding: 0 8px 0 8px;
    justify-content: space-between;
    line-height: 40px;
    border-bottom: 8px solid #eee;
  }
  .service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }
  .service-item span {
    font-size: 14px;
    color: #333;
  }
</style>