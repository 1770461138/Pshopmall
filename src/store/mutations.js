export default {
  //mutations里的每个方法尽量只做一件事情，如果一个方法需要处理多个事情，请到actions里面操作
  addCounter(state,payload) {
    payload.count++
  },
  
  addToCart(state,payload) {//添加新的商品信息
    payload.count = 1
    state.cartList.push(payload)
  }






  // addCart(state,payload) {
  //   //payload新添加的商品
  // // 1.第一种方法
  //   // let oldProduct = null
  //   // for (let item of state.cartList) {
  //   //   if (item.id === payload.id) {
  //   //     oldProduct = item
  //   //   }
  //   // }
  //   //2.第二种方法
  //   let oldProduct = state.cartList.find(item=>item.id === payload.id)


  //   if (oldProduct) {//将原来的商品数量+1
  //     oldProduct.count += 1
  //   }else {         //添加新的商品信息
  //     payload.count = 1
  //     state.cartList.push(payload)
  //   }
  // }
}