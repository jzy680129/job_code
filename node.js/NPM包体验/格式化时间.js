//格式化时间的方法
function dateFormat(dtStr)
{
    const dt = new Date(dtStr);

    const y = padZeor(dt.getFullYear());
    const m = padZeor(dt.getMonth());
    const d = padZeor(dt.getDate());
    const hh = padZeor(dt.getHours());
    const mm = padZeor(dt.getMinutes());
    const ss = padZeor(dt.getSeconds());

    return y+m+d+' '+hh+':'+mm+':'+ss
}

//定义补领函数
function padZeor(n){
    return n > 9?n:'0'+n;
}

module.exports = {
    dateFormat
}