
function aray(){
    var get = document.getElementById("demo").value;
  
    var data = [
        {
            "biodata": 1,
            "id" :1,

            "data1" :{
                "nama" : "rafif ihsan jaya",
                "kelas": "Sistem informasi",
                "alamat" :"lampung timur",
                "basic" : "php"
            }
        },
        {
            "biodata2" :2,
            "id" :2,
            "data2":{
                "nama" : "maulana",
                "kelas": "Sistem informasi",
                "alamat" :"metro timur",
                "basic" : "java script"
            }

        },
        {
            "biodata" :3,
            "id" :3,
            "data3" : {
                "nama" : "galih",
                "kelas": "Sistem informasi",
                "alamat" :"bandar lampung",
                "basic" : "php"
            }
        }
    ] ;

var a = data["data1"];
var b = JSON.stringify(a);    
document.write(b);

}

Array();