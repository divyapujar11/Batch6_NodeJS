var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname + '/readMe1.txt','utf8')
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe3.txt')

myReadStream.pipe(myWriteStream)