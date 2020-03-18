import {lib} from './kasusjs.js';

let exe = new lib();
let nama = prompt("masukan nama kucing");
console.log(nama);
var a = prompt("masukan nilai untuk kondisi kucing");
exe.set_makan(a);
exe.set_bahagia(a);
exe.set_kelelahan(a);
exe.sedih(a);

