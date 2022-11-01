const http = require("http")

const fs = require("fs")

const path = require("path")

// 创建web服务器
const sever = http.createServer();

//监听事件
sever.on("request",function(req,res)
{
    //获取URL地址，把路径设置到具体路径 
    const url = req.url;
    // //__dirname：是当前服务器的目录
    // const fpath = path.join(__dirname,+url)
    const fpath = path.join(__dirname,url)
    //直接作为首页
    
    console.log(fpath);
    //读取文件内容并响应给服务器
    fs.readFile(fpath,'utf8',function(err,dataStr)
    {
        //读取失败响应404
        if(err) return res.end("404 NOT found!")

        res.end(dataStr)
    })
    
})
//启动服务器

sever.listen(8080,function()
{
    console.log('http://127.0.0.1:8080服务器已经启动');
})