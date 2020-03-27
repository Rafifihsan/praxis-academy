var weather;
function setup(){
    createCanvas(400,200);
    loadJSON('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=3f7a8a77312c0ca530c7f444a07f20d8&units=metric',gotData )
}

function gotData(data){
    weather = data;
}

function draw(Background){
     Background(34);
    if(weather){
        ellipase(100,100,weather.main.temp, weather.main.temp);
        ellipase(300,100, weather.main.humidity, weather.main.humidity);
    }
}

draw();
weather();
gotData();