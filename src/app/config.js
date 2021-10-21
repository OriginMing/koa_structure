const dotenv =require('dotenv')
const path = require('path')
const fs = require('fs')
dotenv.config();//将env的数据加载到process.env中
const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname,'./key/private.key'))

const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname,'./key/public.key'))
module.exports={
    APP_PORT,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_ROOT,
    MYSQL_PASSWORD
}=process.env
module.exports.PRIVATE_KEY = PRIVATE_KEY
module.exports.PUBLIC_KEY = PUBLIC_KEY
