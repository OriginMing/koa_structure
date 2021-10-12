const koa  = require('koa');
const bodyParser = require('koa-bodyparser')
const {userRouter} = require('../router/userRouter')
const app = new koa();

app.use(bodyParser())

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())


module.exports = app;

