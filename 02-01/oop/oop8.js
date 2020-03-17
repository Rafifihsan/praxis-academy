class companyName
{
    constructor(){
        var c = prompt("masukan company");
        this.company = c;
    }
}

class emply  extends companyName{
    constructor(id,name,state){
        super();
        this.id=id ;
        this.name =name ;
        this.state = "indonesia";
    }
}
var a = prompt("masukan id");
var b = prompt("masukan nama");
var exe = new emply(a,b,this.state);
console.log(exe.id+" "+exe.name+" "+exe.company+" "+exe.state);