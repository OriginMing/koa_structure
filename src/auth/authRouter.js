const Router = require('koa-router')
const authController = require('./auth.controller')
const {verifyLogin,authVerify} = require('./auth.middleware')
 
const authRouter = new Router()
authRouter.post('/login',verifyLogin ,authController.auth)
module.exports=authRouter

