var fs = require('fs')

// createReadStream() - open up file/stream and read data prsent in it 

var myReadStream = fs.createReadStream(__dirname + '/readMe1.txt','utf8')

// chunk - fragment of data that is sent to sever by the client
myReadStream.on('data', function(chunk){
    console.log('new chunk received : ')
    console.log(chunk) 
    
})