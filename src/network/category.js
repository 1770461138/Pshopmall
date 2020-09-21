import {request} from './request'
export function getCategory() {//左侧标题数据
  return request({
    url:'/category'
  })
}

export function getsubCategory(maitKey) {//右上侧预览数据
  return request({
    url:'/subcategory',
    params:{
      maitKey
    }
  })
}
export function getCategoryDetail(miniWallkey,type) {//流行、新款、综合商品数据
  return request({
    url:'/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}