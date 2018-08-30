console.log("Welcome, pilgrim.");
function alertMe() {
  alert ("I made a change!");
}

// A class for making dice
class Die {
  // A constructor is a function called when using the “new” keyword to create a new die object
  constructor(numberOfSides) {
    this.numberOfSides = numberOfSides;
    // populate the die with the specified number of sides
    this.sides = [];
    for (let i = 0; i < numberOfSides; i++) {
      this.sides.push(i + 1);
    }
  }

  // a function to roll the die
  roll() {
    return this.sides[Math.floor(Math.random()*this.sides.length)];
  }
}

// testing out the 6-sided die
let sixSided = new Die(6);
console.log("Here is a six-sided die:", sixSided);
console.log("And we roll a", sixSided.roll());