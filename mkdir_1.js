var fs = require('fs')

fs.mkdir('Sample', function(){
    fs.readFile('readMe.txt','utf8', function(err, data){
        fs.writeFile('./Sample/writeMe2.txt',data)
    })
})