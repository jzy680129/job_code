
const express = require("express")

const router = express.Router()
//暴露给外部访问，并挂载对应的路由

//配置表单解析中间级


router.get('/get',(req,res) =>{
    //req.query获取客户端查询字符串，发送字符串内容

    const query = req.query

    //返回数据
    res.send({
        status:0,
        msg:"get成功",
        data:query 
    })
}) 
//定义post结构
router.post('/post',(req,res)=>{
    //通过req.body 获取请求体中包含的url-enconded 格式数据
    const body = req.body
    //调用res.send()方法响应客户
    res.send({
        status:0,
        msg:"post成功",
        data:body
    })
})
router.delete('/delete',(req,res)=>{
    //通过req.body 获取请求体中包含的url-enconded 格式数据
    const body = req.body
    //调用res.send()方法响应客户
    res.send({
        status:0,
        msg:"delete成功",
        data:body
    })
})

module.exports = router