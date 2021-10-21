const service = require('./menuService')
const {menuInitSuccessStatus,menuListSuccessStatus} = require('../constant/status')
const handleMenu  = require('../utils/menuHandle.js')
class MenuController{
    async menuList(ctx,next){
     
       const result = await service.menuList();
     let result2 =   handleMenu(result)
       ctx.body = Object.assign({},menuListSuccessStatus,{data:result2})
    }
    async menuForUser(ctx,user){
        const result = await service.menuForUser(ctx.user.id)
        function handelResult(result){
            result.map(item=>{
                if(item.type==1){
                  let child =   result.find(item2=>item2.parentId==item.Mid)
                  console.log(child);
                  if(!item.children && child ){
                     item.children = []
                  }
                  if(item.children){
                    item.children.push(child)
                  }
                }
            })
           let  result2 = []
           result.map((item,index)=>{
               console.log(item);
                if(item.parentId == null ){
                    console.log(item.parentId);
                    result2.push(item)
                }
            })
            return result2
        }
        //handelResult(result)
     let result2 =  handelResult(result)
        ctx.body = Object.assign({},menuInitSuccessStatus,{data:result2})
    }
}
module.exports = new MenuController()