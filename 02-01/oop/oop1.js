var kendaraan = function (warna,roda) {
    this.warna = warna;
    this.roda = roda;
}

var mobil = function (warna,roda) {
    kendaraan.call(warna)
    kendaraan.call(roda)
    var roda = 2
    
}

mobil.prototype = Object.create(kendaraan.prototype);
mobil.prototype.constructor = mobil;





console.log(mobil.warna)
console.log(mobil.roda)
