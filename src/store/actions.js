export default {
  addCart(context,payload) {
    let oldProduct = context.state.cartList.find(item=>item.id === payload.id)
    if (oldProduct) {//将原来的商品数量+1
      context.commit('addCounter',oldProduct)
      // console.log(payload.count);
    }else {         //添加新的商品信息
      payload.checked = false//添加属性来决定添加到购物车是否要打勾选中购买
      context.commit('addToCart',payload)
      // console.log(payload.count);
    }
  }
}