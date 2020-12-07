import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import Select from '../components/Select'
import App from "../App";
const Home=()=>import('../views/Home')
const Select=()=>import('../components/Select')
const Upload=()=>import('../components/Upload')
const routes = [
  {
   path: '/',
    redirect:'/home'

  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/select',
    component: Select
  },
  {
    path:'/upload',
    component: Upload
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
