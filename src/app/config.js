const dotenv =require('dotenv')
dotenv.config();//将env的数据加载到process.env中
module.exports={
    APP_PORT
}=process.env

