function myFunction() {
  var x = document.getElementById("demo").value;
  //console.log(x);
  var regex = /^[a-zA-z]{1,2}\s?\d{1,4}\s?[a-zA-Z]{1,3}$./
  var cek = regex.exec(x);

  if(x != null){

    if(cek){
      alert('bykan plat inod')
    }else if(!cek){
      var comment = "ini plat indo";
      alert(comment);
    }

  }else if(x==null ){
    var ulangi = prompt('please im[ut ');
    alert(ulangi);
  }


}
myFunction();