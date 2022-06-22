function callFunction(fun){
    fun()
}

var sayBye = function(){
    console.log('Byeee')
}

callFunction(sayBye)