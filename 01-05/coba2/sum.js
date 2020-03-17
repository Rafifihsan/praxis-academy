function sum(start,end){
    let array = [];
    for(let i = start; i <= end; i++){
    array.push(i) ;
    
    }
    return array.reduce((sum,value) =>sum += value);
}

console.log(sum(1,10));


let obj = { a: 21, b: "c"
}

console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.keys(obj));


let salaries = {
    "j" :100,
    "v" :420,
    "d" :324
}
function sumSalary(obj){
    let sum = 0;
    for(let salary of Object.values(obj)){
        sum += salary;
    }
    return sum;
}
console.log(sumSalary(salaries));

let arrayLike = {
    1 : "hello",
    2 : "world",
    length : 3
};

console.log(Array.from(arrayLike));

let john = { neme : "john"};
let cmap = new cmap();

cmap.Set(john,123);
alert(cmap.get(john));