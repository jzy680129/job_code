const express = require("express")
//创建对象
const app = express();
//导入路由模块
const router  = require("./apiRouter")

//配置解析表单
app.use(express.urlencoded({extended:false}))
//响应jsonp格式
app.get("/api/jsonp",(req,res)=>
{
    const funcname = req.query.callback

    const data = {name:'zs',age:22}
    //拼接字符串
    const strscript = JSON.stringify(data);
    res.send(strscript)
})
//在路由之前配置cors解决跨域问题
const cors = require("cors")
app.use(cors())
//路由模块注册到apcd
app.use("/api",router)

//创建API路由模块

//CORS跨域问题共享
     
//启动服务器
app.listen(80,function(){
    console.log("http://127.0.0.1 sever start");
})