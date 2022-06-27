var bodyParser = require("body-parser")

var mongoose = require('mongoose')

mongoose.connect('mongodb+srv://divyapujar11:divya.106@cluster0.ag0ep.mongodb.net/todo')

var todoSchema = new mongoose.Schema({
    item:String
})
var Todo = mongoose.model('Todo', todoSchema)
var item1 = Todo({item: 'buy flowers'}).save(function(err){
    if(err) throw err 
    console.log('item saved')
})

var data = [{item:'get milk',item:'walk dog',item:'do coding'}]
var urlencodedParser = bodyParser.urlencoded({extended:false})

module.exports = function(app){
app.get('/todo', function(req,res){
    res.render('todo', {todos: data})
})

app.post('/todo', urlencodedParser, function(req, res){
    data.push(req.body)
    res.json(data)
})

app.delete('/todo/:item', function(req, res){
    data = data.filter(function(todo){
        return todo.item.replace('/ /g', '-') !== req.params.items
    })
    res.json()
})
}
