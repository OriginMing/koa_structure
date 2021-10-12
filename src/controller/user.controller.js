const {create}  = require('../service/userService')
class UserController{
    async create(ctx,next){
        console.log(ctx.request.body);
     const result  = await create(ctx.request.body)
        //获取用户传递的参数有
        //操作数据
        //返回结果
        ctx.body  = result
    }
}
module.exports=new UserController()