var data;
function preload(){
    data = loadJSON('birds.json');

}

function setup(){
 
    var birds = data.birds;

    for(var i = 0; i <birds.length; i++){
        createElement('h1',birds[i].family);
        var members = birds[i].members;
        for(var j = 0; j < members.length;i++){
           console.log(createDiv(members[j]));
        }
    }
    
    
}
console.log(setup());


