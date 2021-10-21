const Router = require('koa-router');
const router = new Router({prefix:'/menu'})
const {authVerify} = require('../auth/auth.middleware')
const menuController = require('./menuController')
router.post('/list',authVerify,menuController.menuList)
router.post('/init',authVerify,menuController.menuForUser)
module.exports = router