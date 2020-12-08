import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bootstrap from 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
//
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import {AxiosInstance as Axios} from "axios";

createApp(App).use(store).use(router).use(Bootstrap).use(ElementPlus).mount('#app')

Axios.defaults.headers.common['i-token'] = store.state.token;
