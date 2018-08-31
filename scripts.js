// say hello
console.log("Welcome, pilgrim.");

// Cory made a change!
function alertMe() {
  alert ("I made a change!");
}

// A class for making dice
class Die {
  // The constructor function is used to create a new die when the “new” keyword is used
  constructor(sides) {
    // sets the number of sides the die has
    this.sides = sides;
    // rolls the die for an initial showing value
    this.showingSide = Math.floor(Math.random()*this.sides) + 1;
  }

  // a function to roll the die on command
  roll() { this.showingSide = Math.floor(Math.random()*this.sides) + 1; }
}

// getting references to any dice in the DOM
let sixSidedDice = document.getElementsByClassName("six-sided-die")

Array.from(sixSidedDice).forEach(die => {
  // making a new die
  let sixSider = new Die(6);
  // assigning values to the DOM
  die.innerHTML = sixSider.showingSide;
});
