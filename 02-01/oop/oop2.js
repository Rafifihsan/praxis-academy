   var data = {

            id1:{
            nama: "rafif",
            email: "mbahkp@gmail.com"
        },
            id2:
            
            {
            nama:"dea putri",
            email:"deaputri27@gmail.com"
        },
        id3:{
            nama:"jacky",
            email:"jacky24@gmail.com"
        },

        this_login(){
            console.log(this.id2["nama"] + "sedang login");
        },
        this_logout(){
            console.log(this.id2["nama"] + "sedang login");
        }

   };

   console.log(data.id2["nama"]);

   var a = prompt("masukan email");
   function loginnnn(){

   var b = data.entries(a);
   console.log(data(a));
   if(b){
        alert(b + "sudah login");

    }
   }