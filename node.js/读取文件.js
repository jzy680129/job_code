const fs = require('fs')
const path = require('path')
//读取文件,写文件
/*
中括号括起来的都是可选参数，其他是必选参数
fs.readFile(path,[,options],fs) 
    1.路径名
    2.编码格式
    3.回调函数
fs.writeFile(file,data[,options],callback)的语法格式
    1.路径
    2.内容
    3.什么方式写入
    4.回调函数


在提供路径的时候，使用相对路径可能导致拼接错误，使用绝对路径就能解决问题

__dirname:代表文件所处的目录,可以根据文件目录+相对目录进行拼接
*/

// fs.readFile('node.js/test01.txt','utf-8',function(err,dataStr)
// {
//     // err和dataStr，读取失败成功都会有一个为NULL
//     console.log(err);
//     console.log("-----");
//     console.log(dataStr);
// })

// fs.writeFile('node.js/test02.txt','jzy','utf-8',function(err){
//     console.log(err);
// })
/**/