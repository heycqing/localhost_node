var http = require('http');
var colors = require('colors');

var config = require('./server_config/index.config.js')
var untilFn = require('./task/function.js')
var task = require('./task/index.js')


let count = 0 

function http_server(req,res){
    console.log (colors.green("本地 server 第"+(count++)+"次启动....\n"));
    var filePath = config.baseConfig.tureUrl(req.url);  
    untilFn.isImg(filePath) ? task.readImg(filePath, res) : task.readText(filePath, res)
}

http.createServer(http_server).listen(config.baseConfig.prot);

console.log('在浏览器中输入: ' +colors.blue(`http://localhost:${config.baseConfig.prot}/index.html\n`))
