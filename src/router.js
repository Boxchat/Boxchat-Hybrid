import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Chat from './views/Chat.vue'
import Radio from './views/Radio.vue'
import Login from './views/Login.vue'
import LoginOld from './views/LoginOld.vue'
import LoginScreen from './views/LoginScreen.vue'


Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'LoginScreen',
    //   component: LoginScreen,
    // },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        needLogin: true
      },
      children: [
        {
          path: '/chat',
          component: Chat
        },
        {
          path: '/radio',
          component: Radio
        }
      ],
      meta: {
        isLogin: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/loginOld',
      name: 'LoginOld',
      component: LoginOld,
    },
    // {
    //   path: '/loginScreen',
    //   name: 'LoginScreen',
    //   component: LoginScreen,
    // },
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {

  let whiteList = ['/login', '/regist']    // 无需登录即可访问的页面

  if (whiteList.indexOf(to.path) === -1) {
    // 判断是否已登录
    if (localStorage.token) {
      console.log('已登录')
    } else {
      console.log('未登录，将跳转登录页')
      // next({
      //   name: 'Login',
      //   replace: true
      // })
    }
    next()
  }
  next()
})

export default router