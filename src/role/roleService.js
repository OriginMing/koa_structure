const connect = require('../app/database')
class MenuService{
    async roleList(){
        const statement = `SELECT * from role`
       let result = await connect.execute(statement,[])
       return result[0]
    }
    async roleByUser(id){
        const statement = `SELECT role.name,role.id FROM  role JOIN user_role ur ON role.id=ur.roleId JOIN user ON ur.userId = user.id WHERE user.id =?`
        let result = await connect.execute(statement,[id])
        return result[0];
    }
}
module.exports= new MenuService()