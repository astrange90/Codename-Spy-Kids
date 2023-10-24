// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var passwordText = document.querySelector("#password");
  var length = 128;

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var number = "0123456789";
  var special characters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  var password = "writePassword" = upperCase + lowerCase + number + Symbol;

  function writePassword() {
    if password = "" {
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += Symbol[Math.floor(Math.random() * Symbol.length)];
    } else if (length) > password.length) {
      password += writePassword[Math.floor(Math.random() * writePassword.length)];
    } else {
      console.log("Password did not meet criteria");
    }
    return;

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
