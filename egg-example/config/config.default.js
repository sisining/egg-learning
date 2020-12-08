/* eslint valid-jsdoc: "off" */
'use strict';
// 配置路由映射

module.exports = appInfo => {

    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1606805433821_7065';

    // add your middleware config here
    config.middleware = [];

    config.security = {
        csrf: {
            enable: false,
            // ignoreJSON: true,
        },
        domainWhiteList: ['http://www.baidu.com', 'http://localhost:8080'], // 配置白名单
        ctoken: false,
    };

    config.jwt = {
        secret: '123456',
        enable: true, // default is false
        match: '/jwt', // optional
        expiresIn: '24h'
    };

    // config.jwt = {
    //     secret: 'egg-api-jwt',
    // };
    //
    // config.middleware = [
    //     'jwt',
    // ];

    config.cors = {
        // origin: '*', // 允许所有跨域访问，注释掉则允许上面 白名单 访问
        credentials: true, // 允许跨域请求携带cookies
        // 允许的请求方式
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    };

    const whitelist = [
        // images
        '.jpg', '.jpeg', // image/jpeg
        '.png', // image/png, image/x-png
        '.gif', // image/gif
        '.bmp', // image/bmp
        '.wbmp', // image/vnd.wap.wbmp
        '.webp',
        '.tif',
        '.psd',
        // text
        '.svg',
        '.js', '.jsx',
        '.json',
        '.css', '.less',
        '.html', '.htm',
        '.xml',
        // tar
        '.zip',
        '.gz', '.tgz', '.gzip',
        // video
        '.mp3',
        '.mp4',
        '.avi',
        '.docx'
    ];

    config.multipart = {
        // mode: 'file',
        fileSize: '50mb',
        fileExtensions: ['.docx', '.jpg', '.text', '.png'],
    }
    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
        mysql: {
            // 单数据库信息配置
            client: {
                // host
                host: 'localhost',
                // 端口号
                port: '3306',
                // 用户名
                user: 'root',
                // 密码
                password: 'root',
                // 数据库名
                database: 'test',
            },
            // 是否加载到 app 上，默认开启
            app: true,
            // 是否加载到 agent 上，默认关闭
            agent: false,
        },
    };

    return {
        ...config,
        ...userConfig,
    };
};
