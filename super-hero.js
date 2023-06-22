// Module Caching

class SuperHero {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}

// module.exports = new SuperHero("Batman");

//To avoid module caching we can directly load the class instead of instance

module.exports = SuperHero;