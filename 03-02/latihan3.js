const data = {username : "rafif"};

fetch('https://example.com/profile',{
    method: 'post',
    headers:{
        'Content-Type' : 'aplicatiom/json',
    },
    body : JSON.stringify(data),
})

.then((response)=> response.JSON())
.then((data)=>{
    console.log('succes',data);
})
.catch((error)=>{
    console.error('error:',error);
})