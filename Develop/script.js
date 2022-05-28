// Calls the button to generate
var generateBtn = document.querySelector("#generate");

// Create variables for criteria to be met
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number  = [0, 1, 2, 3, 4 ,5, 6, 7, 8, 9];
var character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "?", ".", ",", ";", "[", "]"];

function generatePassword() {
    console.log("Hey! You clicked the button!");

// 1. You need to prompt the user for the password criteria
//      a. Password length between 8 > 128
//      b. Lowercase, uppercase, numbers, special characters
// 2. Validate the input
// 3. Generate password based on criteria



// 4. Display generated password on the page
    return "Generated password will go here!";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
