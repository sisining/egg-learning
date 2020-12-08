'use strict';

const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;
const awaitWriteStream = require('await-stream-ready').write
const sendToWormhole = require('stream-wormhole')

class UploadController extends Controller {

    //file模式
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

        console.log(file + '---------')
    }

    //stream模式
    async uploadOne() {
        const {ctx} = this;
        // 获取到流
        let stream = await ctx.getFileStream()

        //设置文件名
        let filename =  stream.filename

        // 设置存储地址
        let target = path.join(path.resolve(), `/upload/${filename}`)

        // 创建一个写入流,写入到目标文件中
        const writeStream = fs.createWriteStream(target)

        try {
            // 写入文件
            await awaitWriteStream(stream.pipe(writeStream))
            console.log(target)
            console.log(filename)
        } catch (err) {
            // 将文件流关闭
            await sendToWormhole(stream)
        }

        // let pathId = target.slice(target.indexOf('public\\upload'));
        // let http = 'http://127.0.0.1:7001/';  // 自己的访问ip
        ctx.body = {code: 200, message: '上传成功!', data: {filename}}
    }

    //文件下载
    async download() {
        // console.log('download')
        // console.log(this.ctx.query)
        const {filename}=this.ctx.query
        // console.log(filename+'----------')
        // // 设置文件的下载地址
        const filePath = path.join(path.resolve(), `/upload/dasfsf02.jpg`)
        console.log(filePath)
        // console.log(this.ctx.attachment)
        // // 提示浏览正在下载文件
        this.ctx.attachment(filePath)
        // // 设置响应头
        this.ctx.set('Content-Type', 'application.octet-stream')
        this.ctx.body = fs.createReadStream(filePath)
    }
}

module.exports = UploadController;
// 'use strict'
// import { Controller } from 'egg';
// const path = require('path');
// const fs = require('fs');
//
// export default class HomeController extends Controller {
//    async upload() {
//     const { ctx } = this;
//     const file = ctx.request.files[0];
//     const fileinfo = fs.readFileSync(file.filepath);
//     const name = `YLW_${new Date().getTime()}_${file.filename}`;
//     const target = path.join(this.config.baseDir, `app/public/upload/${name}`);
//     try {
//       await fs.writeFileSync(target, fileinfo);
//     } catch (error) {
//       throw error;
//     } finally {
//       await fs.unlink(file.filepath, err => {
//         if (err) {
//           throw err;
//         }
//         console.log('删除缓存文件:' + file.filepath + '成功！');
//       });
//     }
//     ctx.body = { code: 200, message: '上传成功!', data: target, file };
//   }
// }

// // app/controller/upload.js
// const Controller = require('egg').Controller;
// const fs = require('mz/fs');
//
// module.exports = class extends Controller {
//   async upload() {
//     const { ctx } = this;
//     const file = ctx.request.files[0];
//     const name = 'egg-multipart-test/' + path.basename(file.filename);
//     let result;
//     try {
//       // process file or upload to cloud storage
//       result = await ctx.oss.put(name, file.filepath);
//     } finally {
//       // remove tmp files and don't block the request's response
//       // cleanupRequestFiles won't throw error even remove file io error happen
//       ctx.cleanupRequestFiles();
//       // remove tmp files before send response
//       // await ctx.cleanupRequestFiles();
//     }
//
//     ctx.body = {
//       url: result.url,
//       // get all field values
//       requestBody: ctx.request.body,
//     };
//   }
// };
