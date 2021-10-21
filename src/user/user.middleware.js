const errType = require('../constant/err_mess')
const service = require('./userService')
const md5password = require('../utils/password_handle')
const verifyUser = async (ctx,next)=>{
 const {name,password} =  ctx.request.body;
 //判断用户名密码不能为空
 if(!name||!password){
    const error =   new Error(errType.NAME_OR_PASSWORD_IS_REQUIRED)
    ctx.app.emit('error',error,ctx)
     return
 }
 //判断用户名是否存在
 const result =   await service.getUserByName(name);
if(result.length){
    const error =   new Error(errType.USER_ALREADY_EXISTS)
    ctx.app.emit('error',error,ctx)
    return
}
  await next();

}
const handlePassword = async (ctx,next)=>{
  ctx.request.body.password=md5password(ctx.request.body.password);
 await next();
}

module.exports = {
    verifyUser,
    handlePassword
}