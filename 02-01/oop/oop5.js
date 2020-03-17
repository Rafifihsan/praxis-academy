function myName(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
};

myName.prototype.fullName = function(){
     console.log(this.firstname +" "+ this.lastname);
}

let name1 = new myName("rafif","jaya");
let name2 = new myName("asu","koe");

name1.fullName();
name2.fullName();