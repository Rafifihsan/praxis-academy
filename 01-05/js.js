let kata =  new Map([
    
    ["car" , "mobil"],
    ["book" , "buku"],
    ["drink" , "minum"]

]);

function simpan() {		
    let a = tambah_kata();
    document.write(a);
    
   
} 
simpan();

function cari_kata(){
    let a = document.getElementById("cari").value;
    console.log(a);
   alert(kata.get(a));
  
}
cari_kata();

function tambah_kata(){
    let a = document.getElementById("tambah").value;
    let b = document.getElementById("tambah_kata").value;
    console.log(kata);
    kata.set(a,b);
    console.log(kata.get(a));

}
tambah_kata();