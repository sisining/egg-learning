'use strict';

const Controller = require('egg').Controller;
const sequelize = require('../service/test');
const Service = require('egg').Service;

class QueryController extends Service {
  async queryall() {
    // 查询
    const result = await sequelize.query('SELECT * FROM test1');
    console.log(result);
    this.ctx.body = result;

    // const res=await
    return true;
  }

  async queryOne() {
    // 带参查询
    // select * from test1 where id in(:id)
    // select * from test1 where id=:id
    // select * from test1 where id like :id

    const { id } = this.ctx.query;
    const user = await sequelize.query('select * from test1 where id in(:id)', {
      replacements: { id },
      type: sequelize.QueryTypes.SELECT,
    });

    console.log(user);
    this.ctx.body = user;
    return true;
  }

  async createOne() {
    // 添加数据
    // 添加了一个name:5545,age:33的数据
    const { id, name, age } = this.ctx.request.body;// Post
    const result = await sequelize.query('insert into test1 (id,name,age) values (:id,:name,:age)', {
      replacements: { id, name, age },
      type: sequelize.QueryTypes.INSERT,
    });

    if (result.code === 1) {
      console.log('添加成功');
    } else {
      console.log('添加失败');
    }
    console.log(result);
    console.log(name, age);
    console.log(this.ctx.request.body);
    this.ctx.body = result;
    return true;
  }

  async updateOne() {
    // 修改
    // 修改了name=6437的age为100
    const { id, name, age } = this.ctx.request.body;// Put
    const result = await sequelize.query('update test1 set name=:name,age=:age where id=:id', {
      replacements: {
        name,
        id,
        age,
      },
      type: sequelize.QueryTypes.UPDATE,
    });
    console.log(result);
    this.ctx.body = result;
    return true;
  }

  async deleteOne() {
    //  删除
    //  删除了id=5的数据
    const { id } = this.ctx.query;// delete
    await sequelize.query('delete from test1 where id=:id', {
      replacements: { id },
      type: sequelize.QueryTypes.DELETE,
    });

    console.log('删除了一个数据');
    return true;
  }


  // async  getAll(){
  //   const res=await this.ctx.service.query.getAll()
  //   this.ctx.body=res
  //   console.log(res)
  // }
  //
  // async addOne(){
  //   let params=this.ctx.request.body
  //   const res=await this.ctx.service.query.addOne(params)
  //   this.ctx.body=res
  //   console.log(res)
  // }
  //
  // async updateThose(){
  //    let params=this.ctx.request.body
  //   const res=await this.ctx.service.query.updateThose(params)
  //   this.ctx.body=res
  // }
  //
  // async deleteThose(){
  //    let params=this.ctx.request.body
  //   const res=await this.ctx.service.query.deleteThose(params)
  //   this.ctx.body=res
  // }

}

module.exports = QueryController;
