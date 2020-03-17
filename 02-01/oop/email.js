var Userlo= {
    email : "rafif@gmail.com",
    username : "rafif_123",
    this_login(){
        console.log(this.email , "email login");
    },
        this_out(){
        console.log(this. email , "sudah logout")
    }
};

console.log(Userlo.email);

function test(){
    this_login();
}