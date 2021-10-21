const koa  = require('koa');
const bodyParser = require('koa-bodyparser')
const errorHandle = require('./errorHandle')
const getDirFile = require('../utils/getDirFile')
const app = new koa();

const path = require('path')
const upDir =  path.resolve(__dirname, '..')

const files=  getDirFile(upDir)
app.use(bodyParser());
//获取为路由的文件并循环注册
files.forEach(item=>{
    let  reg = /(Router\.js)$/
    if(reg.test(item)){
        const router = require(item)
        app.use(router.routes())
        app.use(router.allowedMethods())
    }
})
app.on('error',errorHandle)


module.exports = app;

