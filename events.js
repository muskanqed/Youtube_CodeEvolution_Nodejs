// const EventEmitter = require("node:events")

// const emitter = new EventEmitter()

// emitter.on("order-pizza", (size,topping) => {
//     console.log("The pizza is ready with ${size} and ${topping}")
// })

// emitter.on("order-pizza",(size)=>{
//     if(size==="large"){
//         console.log("serving a complimentry drink")
//     }
// })
// emitter.emit("order-pizza", "large", "mushroom")

const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order(size, topping) {
    this.orderNumber++;
    this.emit("order", size, topping);
  }

  displayOrderNumber() {
    console.log(`Current order number: ${this.orderNumber}`);
  }
}

module.exports = PizzaShop;
