const app = require("./app")
const config = require('./app/config')
require('./app/database')
app.listen(config.APP_PORT,()=>{
    console.log(`service running~in ${config.APP_PORT} `);
})