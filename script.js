// Assignment code here
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
  
  var number = ['0','1','2','3','4','5','6','7','8','9'];
  
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

  function getPasswordChoices() {
    var hasSpecialChars = confirm('Click ok to confirm to include special characters in your password');
    var hasUpperChars = confirm('Click ok to confirm to include uppercase characters in your password');
    var hasLowerChars = confirm('Click ok to confirm to include lowercase characters in your password');
    var hasNumericChars = confirm('Click ok to confirm to include numeric characters in your password');

    if(hasSpecialChars === false && hasUpperChars === false && hasLowerChars === false && hasNumericChars === false ) {
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
    var passwordOptions = getPasswordChoices();
    
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

// ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page