// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("The length of password should be at least 8 characters and no more than 128 characters")
  
  var password = generatePassword() {
  
  
  var userChoice = window.prompt()("The length of password should be at least 8 characters and no more than 128 characters")
  }

  var passwordText = document.querySelector("#password");
  var length = 128;

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var number = "0123456789";
  var special characters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


  passwordText.value = password;

}

var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
