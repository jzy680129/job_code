//自定义中间件
//手动实现urlencoded
//当有数据传送过来的时候会触发data事件
//数据传送完毕之后会触发end事件

const express  = require("express");
const app = express()

app.use(function(res,req)
{
    //定义中间件的业务逻辑，解析表单数据
    //在中间件需要监听req的data事件，来获取客户端发送的数据
    //数据量较大的时候，可能会把数据切割发送
    //用str记录发送过来的数据
    let str = ''
    //监听事件,只要有数据来，就会触发事件
    req.on('data',(chunk) =>{
        str+=chunk
    })
    //监听end事件

    //querysting  是专门用来处理查询字符串，通过parse()模块可以轻松处理字符串
    req.on('end',()=>
    {
        console.log(str);

    })
})


app.post("/user",(req,res)=>{
    res.send("ok")
})

app.post('/',()=>
{
    res.send("post")
})
app.get("",(req,res)=>{
    res.send("GET")
})

app.listen(8080,function()
{
    console.log("自定义中间件服务器测试启动变形");
})