const fs  = require('fs')
let allFile = [];
//递归获取文件夹下的所有文件
//传入文件路径
module.exports =  function getDirFile(path){
    //读取路径下的文件名
    let dirnames = fs.readdirSync(path)
    
    dirnames.forEach(item=>{
        //合并为文件路径
     let path2 = path+'\\'+item
     //判断是否为文件，是文件返回，文件夹递归调用
     let stats =  fs.statSync(path2)
    if(stats.isFile()){
        allFile.push(path2);
    }else{
        getDirFile(path2)
    }

})
return allFile;
}