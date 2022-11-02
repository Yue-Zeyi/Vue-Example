import { createApp } from 'vue'
import App from './App.vue'
// 导入 bootstrap 样式表
import './assets/css/bootstrap.css'
// 导入全局自定义样式表
import './index.css'
//导入路由模块
import router from './router'

// 创建 app 实例
const app = createApp(App)

//挂载路由对象
app.use(router)

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const token = localStorage.getItem('token')
  if (!token) {
    return next('/login')
  }
  next()
})

// 挂载 app 实例
app.mount('#app')
