function hitungsuhu(){
    let suhu = prompt("ketik fahrenhit/celsius");
    let nilai = prompt("masukan nilai suhu");

    if(suhu == "celsius"){
        var c_to_f = (nilai*9)/5 + 32;
        document.write("hasil :" + c_to_f);
    }else if(suhu == "fahrenheit"){
        var t_to_C =  ((nilai - 32)*5)/9;
        document.write(t_to_C);
    }else{
        alert('end');
    }


}

hitungsuhu();