module.exports=function  handleMenu(result) {

   let needDelete = [] ;//记录哪些为子菜单，需要删除
//循环遍历将子菜单放在对应的父菜单下面
result.forEach(item=>{
    if(item.parentId){
     result.forEach(item2=>{
         if(item2.id == item.parentId && item.name!=item2.name){
             delete item.parent;
             item2.children = item;
             needDelete.push(item.id)
         }
     })
    }else{
        delete item.parent
        delete item.parentId
    }
})
//删除子菜单
needDelete.forEach(item=>{
 result.forEach((item2,index)=>{
     if(item2.id == item){
         result.splice(index,1)
     }
 })
})
console.log(result);
return result
}