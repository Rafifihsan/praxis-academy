function hitungcemilan(){
    /*data sehari*/
    let  keb_hari = 10;
    let total = 2540;
    
    /*perhitungan untuk menentukan*/
    let pilih = prompt(" usia / jajan");

   

    if(pilih == "usia"){
        let usia = prompt("masukan usia anda dalam tahun");
        var tahunn = 365;
        let kebutuhanmu = usia*tahunn;
        /*mencari*/
        let cari = kebutuhanmu * keb_hari;
        document.write("kebutuhan mu sesuai umur adalah" + cari+ "biji" );  

    }else if(pilih == "jajan"){
        let stok_jajan = prompt("masukan jumlah jajan");
        if(stok_jajan != null){
            
            document.write("jumlah jajan anda" + stok_jajan)
            document.write("<br>");
            var hitung_kebutuhan = stok_jajan/keb_hari;
            document.write("bisa digunakan dalam jumlah/hari" + hitung_kebutuhan + "hari");
            /*lonversi ketahun*/
    
            var tahun1 = 365;
            var tahun = hitung_kebutuhan/tahun1;
            document.write("<br>");
            let hasil = document.write("bisa digunakan dalam berapa tahun: " + tahun.toString().substring(0,5) + "tahun" );

           
    
            }else{
            document.write('saalah');
            }
    }
    
    




}
hitungcemilan();