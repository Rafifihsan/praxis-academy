export class lib{
   

   constructor(){

    var makan;
    var bahagia;
    var sedih;
    var kelelahan;
      
    }
    get_makan(){
        return this.makan;
        

    }
    set_makan(){
        this.makan = parseInt(a);
        var kondisi_kucig_lapar = 20;
        if(this.makan){
        var b= this.makan + kondisi_kucig_lapar;
        console.log("kekenyangan saat ini : " + b );
            if(b<60){
                console.log("kucing lapar");
            }else if(b>60){
                console.log("kucing kucing kenyang");
            }
        
        }
    }
    get_bahagia(){
        return this.bahagia;
    }
    set_bahagia(){
       let b = prompt("kucing butuh game ,pilih game : bola/lidi/human");
       let mood_kucing = this.bahagia = parseInt(a);
       let pilih_game = b;
       let bola = 30;
       let lidi = 25;
       let human = 27;
       if(mood_kucing){

            if(b == "bola"){
                let c=  mood_kucing + bola;
                console.log(c + "mood saat ini");
                if(c>60){
                    console.log("kucing bahagia");
                }else if(c<60){
                    console.log("kucing butuh mainain");
                }
            }else if(b == "lidi"){
                let d=  mood_kucing + lidi;
                console.log(d + "mood saat ini");
                if(d>60){
                    console.log("kucing bahagia");
                }else if(d<60){
                    console.log("kucing butuh mainain");
                }
            }else if(b == "human"){
                let e=  mood_kucing + human;
                console.log(e + "mood saat ini");
                if(e>60){
                    console.log("kucing bahagia");
                }else if(e<60){
                    console.log("kucing butuh mainain");
                }
            }else if(!b){
                let f = mood_kucing - 20;
                console.log("anda tidak memberi game maka mood berkurang menjadi"+" "+ f);   
            }


       }else if(!mood_kucing){
            
       }




    }

    get_kelelahan(){
        return this.kelelahan ;
       

    }
    set_kelelahan(){

        let aa = this.kelelahan= parseInt(a);
        let b = prompt("aktifas kucing berapa jam");
        let aktivatias_2_jam = -30;
  
        let aktivitas_kucing = prompt("kucing hari ini beraktivitas brp jam");
        if(aa){
            if(b>2){
                    console.log("aktivitas kucing" + b + "jam");
                    console.log("kucing kelelahan");
            }else if(b<2){
                console.log("kucing tidak lelah")
            }
        }else if(!aa){
            console.log("undefined")
            
        }

    }

    get_sedih(){
        

    }
    set_sedih(){
        
        let a = this.sedih = parseInt(a);
    }


}

let exe = new lib();
let nama = prompt("masukan nama kucing");
console.log(nama);
var a = prompt("masukan nilai untuk kondisi kucing");
exe.set_makan(a);
exe.set_bahagia(a);
exe.set_kelelahan(a);
exe.sedih(a);


