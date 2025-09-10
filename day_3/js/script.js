console.log("Hello World");
alert("This is a alert message");
console.error("This is an error message");
document.write("This is document write message");

// variables
let a = 20;
console.log(className + " " + "Before initialization");
var className = "IT - E";console.log(className + " " + "After initialization");

const pi = 3.14;

console.log(a+" "+className+" "+pi);

const c = 3;
console.log(c);
var className = 30;
console.log(className + " " + "After re-initialization");

// let
let userName = "XYZ";
console.log(userName);
userName = "ABC";
console.log(userName);

// const
const country = "India";
console.log(country);
// country = "USA"; // error
// console.log(country); // error

// string
let str1 = "Hello";
let str2 = 'World';
let str3 = "Hello World";
console.log(str1 + " " + str2 + " " + str3);
console.log(str1.length);
console.log(str1.toUpperCase());

let ans = 2 + "2";
console.log(ans);
console.log(typeof ans);
let ans2 = "2" + 2;
console.log(ans2);
console.log(typeof ans2);
let ans3 = 2.0 + "2";
console.log(ans3);
console.log(typeof ans3);
let ans4 = "2" + 2.0;
console.log(ans4);
console.log(typeof ans4);

const student = {
    firstName: "Divye",
    lastName: "Kapoor",
    rollNo: 101    
}
console.log(student);
console.log(student.firstName);
console.log(student.lastName);
console.log(student.rollNo);
console.log(typeof student);
// This is an object.

// Type conversion
// Implicit
// string to number
let ans5 = "5" - 2;
console.log(ans5);
console.log(typeof ans5);
let ans6 = "5" * 2;
console.log(ans6);
console.log(typeof ans6);
let ans7 = "5" / 2;
console.log(ans7);
console.log(typeof ans7);
let ans8 = "5" % 2;
console.log(ans8);
console.log(typeof ans8);

// boolean to string.
let ans9 = "5" + true;
console.log(ans9);
console.log(typeof ans9);
let ans10 = "5" + false;
console.log(ans10);
console.log(typeof ans10);
let fun = true + "true";
console.log(fun);
console.log(typeof fun);

// boolean to number
let ans11 = "5" - true;
console.log(ans11);
console.log(typeof ans11); 
let ans12 = "5" - false;
console.log(ans12);
console.log(typeof ans12);

// number to boolean
let ans13 = 5;
if(ans13){
    console.log("True");
} else {
    console.log("False");
}

// Explicit
// string to number
let strNum = "123";
console.log(strNum + " " + typeof strNum);
let num = Number(strNum);
console.log(num + " " + typeof num);
let strNum2 = "123abc";
let num2 = Number(strNum2);
console.log(num2 + " " + typeof num2); // NaN
let num3 = parseInt(strNum2);
console.log(num3 + " " + typeof num3);
let strNum3 = "abc";
let num4 = Number(strNum3);
console.log(num4 + " " + typeof num4); // NaN
let num5 = parseInt(strNum3);
console.log(num5 + " " + typeof num5); // NaN
let strNum4 = "true";
let num6 = Number(strNum4);
console.log(num6 + " " + typeof num6); // NaN
let strNum5 = "false";
let num7 = Number(strNum5);
console.log(num7 + " " + typeof num7); // NaN