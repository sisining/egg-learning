'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/hello', controller.hello.say);
  //增删改查
  router.get('/query', controller.query.queryall);
  router.get('/queryOne', controller.query.queryOne);
  router.post('/create', controller.query.createOne);
  router.put('/update', controller.query.updateOne);
  router.delete('/delete', controller.query.deleteOne);
  //级联选择
  router.get('/select',controller.select.selectAll)
  router.get('/select', controller.select.selectAll);
  router.get('/selectRegion', controller.select.selectRegion);
  router.get('/selectProvince', controller.select.selectProvince);
  router.get('/selectCity', controller.select.selectCity);
  // router.get('/selectMore', controller.select.selectMore);
  //文件上传
  router.post('/egg/fileupload', controller.upload.upload);
  // router.get('/query',controller.query.getAll)
  // router.post('/create',controller.query.addOne)
  // router.put('/update',controller.query.updateThose)
  // router.post('/delete',controller.query.deleteThose)
};
