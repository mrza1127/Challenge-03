// Calls the button to generate
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// arrays with the criteria to be met
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number  = [0, 1, 2, 3, 4 ,5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "?", ".", ",", ";", "[", "]"];

// declarations
var confirmUpperCase;
var confirmLowerCase;
var confirmSpecialChar;
var confirmNumericChar;
var confirmLength = "";


function generatePassword() {
// 1. You need to prompt the user for the password criteria
//      a. Password length between 8 > 128
    var confirmLength = (prompt ("How many characters would you like your password to have?"));
        if (!confirmLength) {
            alert("Don't leave blank! Try again.");
    }
        else if (confirmLength < 8 || confirmLength > 128) {
            var confirmLength = (prompt("Must choose a number between 8-128 characters."));
        }
//      b. Lowercase, uppercase, numbers, special characters
    var confirmLowerCase = confirm("Click OK to have password contain lowercase letters");
    var confirmUpperCase = confirm("Click OK to have password contain uppercase letters");
    var confirmNumericChar = confirm("Click OK to have password contain numbers");
    var confirmSpecialChar = confirm("Click OK to have password contain special characters");
// 2. Validate the input
        if(!confirmLowerCase && !confirmUpperCase && !confirmNumericChar && !confirmSpecialChar) {
          alert("You must choose a criteria!");
            var confirmLowerCase = confirm("Click OK to have password contain lowercase letters");
            var confirmUpperCase = confirm("Click OK to have password contain uppercase letters");
            var confirmNumericChar = confirm("Click OK to have password contain numbers");
            var confirmSpecialChar = confirm("Click OK to have password contain special characters");  
        } 
// 3. Generate password based on criteria
    var passwordCriteria = []
        if (confirmLowerCase) {
            passwordCriteria = passwordCriteria.concat(alphaLower);
        }
        if (confirmUpperCase) {
            passwordCriteria = passwordCriteria.concat(alphaUpper);
        }
        if (confirmNumericChar) {
            passwordCriteria = passwordCriteria.concat(number);
        }
        if (confirmSpecialChar) {
            passwordCriteria = passwordCriteria.concat(special);
        }
    var newPassword = ""
    for (var i = 0; i < confirmLength; i++) {
        newPassword = newPassword + passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)];
    } 
// 4. Display generated password on the page
    return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}