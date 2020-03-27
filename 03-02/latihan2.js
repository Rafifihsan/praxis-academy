let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState==4 && xhr.status == 200){
        let json = this.responseText;
        console.log(json);
    }
}

xhr.open('GET','json.json',true);
xhr.send();