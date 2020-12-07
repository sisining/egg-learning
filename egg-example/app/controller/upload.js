'use strict';

const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;
const awaitWriteStream = require('await-stream-ready').write
const sendToWormhole = require('stream-wormhole')

class UploadController extends Controller {
    async index() {
        const {ctx} = this;
        // 拿到请求里的file文件,如果是多文件就对数组进行遍历
        const file = ctx.request.files[0];
        // 设置文件的存储地址
        const target = path.join(path.resolve(), `/upload/${file.filename}`);
        // 读取文件的内容
        let path = fs.readFileSync(file.filepath);
        // 写入文件
        fs.writeFileSync(target, path);
    }


    async upload() {
        // 获取到流
        let stream = await ctx.getFileStream()
        // 设置存储地址
        let target = path.join(path.resolve(), `/upload/{stream.filename}`)
        // 创建一个写入流,写入到目标文件中
        const writeStream = fs.createWriteStream(target)
        try {
            // 写入文件
            await awaitWriteStream(stream.pipe(writeStream))
        } catch (err) {
            // 将文件流关闭
            await sendToWormhole(stream)
        }
    }
}

module.exports = UploadController;
