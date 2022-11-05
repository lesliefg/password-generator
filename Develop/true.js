//Arrays for each criteria 
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["!", "?", "@", "#", "$", "%", "&", "*"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Declarations for variables not confirmed
var confirmLength = "";
var validInputs = [];

//Beginning of prompts

//First prompts confirms length of password
function generatePassword() {
  var confirmLength = (prompt("How long would you like the password to be? (Between 8-128 characters)"))
//This will alert the user that their response was an invalid length and to try again  
  if (confirmLength <= 7 || confirmLength >=129) {
    return "That was an invalid response. Please try again!"
  }
//This section brings up prompts to confirm uppercase, lowercase, numbers and special characters. Minimum of one needs to be selected
  
  //This first section confirms the use of uppercase letters
  var confirmUpper = confirm("Select OK if you would like to use Uppercase Letters");
  //This confirms the use of lowercase letters
  var confirmLower = confirm("Select OK if you would like to use Lowercase Letters");
  //This  confirms the user of numbers
  var confirmNumbers = confirm("Select OK if you would like to use Numbers");
  //This confirms the use of special characters
  var confirmSpecial = confirm("Select OK if you would like to use Special Characters (!?@#$%&*)");

  //This will alert the user that minimum requirements were not met and to start over
  if (confirmUpper === false && confirmLower === false && confirmNumbers === false && confirmSpecial === false) {
    return "You need to select at least one character type. Please try again!";
  }
  //Lines 40 through 78 will give different alerts on the password criteria selected
  if (confirmUpper === true && confirmLower === false && confirmNumbers === false && confirmSpecial === false) {
    alert("Your password will be " + confirmLength + " characters long and will include uppercase letters only.")
  }
  if (confirmUpper === false && confirmLower === true && confirmNumbers === false && confirmSpecial === false) {
    alert("Your password will be " + confirmLength + " characters long and will include lowercase letters only.")
  }
  if (confirmUpper === false && confirmLower === false && confirmNumbers === true && confirmSpecial === false) {
    alert("Your password will be " + confirmLength + " characters long and will include numbers only.")
  }
  if (confirmUpper === false && confirmLower === false && confirmNumbers === false && confirmSpecial === true) {
    alert("Your password will be " + confirmLength + " characters long and will include special characters only.")
  }
  if (confirmUpper === true && confirmLower === true && confirmNumbers === false && confirmSpecial === false) {
    alert("Your password will be " + confirmLength + " characters long and will include uppercase and lowercase letters only.")
  }
  if (confirmUpper === true && confirmLower === false && confirmNumbers === true && confirmSpecial === false) {
    alert("Your password will be " + confirmLength + " characters long and will include uppercase letters and numbers only.")
  }
  if (confirmUpper === true && confirmLower === false && confirmNumbers === false && confirmSpecial === true) {
    alert("Your password will be " + confirmLength + " characters long and will include uppercase letters and special characters only.")
  }
  if (confirmUpper === false && confirmLower === true && confirmNumbers === true && confirmSpecial === false) {
    alert("Your password will be " + confirmLength + " characters long and will include lowercase letters and numbers only.")
  }
  if (confirmUpper === false && confirmLower === true && confirmNumbers === false && confirmSpecial === true) {
    alert("Your password will be " + confirmLength + " characters long and will include lowercase letters and special characters only.")
  }
  if (confirmUpper === false && confirmLower === false && confirmNumbers === true && confirmSpecial === true) {
    alert("Your password will be " + confirmLength + " characters long and will include numbers and special characters only.")
  }
  if (confirmUpper === true && confirmLower === true && confirmNumbers === true && confirmSpecial === false) {
    alert("Your password will be " + confirmLength + " characters long and will include uppercase letters, lowercase letters and numbers only.")
  }
  if (confirmUpper === true && confirmLower === true && confirmNumbers === false && confirmSpecial === true) {
    alert("Your password will be " + confirmLength + " characters long and will include uppercase letters, lowercase letters and special characters only.")
  }
  if (confirmUpper === false && confirmLower === true && confirmNumbers === true && confirmSpecial === true) {
    alert("Your password will be " + confirmLength + " characters long and will include lowercase letters, numbers and special characters only.")
  }
  if (confirmUpper === true && confirmLower === true && confirmNumbers === true && confirmSpecial === true) {
    alert("Your password will be " + confirmLength + " characters long and will include upppercase letters, lowercase letters, numbers and special characters.")
  }

  if (confirmUpper === true) {
    for (var i = 0; i <upper.length; i++) {
      validInputs.push(upper[i]);
    }
  }
  if (confirmLower === true) {
    for (var i = 0; i <lower.length; i++) {
      validInputs.push(lower[i]);
    }
  }
  if (confirmNumbers === true) {
    for (var i = 0; i <upper.numbers; i++) {
      validInputs.push(numbers[i]);
    }
  }
  if (confirmSpecial === true) {
    for (var i = 0; i <special.length; i++) {
      validInputs.push(special[i]);
    }
  }

  var randomPassword = "";
    for (var i = 0; i < confirmLength; i++) {
      validInputs[
          Math.floor(Math.random() * validInputs.length)];
      randomPassword +=
          validInputs[
              Math.floor(Math.random() * validInputs.length)
          ];
      }
 return randomPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn)
