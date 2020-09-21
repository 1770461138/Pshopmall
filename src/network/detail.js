import {request} from './request'
export function getDetail(iid) {
  return request({
    url:'/detail',
    params: {
      iid
    }
  })
}
export function getRecommend() {
  return request({
    url:'/recommend'
  })
}

export class DetailGoodsData {//将多个商品信息封装成对象
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.realPrice = itemInfo.lowNowPrice
    this.services = services
    this.columns = columns
  }
}

export class DetailStoreData {//店铺信息
  constructor(storeInfo) {
    this.name = storeInfo.name
    this.storeLogo = storeInfo.shopLogo
    this.storeScore = storeInfo.score//店铺评分
    this.sell = storeInfo.cSells//销量
    this.goodsNum = storeInfo.cGoods//全部宝贝
  }
}

export class GoodsParams {//商品的参数
  constructor(info,rule) {
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set//厂地等信息
    this.sizes = rule.tables//尺码
  }
}
export class CommentsData {//评价信息
  constructor(rate) {
    this.rateNums = rate.cRate
    this.rateContents =rate.list
  }
}
