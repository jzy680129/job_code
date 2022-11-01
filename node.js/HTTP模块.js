/*
http模块是 nodejs提供的模块，用来创建web服务器模块
通过http:http.careateSever()的方法串

    域名：
        代替ip地址的概念
        ip和域名对应的关系存放在了DNS服务器，DNS就是负责域名和IP的转换

        127.0.0.1代表自己

    端口号：
        程序的识别号 80端口可以被省略 80

    创建基本的web服务器
    导入模块

    创建对象

    为服务器绑定erquest事件，监听客户端请求

    启动服务器

    req请求对象:
        req是请求对象，包含了与客户端相关的数据和属性

    res响应对象：
        res.end()
        向客户端发送指定内容

    返回中文乱码问题
        调用res.setHeader() 方法设置contentType响应头，解决中文乱码问题

    
    根据不同的URl内容，响应不同的内容

 */
const http = require("http") 

const sever = http.createServer()

sever.on('request',function(req,res)
{
    console.log("服务器被访问中");
    // 客户端的请求地址
    const url = req.url;
    //req.method 是客户端请求的method类型
    const method = req.method;


    const str = 'URl 是 is '+url+',method '+method;

    
    console.log(str);

    // 防止中文乱码，设置响应头
    res.setHeader("Content-Type","text/html;charset=utf8")
    res.end(str);



})
//启动服务器

sever.listen(8080,function()
{
    console.log("sever 运行在127.0.0.1");
})