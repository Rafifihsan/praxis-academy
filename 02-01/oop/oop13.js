class data_mhs {

    const_mhs(){
        var nama;
        var alamat;
        var kelas;
        var semester;
        
    }
    get_nama(){
        return this.nama;
    }
    set_nama(){
        this.nama = a;
    }

    get_alamat(){
        return this.alamat;
    }
    set_alamat(){
        this.alamat = b;
    }
    get_kelas(){
        return this.kelas;
    }
    set_kelas(){
        this.kelas = c;
    }
    get_semseter(){
        return this.semester;

    }
    set_semester(){
        this.semester = d;
    }

   


}


let exe = new data_mhs();
var  a= prompt("masukan nilai nya");
var  b= prompt("masukan nilai nya");
var  c= prompt("masukan nilai nya");
var  d= prompt("masukan nilai nya");
exe.set_nama(a);
exe.set_alamat(b);
exe.set_kelas(c);
exe.set_semester(d);
console.log("nama saya :" + exe.get_nama()+"<br>"+"alamat saya :"+exe.get_alamat()+"<br>"+"prodi :"+exe.get_kelas()+"<br>"+"semsester"+exe.get_semseter());
