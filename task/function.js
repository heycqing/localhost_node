var path = require('path');
var config = require('../server_config/index.config')
module.exports = {
    isImg: function(filepath){
        var theFile = path.extname(filepath);
        theFile = theFile ? theFile.slice(1) : 'unknown';
        return config.isImg.indexOf(theFile) !== -1 ? true : false
    },
    setContentType: function(filepath){
        var theFile = path.extname(filepath);
        theFile = theFile ? theFile.slice(1) : 'unknown';
        var contentType = config.MIME_TYPE[theFile] || "text/plain";
        return contentType
    }
}