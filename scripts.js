console.log("Welcome, pilgrim.");
function alertMe() {
  alert ("I made a change!");
}

class Die {
  constructor(numberOfSides) {
    this.numberOfSides = numberOfSides;
    this.sides = [];
    for (let i = 0; i < numberOfSides; i++) {
      this.sides.push(i + 1);
    }
  }

  roll() {
    return this.sides[Math.floor(Math.random()*this.sides.length)];
  }
  
}

let sixSided = new Die(6);
console.log(sixSided);
console.log(sixSided.roll());