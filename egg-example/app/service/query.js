'use strict';

const Controller = require('egg').Controller;

class QueryController extends Controller {
    async getAll() {
        const res = await this.app.mysql.select('test1');
        console.log(res)
        return {
            code: 0,
            data: res,
        };
    }

    async addOne(params) {
        const res = await this.app.mysql.insert('test1', {
            id: params.id,
            name: params.name,
            age: params.age,
        });
        console.log(res)

        if (res.affectedRows === 1) {
            return {
                code: 0,
                message: '添加成功'
            }
        } else {
            return {
                code: -1,
                message: '添加失败'
            }
        }
    }

    async updateThose(params) {
        const res = await this.app.mysql.update('test1', {
            id: params.id,
            name: params.name,
            age: params.age,
        });

        if (res.affectedRows === 1) {
            return {
                code: 0,
                message: '修改成功'
            }
        } else {
            return {
                code: -1,
                message: '修改失败'
            }
        }
    }

    async deleteThose(params){
        const res = await this.app.mysql.delete('test1', {
            id: params.id,
        });

        if (res.affectedRows === 1) {
            return {
                code: 0,
                message: '删除成功'
            }
        } else {
            return {
                code: -1,
                message: '删除失败'
            }
        }
    }

}


module.exports = QueryController;
