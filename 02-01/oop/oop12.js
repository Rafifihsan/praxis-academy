class mahasiswa{

    data1(){
        var nama;
        var kelas;
    }
    get_nama(){
       return this.nama;

    }
    sett_nama(){
       
        this.nama = a;
    }
    get_kelas(){
        return this.kelas;
    }
    set_kelas(){
       
        this.kelas = b;
    }

}

var exe = new mahasiswa();
var a = prompt("masukan nama");
var b = prompt("masukan kelas");
exe.sett_nama(a);
exe.set_kelas(b);
console.log(exe.get_nama()+""+exe.get_kelas());