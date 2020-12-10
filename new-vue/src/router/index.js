import {createRouter, createWebHistory} from 'vue-router'
// import Home from '../views/Home.vue'
// import Select from '../components/Select'
import App from "../App";
import createStore from "../store";

const Home = () => import('../views/Home')
const Login = () => import('../views/login/Login')
const User = () => import('../views/login/User')
const Admin = () => import('../views/login/AdminUser')
const Message = () => import('../views/login/Message')
const Index = () => import('../views/Index')
const Select = () => import('../components/Select')
const Upload = () => import('../components/Upload')
const routes = [
    {
        path: '/',
        redirect: '/login'

    },
    {
        path: '/login',
        component: Login,
        meta: {requireAuth: true}
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/select',
        component: Select
    },
    {
        path: '/upload',
        component: Upload
    },
    {
        path: '/index',
        component: Index,
        children: [
            {
                path: '/index',
                redirect: '/index/user'
            },
            {
                path: 'user',
                component: User
            },
            {
                path: 'admin',
                component: Admin
            },
            {
                path: 'message',
                component: Message
            },
        ]
    },

]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// if(localStorage.getItem('token')){
//     store.commit('changeLogin',localStorage.getItem('token'))
// }

// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
    // const isLogin = !!window.localStorage.getItem('token')
    if (!createStore.state.userToken) {
        if (to.matched.length > 0 &&
            !to.matched.some(record => record.meta.requiresAuth)) {
            next();
        } else {
            // let token = localStorage.getItem('Authorization');
            // isLogin ? next() : next({name: 'login'})
            // if (token === 'null' || token === '') {
            //   next('/login');
            // } else {
            //   next();
            // }
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        }
    } else {
        next()
    }

});

export default router
