//导入ex
const express = require("express");

const app = express();

//导入模块
const jwt = require("jsonwebtoken")

const expressJWT = require("express-jwt")

//定义秘钥

//允许跨域资源
 const cors = require('cors')
 app.use(cors())
//解析post表单数据的中间件
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:false}))

//定义sercet秘钥
const sercetKey  = 'ab680129';

//在登录之后生成JWT字符串
//jwt对象：参数1:用户的信息对象，参数2：加密的秘钥,参数3:配置对象，可以配置当前的token的有效期

jwt.sign()

