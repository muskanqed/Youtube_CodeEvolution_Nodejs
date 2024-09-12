// Each loaded module in Node is wrapped with an IIFE that provides private scoping of code
// IIFE allows to repeat variable or function without conflicts

(function (message) {
  const superHero = "Batman";
  console.log(message, superHero);
})("Hello");

(function (message) {
  const superHero = "Superman";
  console.log(message, superHero);
})("Hey");
