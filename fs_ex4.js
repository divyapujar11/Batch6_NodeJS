var fs = require('fs')

fs.readFile('readMe.txt','utf8',function(err,data){
    fs.writeFileSync('writeMe1.txt',data)
})

