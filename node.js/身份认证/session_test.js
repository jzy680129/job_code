 const express = require("express")

 const app = express()
//载入中间件
 const session =require("express-session")
// 配置session认证
app.use(
    session({
        secret:'itheima',
        resave:false,
        saveUninitialized:true,
    })
)
//解码
app.use(express.urlencoded({extended:false}))

app.post("api/login",(req,res)=>{
    //判断用户的登录密码是否正确
    if(req.body.username!=='admin'||req.body!=='000000')
    {
        return res.send({status:1,msg:"登录失败"})
    }
    
    //登录成功

    //只有成功配置了session中间件之后，才能够通过req点出来session这个属性
    req.session.user = req.body;//用户信息
    req.session.islogin = true//登录状态



    res.send({status:0,msg:'登录成功'})
})
app.get("/api/username",req,res=>{
    //从session中获取用户的名称，响应给客户端
    if(!req.session.islogin)
    {
        return res.send({status:1,msg:'fail'})
    }
    res.send({
        status:0,
        msg:'success',
        username:req.session.uesr.username,
         
    })
})  

app.post('api/logout',(req,res)=>{
    req.session.destroy()
    res.send({
        status:0,
        msg:'退出登录成功  '
    })
})