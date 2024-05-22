import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:()=>import('@/views/homepage/index.vue'),
  },
  {
    path:'/',
    component:Layout,
    children:[
      {
        path:'/project',
        component:()=>import('@/views/project/index.vue'),
      },
      {
        path:'/student',
        component:()=>import('@/views/student/index.vue'),
      },
      {
        path:'/index',
        component:()=>import('@/views/course/info/index.vue'),
      },
      {
        path:'/announce',
        component:()=>import('@/views/course/manage/announce/index.vue'),
      },
      {
        path:'/modifyinfo',
        component:()=>import('@/views/course/manage/modifyinfo/index.vue'),
      },
      {
        path:'/pendapply',
        component:()=>import('@/views/course/manage/pendapply/index.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
