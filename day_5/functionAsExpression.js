// const a = function b() {
//   console.log("Function as Expression");
//   return 1;
// }
// console.log(a);
// a();  // Output: Function as Expression
// console.log(a());  // Output: Function as Expression, 1 (returned value)
// // b();  // Error: b is not defined

const a = () => {
  console.log("Arrow Function as Expression");
  return 1;
}
console.log(a);
a();  // Output: Arrow Function as Expression
console.log(a());  // Output: Arrow Function as Expression, 1 (returned value)