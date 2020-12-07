'use strict';

const Controller = require('egg').Controller;
const sequelize = require('../service/test');

class SelectController extends Controller {
    // 具体地址名称
    async selectAll() {
        const result = await sequelize.query('SELECT * FROM jc_ljdxx');
        console.log(result);
        this.ctx.body = result;

        // const res=await
        return true;
    }

    // 所有的省 ,fjzj/市区编号
    async selectProvince() {
        const result = await sequelize.query('select mc,zj,fjzj from zd_xzqh where fjzj like "TOP"');
        console.log(result);
        this.ctx.body = result;
        // const res=await
        return true;
    }

    //  由省及市
    async selectCity() {
        const {fjzj} = this.ctx.query;
        const result = await sequelize.query('select mc,zj,fjzj from zd_xzqh where fjzj=:fjzj', {
            replacements: {fjzj},
            type: sequelize.QueryTypes.SELECT,
        });

        console.log(result);
        this.ctx.body = result;
        // const res=await
        return true;
    }

    // 城区
    async selectRegion() {
        const {fjzj} = this.ctx.query;
        const result = await sequelize.query('SELECT mc,zj,fjzj FROM zd_xzqh where fjzj=:fjzj', {
            replacements: {fjzj},
            type: sequelize.QueryTypes.SELECT,
        });
        console.log(result.code)

        console.log(result);
        this.ctx.body = result;

        // const res=await
        return true;
    }

    // async selectMore() {
    //     const {ssqy} = this.ctx.query;
    //     const result = await sequelize.query('SELECT * FROM jc_ljdxx where ssqy=:ssqy', {
    //         replacements: {ssqy},
    //         type: sequelize.QueryTypes.SELECT,
    //     });
    //     console.log(result.code)
    //     if (result.code === -1) {
    //         return {
    //             code: 0,
    //             message: '没有更多'
    //         }
    //     }
    //     console.log(result);
    //     this.ctx.body = result;
    //
    //     // const res=await
    //     return true;
    // }

}

module.exports = SelectController;
