const fs = require('fs');
const data = fs.readFile('/novaice/02-04/materi//m1.js',(err,data)=>{
    if(err) throw err;
console.log(data);
});



