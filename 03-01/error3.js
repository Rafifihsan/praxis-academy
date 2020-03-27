function task(qustion){
    let result = prompt(qustion);
    if(result.toLowerCase() == "left")
    return "l";
    if(result.toLowerCase() == "right")
    return "R";
}

function cek(){
    if(task("which way")== "l"){
        return "back to home";
    }else{
        return "back to school";
    }
}

try{
    console.log("you see", cek());
}catch (error)
{
    console.log("something went eror",error);
}