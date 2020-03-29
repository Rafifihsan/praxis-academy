document.body.onload = addElement;

function addElement () { 
 var a = document.createElement("div");
 var b= document.createTextNode("hei hei hie");
 a.appendChild(b);

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(a, currentDiv); 
}