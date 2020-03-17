function myBio(nama,hobi,YearOfbirth){
    this.nama = nama;
    this.hobi = hobi;
    this.YearOfbirth = YearOfbirth;
}

myBio.prototype.Calculate= function(){
    console.log("umur saya "+" " + (2019 - this.YearOfbirth));
}
console.log(myBio.prototype);

let bio = new myBio("rafif ihsan jaya","membaca",1992);
console.log(bio);

bio.Calculate();
