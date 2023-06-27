// Import Export Pattern

const math = require("./add");

// console.log(math.add(1,2))
// console.log(math.sub(3,4))

// Invoke method

const { add, sub } = math;

console.log(add(1, 2));
console.log(sub(3, 4));
