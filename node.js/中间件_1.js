const express = require("express")
 
const app = express()

//定义一个中间件
const mw_1 = function(req,res,next)
{
    console.log('这里是中间件1');
    
    //转交给下一个中间件或者路由，如果不调用则触发不了中间件后面的函数
    next();
}

const mw_2 = function(req,res,next)
{
    console.log('这里是中no间件2');
    //转交给下一个中间件或者路由，如果不调用则触发不了中间件后面的函数
    
    next();
}
//将mw注册为全局生效的中间件
// app.use(mw_1)
// app.use(mw_2)


app.get('',mw_1,mw_2,(req,res) => {
    res.send("Home page111111")
})

app.get('/',(req,res) => {
    console.log("调用/的路由111");
    res.send("Home page111")
})

app.get('/user',mw_2,(req,res) => {
    res.send("USER page1111")
    console.log(res.a);
})

 
app.listen(8080,()=>
{
    console.log("sever start1111");
})

