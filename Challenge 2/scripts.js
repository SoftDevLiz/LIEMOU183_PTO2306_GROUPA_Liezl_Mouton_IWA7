const nickname = "Timmy";
const firstName = "Timothy";
const user = nickname || firstName; // If nickname is true, use that. Otherwise, use firstName.

if (!nickname && !firstName) {
  // If nickname and firstName are both falsy, just log this
  console.log("Good Morning!");
} else {
  console.log(`Good morning, ${user}!`); // Otherwise, log this
}
