// 导入模块
const fs = require('fs')

// 读取文件
fs.readFile("node.js/test01.txt",'utf8',function(err,dataStr){
    //判断是否读取成功
    if(err)
    {
        return console.log('读取文件失败');
    }
    console.log(dataStr);
    //数据按照空格进行分割
    const arrOld = dataStr.split(' ')
    //循环分割数组，对每一项数据进行字符串替换操作
    const arrNew = []
    arrOld.forEach(item =>
        {
            arrNew.push(item.replace('=',':'))
        })
        
    console.log(arrNew);

    //新数组合并数据
    const newstr = arrNew.join('\r\n');
    console.log(newstr);

    //写数据
    fs.writeFile("node.js/成绩.txt",newstr,function(ere)
    {
        if(err)
        {
            return console.log("写入失败",err);
        }
        console.log('写入文件成功');
    })
});