const connect  = require('../app/database')
class AuthService{
    async login(user){
        const {name,password} = user
        const statement = `SELECT * FROM user WHERE name=? && password=?`
        let  result =await connect.execute(statement,[name,password]);
        return result[0]
    }
}
module.exports = new AuthService()