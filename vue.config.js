module.exports = {
  configureWebpack:{
  resolve: {
  alias: {
  'assets': '@/assets',
  'components': '@/components',
  'network': '@/network',
  'views': '@/views',
  'store': '@/store',
  'constant': '@/constant',
  'utils': '@/utils'
  }
  }
  }
  // src="~@/assets/img/tabbar/home.png"//这是引用格式
  }