function animal(classname){
    this.classname = classname;
}
 
animal.prototype.getClass = function(){
    return 'animal class is : ' + this.classname;
}

function duck(nama){
    this.nama = nama;

}

function dog(name){
    this.name = name;
}

dog.prototype = animal.prototype;
duck.prototype = animal.prototype;

duck.prototype.getNama = function(){
    return this.nama;
}

dog.prototype.getName = function(){
    return this.name;
}

var d = new dog('lalala');
var d2 = new duck('hahaha');
console.log(d);
console.log(d2);