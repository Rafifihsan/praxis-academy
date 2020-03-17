
for(var i=0; i<=100;i++){
    if(i%3==0 && i%5==0 ){
        console.log(i + 'fizbas');
    }else if(i%5==0){
        console.log(i+ 'bass');
    }else if(i%3==0 ){
        console.log(i+ 'fizz');
    }else{
        console.log(i);
    }
}