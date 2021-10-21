const Router = require('koa-router')
const {create}  = require('./user.controller')
const {verifyUser,handlePassword} = require('./user.middleware')
const userRouter = new Router({prefix:'/users'});
userRouter.post('/',verifyUser,handlePassword,create)
 //在执行数据库操作前插入验证中间件verifyUser，验证传入的用户名以及密码的格式
module.exports = userRouter
