var events = require('events')

var util = require('util')

var Person = function(name){
    this.name = name 
}

util.inherits(Person, events.EventEmitter)
var james = new Person('james')
var mary = new Person('mary')
var rue = new Person('rue')
var people = [james,mary,rue];

people.forEach(function(Person){
    Person.on('speak', function(mssg){
        console.log(Person.name+' said : '+mssg)
    })
})

james.emit('speak','hey dudes')
mary.emit('speak','i want curry')
