const crypto = require('crypto');

const md5password = (password)=>{
    const md5 = crypto.createHash('md5');//采用的加密方式
    const reslut =  md5.update(password).digest('hex');//结果转为16（<hex></hex>）进制
    return reslut;
}
module.exports = md5password