import axios from 'axios';


export function request(config) {
    const instance = axios.create({
        baseURL: "http://127.0.0.1:7001",
        // headers:{'content-type': 'application/x-www-form-urlencoded'},
        timeout: 5000, //毫秒，超过5s报错，没有获取到
    });

    // 请求拦截
    instance.interceptors.request.use(
        (config) => {
            // 添加
            const token = window.localStorage.getItem('token')
            if (token) {
                //localStorage.getItem('Authorization'
                //store.state.token
                // config.headers.Authorization = localStorage.getItem('Authorization');
                config.headers['i-token'] = token;
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
            // console.log(res);
            return res.data;
        },
        (err) => {
            console.log(err);
        }
    );
    // 发送真正的网络请求
    return instance(config);

}
