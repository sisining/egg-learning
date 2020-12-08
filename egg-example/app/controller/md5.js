'use strict';

//密码加密
const utility =require('utility')

exports.md5 = pwd => {
  const salt = '!@#$%'
  return utility.md5(pwd + salt)
}
