console.log("Above Function");
const waitforSomeTime = (sec) => {
    const start = Date.now();
    while (Date.now() - start < sec) {
        //do nothing;
    }
}
const fun = () => {
    console.log("Inside function before wait");
    waitforSomeTime(5000);
    console.log("Inside function after wait.")
}
fun();
console.log("Below Fuction");