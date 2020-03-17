const regex_1= /[\w-]+@([\w-]+\.)+[\w-/]+$/i;
const regex_2= /([^@']*)/;
const regex_3= /[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}/;
function cek_email(){
    var get_id = document.getElementById("demo").value;
;
const regex_1= /[\w-]+@([\w-]+\.)+[\w-/]+$/i;
const regex_2= /([^@']*)/;
const regex_3= /[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}/;
    var exe = regex_1.exec(get_id);
    var exe1 = regex_2.exec(get_id);
    var exe2 = regex_3.exec(get_id);
    
   if(get_id){

         if(exe && exe1 && exe2){
                alert('benar');
            }else{
                var cek = prompt('email salah, masukan lagi?');
                if(cek == exe && exe1 && exe){
                    alert('benar');
                }
            }

   }else if(!get_id ){
    alert('email kosong');

   }
 
}
cek_email();