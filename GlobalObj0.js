const { times } = require("lodash");

console.log('welcome to node.js')
 
setTimeout(function(){
    console.log('3sec have passed');
 },3000);

var time=0;

 setInterval(function(){
    time +=2;
    if(time>5){
        clearInterval(time);
    }
    console.log(time + ' sec have passed');
    
 },2000);
