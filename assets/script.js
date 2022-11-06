//Arrays for each criteria 
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["!", "?", "@", "#", "$", "%", "&", "*"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Declarations for variables not confirmed
var confirmLength = "";

//This is where the function to generate a password begins
function generatePassword() {
  //This confirms the length you want the password to be
  var confirmLength = (prompt("How long would you like the password to be? (Between 8-128 characters)"))
//This will alert the user that their response was an invalid length and to try again  
  if (confirmLength <= 7 || confirmLength >=129) {
    return "That was an invalid response. Please try again!"
  }
//This declares out valid inputs empty string. The concat will pull the information from the confirmed arrays and combine them if you would like that criteria in the password
  let validInputs = [];
  //This first section confirms the use of uppercase letters
  var confirmUpper = confirm("Select OK if you would like to use Uppercase Letters");
  if (confirmUpper === true) {
    //the concart pulls the arry for the uppercase letters and combines it into the empty arry for 'validInputs' to use for the pasword
    validInputs = validInputs.concat(upper)
    //The two alerts below will provide a message of whether your password will or will not use the specificed criteria
    alert("Your password will contain uppercase letters.")
  } else {
    alert("Your password will not contain uppercase letters.")
  }
  //This confirms the use of lowercase letters
  var confirmLower = confirm("Select OK if you would like to use Lowercase Letters");
  if (confirmLower === true) {
    validInputs = validInputs.concat(lower)
    alert("Your password will contain lowercase letters.")
  } else {
    alert("Your password will not contain lowercase letters.")
  }
  //This  confirms the user of numbers
  var confirmNumbers = confirm("Select OK if you would like to use Numbers");
  if (confirmNumbers === true) {
    validInputs = validInputs.concat(numbers)
    alert("Your password will contain numbers.")
  } else {
    alert("Your password will not contain numbers.")
  }
  //This confirms the use of special characters
  var confirmSpecial = confirm("Select OK if you would like to use Special Characters (!?@#$%&*)");
  if (confirmSpecial === true) {
    validInputs = validInputs.concat(special)
    alert("Your password will contain special characters.")
  } else {
    alert("Your password will not contain special characters.")
  }

  //This will alert the user that minimum requirements were not met and to start over
  if (confirmUpper === false && confirmLower === false && confirmNumbers === false && confirmSpecial === false) {
    return "You need to select at least one character type. Please try again!";
  }

  //This will generate the random password using the above if conditions
  var randomPassword = "";
    for (var i = 0; i < confirmLength; i++) {
      validInputs[
          Math.floor(Math.random() * validInputs.length)];
      randomPassword +=
          validInputs[
              Math.floor(Math.random() * validInputs.length)
          ];
      }
      //This will generate and show the password that meets the selected criteria 
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
