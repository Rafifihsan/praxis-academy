function name_scrt(fname,lname){
    this.lname = lname;
    this.fname = fname;
}

name_scrt.prototype.company = "pt maju mundur"

var name_scrt_1 = new name_scrt("rafif","jaya");
var name_scrt_2 = new name_scrt("celse","puri");

console.log(name_scrt_1.fname + "" + name_scrt_1.lname+" "+name_scrt_1.company);