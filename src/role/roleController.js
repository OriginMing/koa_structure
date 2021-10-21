const service = require('./roleService')
const {menuInitSuccessStatus,menuListSuccessStatus} = require('../constant/status')
class RoleController{
    async roleList(ctx,next){
       const result = await service.roleList();
       console.log(result);
       ctx.body = Object.assign({},menuInitSuccessStatus,{data:result})
    }
    async roleByUser(ctx,user){
        const result = await service.roleByUser(ctx.user.id)
        console.log(result);
        ctx.body = Object.assign({},menuInitSuccessStatus,{data:result})
    }
}
module.exports = new RoleController()