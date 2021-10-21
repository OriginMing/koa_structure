const jwt = require('jsonwebtoken')
const {PRIVATE_KEY} = require('../app/config')
const status = require('../constant/status')
class AuthController{
    async auth(ctx,next){
      const token = jwt.sign(ctx.user,PRIVATE_KEY,{
        expiresIn:1*60*60*24,
        algorithm:'RS256'
      })
      let data = {id:ctx.user.id,name:ctx.user.name,token:token}
      ctx.body =Object.assign({data},status.loginSuccessStatus)
    }
}
module.exports = new AuthController()