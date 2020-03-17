const bar = () => console.log("bar");


const foo = () =>{
    bar();
    abc();
 
   
}
foo()
function abc() {
    console.log("test");
}