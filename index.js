// Executing Javascript with Node REPL(Read,Evaluate,Print,Loop)
// Type node to start an interactive shell and type the code

// Executing Javascript with .js file and run the node command in the terminal
// To run the below code write node index.js in the terminal

const add = require("./add");

console.log("Hello World from index.js");
const sum = add(1, 2);
const sum2 = add(9, 9);
console.log(sum);
console.log(sum2);
