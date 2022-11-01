/**
 * npm是第三方包
 * 
 * npm安装包的方式和pip基本是一致的
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
