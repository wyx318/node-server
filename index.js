var http = require('http');
var server = http.createServer(function(req,res){

    // 设置响应消息头
    res.setHeader("Content-Type","text/html; charset=utf-8")
    // console.log('老铁')
    res.write('<h1>老王加油</h1>');
    res.end();
})

server.listen(9090);