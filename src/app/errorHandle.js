const errorTypes = require('../constant/err_mess')
const errorHandle = (error,ctx)=>{
    let status,data={},message;
    switch(error.message){
        case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
            status=400;
            message = "用户名或者密码不能为空";
            break
        case errorTypes.USER_ALREADY_EXISTS:
            status=409;
            message = "用户名已存在";
            break   
        case errorTypes.USERNAME_AND_PASSWORD_NOT_NULL:
            status=409;
            message = "用户名和密码不能为空";
            break 
        case errorTypes.USER_UNEXISTS:
            status=400;
            message = "用户名不存在,请注册";
            break 
        case errorTypes.PASSWORD_ERROR:
            status=409;
            message = "用户名或密码错误";
            break  
        case errorTypes.UNAUTHOR:
            status=400;
            message = "未授权";
        break  
        case errorTypes.UN_PREMISSION:
            status=400;
            message = "不具备权限";
        break 
        default:
            status=404;
            message="NOT FOUND1"    
    }
    ctx.status = status;
    ctx.body = {message,status,data};
}
module.exports = errorHandle