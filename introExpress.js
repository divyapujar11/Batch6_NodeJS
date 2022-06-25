var expre = require('express')

var app = expre()

app.get('/', function(req, res){
    res.send('this is homepage')
})

app.get('/contact', function(req, res){
    res.send('this is contact page')
})

app.listen(3000)