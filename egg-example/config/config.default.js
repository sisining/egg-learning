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

    config.cors = {
        // origin: '*', // 允许所有跨域访问，注释掉则允许上面 白名单 访问
        credentials: true, // 允许跨域请求携带cookies
        // 允许的请求方式
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    };

    config.multipart = {

        // mode: 'file',

        fileExtensions: ['.docx'],

    }

    // config.sequelize = {
    //   dialect: 'mysql',
    //   host: '127.0.0.1',
    //   port: '3306',
    //   user: 'root', // 用户名
    //   password: 'root', // 用户密码
    //   database: 'test', // 数据库名
    //   define: {
    //     underscored: true,
    //     freezeTableName: true,
    //   },
    // };

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
