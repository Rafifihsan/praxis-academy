var kata = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    "bawang"]
]);


function tambah(){
    var a = document.getElementById('id').Value;
    var b= document.getElementById("id1").Value;
    console.log(a);
    kata.set(add1,add2);
    console.log(kata);
    console.log(kata.get(add1));
   
}



function cari_kata(mapp){

    var c = document.getElementById("demo").value;
    alert(kata.get(c));

}

cari_kata();



