const http = require("http")

const sever  = http.createServer()


sever.on("request",function(req,res){
    //获取地址
    
    const url = req.url;
    console.log(url);
    //设置默认的响应内容为404NOT
    let content = "<h1>404 NOT Found!</h1>"
    //判断用户请求的行为是否为/其他
    if(url === '/' || url ==='/favicom.ico')
    {
        content = "<h1>首页</h1>"
    }
    else if (url === "/about.html")
    {
        content = '<h1>关于页面</h1>'
    }

    //防止中文乱码
    res.setHeader("Content-Type","text/html;charset=utf8");
    //res.end()返回信息
    res.end(content);
})

sever.listen(8080,function()
{
    console.log("服务器正在运行 127.0.0.1:8080端口");
})