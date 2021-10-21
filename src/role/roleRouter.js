const Router = require('koa-router');
const router = new Router({prefix:'/role'})
const {authVerify} = require('../auth/auth.middleware')
const roleController = require('./roleController')
router.post('/list',authVerify,roleController.roleList)
router.post('/rolebyuser',authVerify,roleController.roleByUser)
module.exports = router