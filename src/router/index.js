import Vue from 'vue'
import VueRouter from 'vue-router'
 
//路由的懒加载
const Home = ()=>import('../views/home/Home')
const Shop = ()=>import('../views/shop/Shop')
const Category = ()=>import('../views/category/Category')
const Profile = ()=>import('../views/profile/Profile')
const Detail = ()=>import('../views/detail/Detail')
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
//该段代码可以避免重复点击菜单栏按钮时程序报错：避免了到当前位置的冗余导航


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
