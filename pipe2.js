var http = require('http')

var fs = require('fs')

var server = http.createServer(function(req,res){
    console.log('request was made: ')
    res.writeHead(200,{'content-type':'text/plain'})
    var myReadStream = fs.createReadStream(__dirname + '/readMe1.txt','utf8')
    myReadStream.pipe(res)
})

server.listen(3000, '127.0.0.1')
console.log('yo, listening to port 3000')
