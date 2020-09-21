export default {
  getGoodsNum(state) {//获取添加到购物车里的商品种数，
    return state.cartList.length
  },
  getCartList(state) {
    return state.cartList
  }
}