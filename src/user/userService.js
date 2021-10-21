const connect  = require('../app/database')
class UserService{
    async create(user){
        const {name,password} = user
        console.log('insert');
        const statement = 'INSERT INTO	user(name,password) VALUES (?,?) '
        const result =  await connect.execute(statement,[name,password])
        //将user存储到数据库中
        return result
    }
    async getUserByName(name){
        const statement = 'SELECT * FROM user WHERE name = ?'
        const result =  await connect.execute(statement,[name])
        return result[0]
    }
}
module.exports=new UserService()