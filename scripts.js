// say hello
console.log("Welcome, pilgrim.");

// Cory made a change!
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

// adding in a 6-sided die
let sixSided = new Die(6);
document.getElementById("die").innerHTML = sixSided.roll();
