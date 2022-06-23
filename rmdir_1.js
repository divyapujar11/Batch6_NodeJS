var fs = require('fs')

fs.unlink('./Sample/writeMe2.txt',function(){
    fs.rmdir('Sample')
})