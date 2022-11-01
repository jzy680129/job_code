const fs = require("fs");
const { resolve } = require("path");
const path = require("path")


fs.readFile("node.js\test01.html","utf8",function(res,datastr){
    if(res){
        return console.log("读取文件失败");
    }

    resolveCSS(datastr)
})

function resolveCSS(){
    // 使用正则表达式提取需要的内容


}