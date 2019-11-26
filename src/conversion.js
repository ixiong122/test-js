const readlineSync = require("readline-sync");
let originUnit;
let destinationUnit = 0;
let unit = 5;
let value;
let value1;
do {
  originUnit = readlineSync.question("Enter an origin unit: ");

} while (originUnit !== "miles" );
do {
  destinationUnit = String(readlineSync.question("Enter a destination unit: "));
} while (destinationUnit !== "miles" && destinationUnit !== "inches" && destinationUnit !== "feet" && destinationUnit !== "yards");

 value = readlineSync.question("Enter a value: ");

if (originUnit == "miles" && destinationUnit == "inches") {
  value1 = value * 63360;
} else if (originUnit == "miles" && destinationUnit == "yards") {
  value1 = value * 1760;
} else if (originUnit == "miles" && destinationUnit == "miles") {
  value1 = value * 1;
} else {
  value1 = value * 5280;
}

let formatted = value1.toLocaleString("en", {minimumFractionDigits: 1, maximumFractionDigits: 1});
console.log("There are " + formatted + " inches in " + value + " miles.");
