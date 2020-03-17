var angka = [1,2,4,5,6,6,4,3,6,34]
var sort = [];

for(var i =0; i < angka.length; i++){
    if(angka[i] %2 == 0 ){
        sort.push(angka[i]);
    }
}
console.log(sort);