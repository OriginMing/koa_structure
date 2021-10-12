const Router = require('koa-router')
const {create}  = require('../controller/user.controller')
const userRouter = new Router({prefix:'/users'});
console.log("hh");
userRouter.post('/',create)
module.exports = {
    userRouter
}