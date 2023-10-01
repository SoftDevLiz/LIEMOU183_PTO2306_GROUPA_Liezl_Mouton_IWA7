const leoName = "Leo";
const leoSurname = "Musvaire     ";
const leoBalance = "-9394";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.2";

const divider = "----------------------------------";

// Only change below this line

// Parse leoBalance and sarahBalance to float (decimal) values
const leoBalanceToFloat = parseFloat(leoBalance);
const sarahBalanceToFloat = parseFloat(sarahBalance);

const leo = leoName + " " + leoSurname + `(Owed: R ${leoBalanceToFloat})`; // Log leo line

const sarah =
  sarahName + " " + sarahSurname + `     (Owed: R ${sarahBalanceToFloat})`; // Log sarah line

const owed = leoBalanceToFloat + sarahBalanceToFloat; // Calculate the total amount

const owedDecimals = owed.toFixed(2); // Make it so that the total amount shows the two decimals (cents)

const total = `Total amount owed: R ${owedDecimals}`; // Log the total

// Create the final result, including line breaks
const result =
  "\n" +
  leo +
  "\n" +
  sarah +
  "\n" +
  "\n" +
  divider +
  "\n" +
  total +
  "\n" +
  divider;

console.log(result); // Logs the final result
