/**
 * npm是第三方包
 * 
 * npm安装包的方式和pip基本是一致的
 * 
 * npm包下载好之后，都会放在一个叫做nodejs_module的模块中
 * package-lock.json用来记录目录下的每一个包的下载信息
 * 可以用@指定包的版本
 * 
 *大版本+功能增加+BUG修复

npm init -y:在执行命令所在目录创建一个包管理文件

    "dependencies"：记录包的内容
    安装所有包：
        npm install /npm -i 一次性安装全部包,会读取package包的节点和版本号，直接自动下载
    卸载包：
        npm uninstall 具体包名

    devDependencies:
        直接开发阶段用到的包
        npm install 包名 -D/--save-dev

重新设置npm下载源：
    npm config get registry 查看当前下载源
    npm config set registry=地址 切换
    

    nrm 切换下载服务器

包的分类和规范包的结构
    node_modules目录中的包都是项目包
    项目包：
        1.开发依赖包
        2.核心依赖包
    全举报
        install -g 安装位全举报
        默认所有项目可以用这个包

i5ting_oc:可以把md转为html的小工具

自己创建包：
    包名-tools：
    包括文件:
        packge.json（包管理配置文件）
        index.js(包的入口文件)
        README.md(包的说明文档)
    
    ...向外暴露自己内部属性=包级别的

    加载模块的时候优先从换从加载的
        
 */
//自己写的时间的包
// const DateTime = require("./格式化时间")
// const dt = new Date();
// console.log(DateTime.dateFormat(dt));

const moment = require("moment/moment");


//使用第三方包

//一般名字保持一致
// const moment = require(moment)

const dt = moment().format("YYYY-MM-DD HH:mm:ss")

console.log(dt);
