// loops --> for, while, do...while, forEach

// for loop
for (let i = 0; i < 5; i++) {
    console.log(`For Loop Iteration: ${i}`);
}

// while loop
let j = 0;
while (j < 5) {
    console.log(`While Loop Iteration: ${j}`);
    j++;
}

// do...while loop
let k = 0;
do {
    console.log(`Do...While Loop Iteration: ${k}`);
    k++;
}
while (k < 5);
// Note: The do...while loop executes the block at least once before checking the condition.

// forEach loop (used with arrays)
const array = ['a', 'b', 'c', 'd', 'e'];
array.forEach((element, index) => {
    console.log(`forEach Loop Element at index ${index}: ${element}`);
});