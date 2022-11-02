// 1. 按需导入对应的函数
import { createRouter, createWebHashHistory } from 'vue-router'

import Login from './components/MyLogin.vue'
import Home from './components/MyHome.vue'
import Users from './components/menus/MyUsers.vue'
import Rights from './components/menus/MyRights.vue'
import Goods from './components/menus/MyGoods.vue'
import Orders from './components/menus/MyOrders.vue'
import Settings from './components/menus/MySettings.vue'
import UserDetail from './components/user/MyUserDetail.vue'

// 2. 创建路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // 路由重定向
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/home/users',
      redirect: '/home/users',
      redirect: '/home/users',
      children: [
        { path: '/home/users', component: Users },
        { path: '/home/rights', component: Rights },
        { path: '/home/goods', component: Goods },
        { path: '/home/orders', component: Orders },
        { path: '/home/settings', component: Settings },
        // 用户详情页的路由规则
        { path: 'users/:id', component: UserDetail, props: true },
      ],
    },
  ],
})
// 3. 向外共享路由实例对象
export default router
