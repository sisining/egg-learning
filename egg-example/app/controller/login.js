'use strict';

// import {md5} from "./md5";

const Controller = require('egg').Controller;
const sequelize = require('../service/test');
const Service = require('egg').Service;

// const jwt=require('egg-jwt')

class LoginController extends Controller {
    async findAllUser() {
        // 查询
        const result = await sequelize.query('SELECT * FROM test1');
        console.log(result);
        this.ctx.body = result;

        return true;
    }

    async findUser() {
        const {ctx, app} = this
        console.log('----------')
        const {name, password} = ctx.request.body;
        console.log(name, password)
        const user = await sequelize.query('select * from user where name=:name and password=:password', {
            replacements: {name, password},
            type: sequelize.QueryTypes.SELECT,
        });
        console.log('admin')
        console.log(user[0].admin)
        if (user != '') {
            let obj = {
                name: user[0].name,
                //密码加密
                password: user[0].password
            }
            console.log(obj)
            const {jwt: {secret, expiresIn}} = app.config;
            let token = app.jwt.sign(obj, secret, {expiresIn})
            console.log(token)
            ctx.body = {code: 0, data: user, token}
            return true;
        } else {
            ctx.body = {code: 10010, data: user, msg: '失败'};
        }

        console.log(user)
    }

}

module.exports = LoginController;

