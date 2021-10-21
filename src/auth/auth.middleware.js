const jwt = require('jsonwebtoken')
const md5password = require('../utils/password_handle')
const errType = require('../constant/err_mess')
const authService = require("./authService");
const {PUBLIC_KEY} = require('../app/config')
const verifyLogin = async (ctx,next)=>{
  
 const {name,password} =  ctx.request.body;
 //判断用户名密码不能为空
 if(!name||!password){
    const error =   new Error(errType.NAME_OR_PASSWORD_IS_REQUIRED)
    ctx.app.emit('error',error,ctx)
     return
 }
 else{
  
   ctx.request.body.password =  md5password(password)
   const user = {name,password:ctx.request.body.password}
   const result = await authService.login(user)
   
   if(result.length==0){
       const error = new Error(errType.PASSWORD_ERROR)
       ctx.app.emit('error',error,ctx)
       return
   }
   ctx.user = {name,id:result[0].id}
 }
 
 await next();
}
const authVerify = async (ctx,next)=>{
    //huoqu并验证token
    const authorization = ctx.headers.authorization;
    if(!authorization){
        const err = new Error(errType.UNAUTHOR);
        ctx.app.emit("error",err,ctx)
        return
    }
    const token = authorization.replace('Bearer ','');
  try {
    const result=jwt.verify(token,PUBLIC_KEY,{
        algorithms:['RS256']
    });
    ctx.user = result;
    await next();
  } catch (e) {
       const error =new Error(errorTypes.UNAUTHOR)
       return ctx.app.emit('error',error,ctx);
  } 
}
module.exports = {
    verifyLogin,
    authVerify
}