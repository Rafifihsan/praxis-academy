const fs = require('fs');
fs.link('https://drive.google.com/uc?id=1rP8SMKcSrZgK3EkCbOCH7nVXzm5e5U1u&export=download',(linkErr,data)=>{
    if(linkErr)throw linkErr;
    console.log(data);
    fs.unlink('https://drive.google.com/uc?id=1rP8SMKcSrZgK3EkCbOCH7nVXzm5e5U1u&export=download',(linkErr)=>{
        if(linkErr)throw linkErr;
    })
});