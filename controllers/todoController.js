var bodyParser = require("body-parser")

var mongoose = require('mongoose')

mongoose.connect('mongodb+srv://divyapujar11:divya.106@cluster0.ag0ep.mongodb.net/todo')

var todoSchema = new mongoose.Schema({
    item:String
})
var Todo = mongoose.model('Todo', todoSchema)


// var data = [{item:'get milk',item:'walk dog',item:'do coding'}]
var urlencodedParser = bodyParser.urlencoded({extended:true})

module.exports = function(app){
app.get('/todo', function(req,res){
    Todo.find({}, function(err, data){
        if(err) throw err;
        res.render('todo', {todos: data})
    })
    
})

app.post('/todo', urlencodedParser, function(req, res){
    var newTodo = Todo(req.body).save(function(err,data){
        if (err) throw err;
        res.json(data)
    })
})

app.delete('/todo/:item', function(req, res){
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
        if(err) throw err
        res.json(data)
    })
    data = data.filter(function(todo){
        return todo.item.replace('/ /g', '-') !== req.params.items
    })
})
}
