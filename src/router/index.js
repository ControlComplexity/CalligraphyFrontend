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
      title:'书法教育'
    }
  },
 
  {
    path: '/copybook',
    name: 'copybook',
    component: () => import(/* webpackChunkName: "about" */ '../views/Copybook.vue')
  },
  {
    path: '/children',
    name: 'children',
    component: () => import(/* webpackChunkName: "about" */ '../views/ChildrenEducation.vue')
  },
  {
    path: '/university',
    name: 'university',
    component: () => import(/* webpackChunkName: "about" */ '../views/UniversityEducation.vue')
  },
  {
    path: '/theory',
    name: 'theory',
    component: () => import(/* webpackChunkName: "about" */ '../views/EducationTheory.vue')
  },
  {
    path: '/tech',
    name: 'tech',
    component: () => import(/* webpackChunkName: "about" */ '../views/TechnologyCalligraphy.vue')
  },
  {
    path: '/communicate',
    name: 'communicate',
    component: () => import(/* webpackChunkName: "about" */ '../views/Communicate.vue')
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
