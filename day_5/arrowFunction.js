const a = (a, b, c = 0) => a + b + c;
console.log(a(1, 2, 3));

const b = (a, b, c = 0) => a - b - c;
console.log(b(1, 2));

const c = (a, b, c = 1) => a * b * c;
console.log(c(1, 2, 3));

const d = (a, b, c = 1) => (a/b)/c;
console.log(d(1, 2, 3))