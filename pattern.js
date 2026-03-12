function squarePattern(size) {
  for (let row = 1; row <= size; row++) {
    let output = "";
    for (let col = 1; col <= size; col++) {
      output += "* ";
    }
    console.log(output.trim());
  }
}

function rightTriangle(size) {
  for (let row = 1; row <= size; row++) {
    let output = "";
    for (let col = 1; col <= row; col++) {
      output += "* ";
    }
    console.log(output.trim());
  }
}

function invertedTriangle(size) {
  for (let row = size; row >= 1; row--) {
    let output = "";
    for (let col = 1; col <= row; col++) {
      output += "* ";
    }
    console.log(output.trim());
  }
}

function pyramid(size) {
  for (let row = 1; row <= size; row++) {
    let spaces = " ".repeat(size - row);
    let stars = "";
    for (let col = 1; col <= 2 * row - 1; col++) {
      stars += "*";
    }
    console.log(spaces + stars);
  }
}

console.log("Square Pattern");
squarePattern(4);

console.log("\nRight Triangle Pattern");
rightTriangle(5);

console.log("\nInverted Triangle Pattern");
invertedTriangle(5);

console.log("\nPyramid Pattern");
pyramid(5);
