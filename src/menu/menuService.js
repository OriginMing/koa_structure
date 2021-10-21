const connect = require('../app/database')
class MenuService{
    async menuList(){
        const statement = `SELECT m1.id,m1.name,m1.type,m1.icon,m1.url,m1.parentId , JSON_OBJECT('id',m2.id,'name',m2.name,'type',m2.type,'icon',m2.icon,'url',m2.url,'parentId',m2.parentId) as parent FROM  menu m1   LEFT JOIN menu m2  ON m1.parentId = m2.id`
       let result = await connect.execute(statement,[])
       return result[0]
    }
    async menuForUser(id){
        const statement = `SELECT role.id FROM  role JOIN user_role ur ON role.id=ur.roleId JOIN user ON ur.userId = user.id WHERE user.id =?`
     /*    const statement2 = `SELECT role.id as roleId,role.name as roleName,menu.id as menuId, menu.name as menuName,menu.type as menuType,menu.icon as menuIcon,menu.url as menuUrl,menu.parentId as menuParentId FROM  role JOIN role_menu rm ON role.id=rm.roleId JOIN menu ON rm.menuId = menu.id WHERE roleId =?` */
     const statement2 = `SELECT role.id as roleId,role.name as roleName,menu.id  Mid, menu.name ,menu.type ,menu.icon ,menu.url ,menu.parentId  FROM  role JOIN role_menu rm ON role.id=rm.roleId JOIN menu ON rm.menuId = menu.id WHERE roleId =?`
        let result = await connect.execute(statement,[id])
           if(result[0][0].id){
            let result2 = await connect.execute(statement2,[result[0][0].id])
            return result2[0];
           }else{
               console.log('该用户未绑定角色');
           }
       
    }
}
module.exports= new MenuService()