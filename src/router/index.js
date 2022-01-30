import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Entrada.vue'
import Posts from "../views/Posts"
import Comments from "../views/Comments"
import Albums from '../views/Albums'
import Photos from "@/views/Photos";
import Todo from "@/views/Todo";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home')
  },
  {
    path: '/about',
    name: 'About',
    component:Home
  },
  {
    path: '/posts/:id/:name',
    name: 'Posts',
    component:Posts,
    props:{
      id:route => ({ search: route.query.q })
    }
  },
  {
    path: '/comments/:id/:name',
    name: 'Comments',
    component: Comments,
    props: {
      id: route => ({search: route.query.q})
    },
  },
  {
    path: '/albums/:id',
    name: 'Albums',
    component: Albums,
    props: {
      id: route => ({search: route.query.q})
    },
  },
  {
    path: '/photos/:id',
    name: 'Photos',
    component: Photos,
    props: {
      id: route => ({search: route.query.q})
    },
  },
  {
    path: '/todo/:id',
    name: 'ToDo',
    component: Todo,
    props: {
      id: route => ({search: route.query.q})
    },
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
