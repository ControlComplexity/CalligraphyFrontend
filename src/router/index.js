import { createRouter, createWebHistory  } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheoryDetail from '@/components/TheoryDetail.vue'
import Admin from '@/components/Admin/index.vue'
import Login from '@/components/Login/index.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      title:'首页'
    }
  },
 
  {
    path: '/copybook',
    name: 'copybook',
    component: () => import(/* webpackChunkName: "about" */ '../views/Copybook.vue')
  },
  // {
  //   path: '/children',
  //   name: 'children',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/ChildrenEducation.vue')
  // },
  {
    path: '/children',
    name: 'Swiper',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/mySwiper/index.vue')
  },
  {
    path: '/university',
    name: 'university',
    component: () => import(/* webpackChunkName: "about" */ '../views/activitySwiper/index.vue')
  },
  {
    path: '/theory',
    name: 'theory',
    component: () => import(/* webpackChunkName: "about" */ '../views/EducationTheory.vue')
  },
  {
    path: '/tech',
    name: 'tech',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tech.vue')
  },
  {
    path: '/communicate',
    name: 'communicate',
    component: () => import(/* webpackChunkName: "about" */ '../views/Communicate.vue')
  },
  {
    path: '/video',
    name: 'video',
    component: () => import(/* webpackChunkName: "about" */ '../views/Video.vue')
  },
  {
    name: 'theoryDetail', // 命名路由
    path: '/theory_detail/:id', // 动态二级路由
    component: TheoryDetail
  },
  {
    name: 'admin', // 命名路由
    path: '/admin', // 动态二级路由
    component: Admin
  },
  {
    name: 'login', // 命名路由
    path: '/login', // 动态二级路由
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
