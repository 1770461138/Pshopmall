<template>
  <div class="comments" v-if="Object.keys(Drate_info).length !== 0">
    <div class="comments-top">
      <div class="comments-top-left"><span>宝贝评价({{Drate_info.rateNums}})</span></div>
      <div class="comments-top-right"><span>查看全部</span></div> 
    </div>
    <div class="comments-middle">
      <span>穿着效果很好</span>
      <span>质量好</span>
      <span>尺码合适</span>
    </div>
    <div class="comments-bottom">
      <!-- 这里报了两个错误：Error in render: "TypeError: Cannot read property '0' of undefined"
      不影响使用 在上面添加v-if就好了，应该是created时数据还没请求过来-->
      <div class="user">
        <img :src="Drate_info.rateContents[0].user.avatar" alt="">
        <span>{{Drate_info.rateContents[0].user.uname}}</span>
      </div>
      <p>{{Drate_info.rateContents[0].content}}</p>
    </div>
  </div>
</template>
<script>
//评论信息
export default {
  name:'DetailComments',
  data() {
    return{
    }
  },
  props: {
    Drate_info: {
      type:Object,
      default() {
        return{}
      }
    }
  },
}
</script>
<style scoped>
  .comments {
    padding: 15px 8px 20px 8px;
    background: white;
  }
  .comments-top {
    display: flex;
  }
  .comments-top-left {
    flex: 1;
  }
  .comments-top-right {
    flex: 1;
    font-size: 14px;
    text-align: right;
    margin-right: 30px;
    color: red;
    position: relative;
  }
  .comments-top-right::after {
    content: '';
    position: absolute;
    top: 1px;
    right: -25px;
    width: 14px;
    height: 14px;
    background: url('~@/assets/img/detail/前进.png');
  }
  .comments-middle {
    width: 90%;
    display: flex;
    padding: 15px 0 8px 0;
  }
  .comments-middle span {
    background: rgb(250, 220, 225);
    margin-right:10px;
    flex: 1;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    text-align: center;
    border-radius: 15px;
  }
  .user img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid rgb(255, 219, 17);
  }
  .user span {
    position: relative;
    font-size: 12px;
    padding-left: 10px;
    top: -8px;
  }
  .comments-bottom p {
    margin-top: 5px;
    font-size: 14px;
    line-height: 20px;
  }
</style>