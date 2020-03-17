function hitunglingkar(){

    var Math_p1 = 22/7;
    var math_p2 = 3.14;
    var pilih = prompt("hiutng luas/keliling");
    var r = prompt("nilai :");

    if(pilih == 'keliling'){
        
        if(r%7 == 0){
            var k_l = Math_p1*2*r;
           document.write(k_1);
        }else if(r%7 != 0){
            var k_2 = math_p2*2*r;
            document.write(k_2);
        
        }
    }else if(pilih == 'luas'){
        if(r%7 == 0){
            var l1 = Math_p1*r*r;
           document.write(l1);
        }else if(r%7 != 0){
            var k2 = math_p2*r*r;
         document.write(k2);
        }
    }else if(pilih != "luas" && pilih !="keliling"){
        alert('salah input');
    }

  

    
}
hitunglingkar();