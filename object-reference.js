// module.exports vs exports

// const obj1 = {
// name: "Milly"
// }

// const obj2 = obj1
// obj2.name = "kenny"

// console.log(obj1)

// module.exports example is given by let

const obj1 = {
  name: "Milly",
};

let obj2 = obj1;
obj2 = {
  name: "kenny",
};

console.log(obj1);
