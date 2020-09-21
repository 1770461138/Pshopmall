<template>
  <div class="addcart-nav">
    <div class="left" @click="allCheck">
        <CheckButton :isChecked="isSelectAll"/>
        <span>全选</span>
    </div>
    <div class="center">合计:￥{{totalPrice}}</div>
    <div class="right">结算{{checkLength}}</div>
  </div>
</template>
<script>
import CheckButton from '@/components/content/CheckButton/CheckButton'
import {mapGetters} from 'vuex'
export default {
  name:'ShopButtonBar',
  data() {
    return{}
 },
 components: {
   CheckButton
 },
  computed: {
    ...mapGetters(['getCartList']),
    totalPrice() {//结算总价格
      return this.getCartList.filter(item=>{
        return item.checked
      }).reduce((preValue,item)=>{
        return preValue + item.price * item.count
      },0).toFixed(1)
    },
    checkLength() {//计算种类数
      if((this.getCartList.filter(item=>item.checked).length)>0){
        return '('+this.getCartList.filter(item=>item.checked).length +')'
      } return ''
    },
    isSelectAll() {//判断是否全部商品已被选中,首先判断购物车里是否有商品
      if(this.getCartList.length === 0) return false
      return !(this.getCartList.filter(item=>!item.checked).length)
      // console.log(!(this.getCartList.filter(item=>!item.checked).length));
//filter是遍历，find是查找
      // return !(this.getCartList.find(item=>!item.checked)
    }
  },
  methods: {
    allCheck() {//全选
    // console.log(this.isSelectAll);
      if(this.isSelectAll){
        for(let item of this.getCartList){
        // console.log(item);//item 是 getCartList对象里的一个数组
        item.checked = false
          }
        }else{
          for(let item of this.getCartList){
        // console.log(item);//item 是 getCartList对象里的一个数组
        item.checked = true
          }
        }
    }
  },
}
</script>
<style scoped>
  .addcart-nav {
    display: flex;
    background: rgb(255, 255, 255);
    height: 40px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 49px;
    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
    font-size: 18px;
  }
  .left {
    display: flex;
    width: 80px;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .left span {
    padding: 2px 8px 0 8px;
    font-size: 16px;
    line-height: 38px;
  }
  .center {
    flex: 1;
    text-align: right;
    line-height: 40px;
  }
  .right {
    text-align: center;
    width: 80px;
    line-height: 35px;
    background: rgb(252, 80, 1);
    color: white;
    border-radius: 15px;
    margin: 3px 8px 3px;
  }
</style>