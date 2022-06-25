var express = require('express')

var app = express()

app.set('view engine','ejs')
app.use('/assets', express.static('stuff'))

app.get('/', function(req,res){
    res.render('index')
})

app.get('/contact', function(req,res){
    res.render('contact')
})

app.get('/profile/:name', function(req,res){
    var data = {age: 89, job: ninja, hobbies:['eat','fight','repeat']}
    res.render('profile1', {person: req.params.name, data : data})
})

app.listen(3000)
console.log('yo, listening to port 3000')