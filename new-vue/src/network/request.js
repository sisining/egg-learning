import axios from 'axios';
import {Router as router} from "vue-router";
import createStore from "../store";


export function request(config) {
    const instance = axios.create({
        baseURL: "http://127.0.0.1:7001",
        // headers: {'content-type': 'application/x-www-form-urlencoded'},
        headers: {'content-type': 'application/json'},
        timeout: 5000, //毫秒，超过5s报错，没有获取到
    });

    // 请求拦截
    instance.interceptors.request.use(
        (config) => {
            let token = localStorage.getItem('token')
            console.log(token + 'token')
            if (token) {
                token = 'Bearer' +  token // 把token加入到默认请求参数中
                config.headers['token'] = createStore.state.token
                console.log(config)
            }
            return config
        },
        (err) => {
            console.log(err);
            return Promise.reject(err)
        }
    );
    // 响应拦截
    instance.interceptors.response.use(
        (res) => {
            console.log('响应拦截')
            console.log(res)
            if(res.data.code===10010||res.data.code===10011){
                localStorage.removeItem('token')
                router.replace({path: '/login'}).then(res => res)
            }else if(res.config.headers.token){
                //更新token
                localStorage.setItem('token',res.config.headers.token)
                // router.replace({path: '/home'}).then(res => res)
            }
            return res;
        },
        (err) => {
            console.log(err);
            return Promise.reject(err)
        }
    );
    // 发送真正的网络请求
    return instance(config);

}
