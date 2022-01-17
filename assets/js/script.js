// Assignment code here


// Get references to the #generate element
var btn = document.getElementById('#generate');

// Add event listener to generate button
btn.addEventListener('click', writePassword);

// Write password to the #password input
function writePassword(e) {
  var passwordLength = window.prompt('How long would you like your password to be? Choose a number between 8 and 128.');
  console.log(passwordLength);

  var passwordCase = window.prompt('Would you like to include uppercase letters, lowercase letters, or both? Type UPPERCASE, LOWERCASE, or BOTH to choose.');
  console.log(passwordCase);

  var passwordNumb = window.confirm('Would you like to include numbers in your password?');
  console.log(passwordNumb);

  var passwordSymbol = window.confirm('Would you like to include special characters in your password?');
  console.log(passwordSymbol);

  var password = generatePassword(passwordLength, passwordCase, passwordNumb, passwordSymbol);
  
  return;

}