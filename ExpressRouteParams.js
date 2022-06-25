var expre = require('express')

var app = expre()

app.get('/', function(req, res){
    res.send('this is homepage')
})

app.get('/contact', function(req, res){
    res.send('this is contact page')
})

app.get('/profile/:id', function(req,res){

    //params: requests string,id

    res.send('you requested to see the profile with id of : '+ req.params.id)
})

app.get('/profile/:name',function(req,res){
    res.send('you resquested a profile with a name of : '+ req.params.name)
})

app.listen(3000)