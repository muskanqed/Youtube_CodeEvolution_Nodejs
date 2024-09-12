// Executing Javascript with Node REPL(Read,Evaluate,Print,Loop)
// Type node to start an interactive shell and type the code

// Executing Javascript with .js file and run the node command in the terminal
// To run the below code write node index.js in the terminal

// const add = require("./add");

// console.log("Hello World from index.js");
// const sum = add(1, 2);
// const sum2 = add(9, 9);
// console.log(sum);
// console.log(sum2);

// require ('./batman')
// require ('./superman')

// Here module caching comes in picture

// const superHero = require("./super-hero");

// console.log(superHero.getName());
// superHero.setName("Superman");
// console.log(superHero.getName());

// const newsuperHero = require("./super-hero");
// console.log(newsuperHero.getName());

// rewriting the above code

// const superHero = require("./super-hero");

// const batman = new superHero("Batman");
// console.log(batman.getName());
// batman.setName("Bruce");
// console.log(batman.getName());

// const superman = new superHero("Superman");
// console.log(superman.getName());

// Extending from EventEmitter

/*const PizzaShop = require("./events");

const pizzashop = new PizzaShop();

pizzashop.on("order", (size, topping) => {
  console.log(`the pizza is ready of ${size} and ${topping}`);
});

pizzashop.order("large", "mushroom");
pizzashop.displayOrderNumber();*/
