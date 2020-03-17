function usiaanjing(){
    
    let pilih = prompt("plih manusia/anjing : ");
    if(pilih == "anjing"){
        var umur = prompt("hitung usia manusia ke usia anjing, masukan usia manusia :"); 
        console.log(umur);
        var manusia = 7;
        var hitung = umur*manusia;
        document.write("hasil usia adalah :" + hitung +"tahun anjing");

    }else if(pilih == "manusia")/*konvert anjing manusia ke usia manusia*/
    {
        var umurr = prompt("hitung usia anjing ke tahun manusia, masukan usia anjing ");
        var anjing = 0.14;
        var hitung_ = umurr*anjing;
        document.write("hasil usia adalah" + hitung_ + "tahun manusia");

    }else{
        document.write(' ');
    }
}
usiaanjing();