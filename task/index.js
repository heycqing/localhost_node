var fs = require('fs');
var untilFn = require('./function.js')

function server404(res, err){
    res.writeHead( 404 ,{
        'content-type' : 'text/html;charset="utf-8" '
    });
    res.write('<h1>404错误，找不到页面</h1><p>'+err+'</p>');
    res.end();
}

module.exports = {
    readText: function(filePath, res){
        fs.readFile(filePath, 'utf8',function(err,data){
            if(err){
                server404(res,err)
            }else{
                res.writeHeader(200,{
                    'content-type' : untilFn.setContentType(filePath)
                });
                res.write(data);
                res.end();
            }   
        })
    },
    readImg: function(filePath, res){
        fs.readFile(filePath,'binary',function(err,  data)  {
            if  (err)  {
                server404(res,err)
                return;
            }else{
                res.writeHeader(200,{
                    'content-type' : untilFn.setContentType(filePath)
                });
                res.write(data,'binary');
                res.end();
            }
        });
    },
   
}