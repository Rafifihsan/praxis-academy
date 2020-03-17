function dt_mhs(nama,kelas){
    var nama = nama;
    var kelas = kelas;

    Object.defineProperty(this,"nama",{
        get:function(){
            return nama;
        },
        set:function(nama){
            this.nama = nama;

        }
    }
    
    );

    Object.defineProperty(this,"kelas",{
        get:function(){
            return kelas;
        },
        set:function(kelas){
            this.kelas = kelas;
        }
    })
}

var exe = new dt_mhs("rafif",80);
console.log(exe.nama+" "+exe.kelas);
