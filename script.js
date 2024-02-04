// Variable Arrays entered for characters of uppercase, lowercase, number, symbol.
var upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var symbol = [
  '!',
  '#',
  '0',
  '$',
  '%',
  '&',
  '()',
  '*',
  '+',
  '-',
  '/',
  ':',
  ';',
  '<',
  '=',
  '>',
  '?',
  '@',
  ']',
  '[',
  '^',
  '_',
  '`',
  '{',
  '|',
  '}',
  '~'
];
//Password character confirm choices  
function getPasswordChoices() {
  var hasUpperChars = confirm('Click ok to confirm to include uppercase characters in your password');
  var hasLowerChars = confirm('Click ok to confirm to include lowercase characters in your password');
  var hasNumericChars = confirm('Click ok to confirm to include numeric characters in your password');
  var hasSpecialChars = confirm('Click ok to confirm to include special characters in your password');

  if (hasUpperChars === false && hasLowerChars === false && hasNumericChars === false && hasSpecialChars === false) {
    alert('Must select at least one option');
    return;
  }

  var options = {
    hasLowerChars: hasLowerChars,
    hasNumericChars: hasNumericChars,
    hasUpperChars: hasUpperChars,
    hasSpecialChars: hasSpecialChars
  };

  return options;
}

function generatePassword() {
  var passwordLength = prompt('Enter numbers 8-100 for the total characters desired for generated password')
  var options = getPasswordChoices();
  var userChoices = [];
  if (passwordLength < 8 || passwordLength > 100) {
    alert('The number entered for password length did not meet the criteria. Please try again and enter a number of 8-100 in your first choice');
    return;
  }

  if (options.hasSpecialChars) {
    userChoices = userChoices.concat(symbol)
  }
  if (options.hasLowerChars) {
    userChoices = userChoices.concat(lowerCase)
  }
  if (options.hasNumericChars) {
    userChoices = userChoices.concat(number)
  }
  if (options.hasUpperChars) {
    userChoices = userChoices.concat(upperCase)
  }
  var result = ''
  for (var i = 0; i < passwordLength; i++) {

    result += userChoices[Math.floor(Math.random() * userChoices.length)];
  }
  return result;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);
