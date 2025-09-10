{
    var name2 = "John";
    let name = "Divye";
    console.log(name); // let is block scoped.
    name = "Kapoor"; // Reassignment is allowed with let in the same block.
    console.log(name);
}
console.log(name2); // var is function scoped or globally scoped.
// console.log(name); // ReferenceError: name is not defined (because let is block scoped).
name2 = "Doe"; // Reassignment is allowed with var even outside the block.
console.log(name2);

console.log(fun, "function print");
console.log(fun(), "invoke1"); // function declaration is hoisted.
function fun(){
    console.log(funName);
    var funName = "MyFunction";
    console.log(funName);    
}
console.log(fun(),"from invokation");