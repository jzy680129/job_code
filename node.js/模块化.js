/*
当require加载模块的时候，会自动的执行内部的模块

模块的莫作用域
    和函数的作用域相同，在自定义模块中的变量、方法等成员，只能在当前模块的内部访问，叫做模块级别的作用域

modul对象
    在每个.js自定义的模块中，都有一个modul对象，存储了和当前模块有关得信息：

modul.exports:
    在自定义的模块中，可以使用module.exports对象，将模块共享出去，供外界使用

    当require导入模块的时候，其实用的就是modul.exports的模块内容

    module.exports就是一个内置对象，可以定义方法和属性供外部访问


exports对象
    默认情况下exports和modul.exports指向同一个对象，最终共享结果

commonJS 规定了模块的特性和模块之间如何依赖转换
    1.每个内部module变量表示当前模块
    2.module变量是一个对象，它的export属性是对外的接口
    3.加载模块用require
*/

// const ex = require("./export.js")

// console.log(ex);