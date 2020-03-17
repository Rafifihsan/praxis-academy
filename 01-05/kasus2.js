

var lib = [
    {name: 'apples', arti: 'apel'},
    {name: 'bananas', arti: 'pisang'},
    {name: 'book', arti: 'buku'},
    {name: 'pen', arti: 'pena'}
];


var b = prompt('masukan kata, eng=>IND');
function kamus(kata) { 
   
    
    return (kata.name ===b);
    
   
}

var a = JSON.stringify(lib.find(kamus));
document.write(a);