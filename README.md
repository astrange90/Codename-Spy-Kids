# Codename-Spy-Kids
- Came back motivated to finishing this challenge, because in earlier development I had a non functional password generator.
- The understanding of arrays, if statements, conditional statements, and the math method helped me execute a functional password generator.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password" and an example of submitted user choice.](./Assets/password%20generator%20example.png)

## Usage

- When user first presses the "Generate Password" button, then user will be prompted to input a number between 8-100 for total characters. ![A User choice asking for a keyboard input of a number between 8-100](![A User choice asking for a keyboard input of a number between 8-100](<Assets/Character Choices Total.png>))

- After inputted character length then user will be given choices of uppercase, lowercase, numeric, and special characters to be part of their password. ![A User choice showing uppercase, click to confirm or cancel](<Assets/User Choice of characters.png>)

- After all choices are made then there is a random generated password. ![Random Password Generated image](<Assets/Generated Password.png>)

- Deployed Link: https://astrange90.github.io/Codename-Spy-Kids/

## Credits
- Javascript Tutorial
https://www.youtube.com/playlist?list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET

- Math.round and Math.floor info
https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array

https://www.w3schools.com/java/java_math.asp

