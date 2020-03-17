let re = new RegExp('ab+c');
var myRe = /d(b+)d/g;
var myArray = myRe.exec('cdbbdbsbz');
console.log('The value of lastIndex is ' + myRe.lastIndex);

var str = "rafifihsan ";
var search = str.search(/ra/i);
console.log(search);
