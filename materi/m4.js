const fs = require('fs');
fs.readFile('/novaice/02-04/materi//m1.js',(readFileErr,data)=>{
    if(readFileErr)throw readFileErr;
    console.log(data);
    fs.unlink('/novaice/02-04/materi//m1.js',(unlinkErr)=>{
        if(unlinkErr) throw unlinkErr;
    })
});
