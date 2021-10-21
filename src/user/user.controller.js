const service  = require('./userService')
const status = require('../constant/status')
class UserController{
    async create(ctx,next){
     const user = ctx.request.body;
     const result  = await service.create(user)
        //获取用户传递的参数有
        //操作数据
        //返回结果
        if(result.length>0){
            ctx.body = status.registerSuccessStatus
        }
    }
}
module.exports=new UserController()