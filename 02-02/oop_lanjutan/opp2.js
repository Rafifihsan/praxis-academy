class hitung{
    perkalian(panjang,lebar){
        this.panjang = panjang;
        this.lebar = lebar;
    }

    get hitung_p(){
       return this.hasil();
    }
    hasil(){
        return this.panjang * this.lebar;
    }
}

const s= new hitung(100,10);
console.log(s.hitung_p);
