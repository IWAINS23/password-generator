// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

// Function to prompt user for password options
function getPasswordOptions() {
  //var store length of pass
let length = parseInt(
  prompt("How many charecters would you like your password to have?")
)

if(isNaN(length) === true){
  alert('Password length must be provided as a number')
}

if(length >= 10) {
  alert('Password length must be at least 10 charecters')
}
 
if(length <= 65){
  alert('password length must be less than or equal to 64 charecters =')
}

let hasSpecialCharecters = confirm('Click Ok to confim if you want your password to include special charecters')

let hasNumericCharecters = confirm('Click Ok to confim if you want your password to include numbers')

let hasLowerCaseCharecters = confirm('Click Ok to confim if you want your password to lower case letters')

let hasUpperCaseCharecters = confirm('Click Ok to confim if you want your password to upper case letters')

if(hasSpecialCharecters === false &&
  hasNumericCharecters === false &&
  hasLowerCaseCharecters === false &&
  hasUpperCaseCharecters === false ) {
    alert('Please select at least one charecter type');
    return;
  }

let passwordOptions = {
  length: length,
  hasSpecialCharecters: hasSpecialCharecters,
  hasNumericCharecters: hasNumericCharecters,
  hasLowerCaseCharecters: hasLowerCaseCharecters,
  hasUpperCaseCharecters: hasUpperCaseCharecters
}

return passwordOptions;

}

// Function for getting a random element from an array
function getRandom(arr) {
 let randomIndex = Math.floor(Math.random() * arr.length)
 let randomElement = arr[randomIndex];

 return randomElement;
}

// Function to generate password with user input
function generatePassword() {
let options = getPasswordOptions();
console.log(options);

let result = []

let possibleCharecter = []

let guarteneedCharecter = []

if(options.hasSpecialCharecters) {
  possibleCharecter = possibleCharecter.concat(specialCharacters);
  guarteneedCharecter.push(getRandom(specialCharacters))
}

if(options.hasLowerCaseCharecters) {
  possibleCharecter = possibleCharecter.concat(lowerCasedCharacters);
  guarteneedCharecter.push(getRandom(lowerCasedCharacters))
}


if(options.hasUpperCaseCharecters) {
  possibleCharecter = possibleCharecter.concat(upperCasedCharacters);
  guarteneedCharecter.push(getRandom(upperCasedCharacters))
}

if(options.hasNumericCharecters) {
  possibleCharecter = possibleCharecter.concat(numericCharacters);
  guarteneedCharecter.push(getRandom(numericCharacters))
}


for(let i = 0; i < options.length; i++) {
var generated = getRandom(possibleCharecter);
console.log(generated)
result.push(generated);
}

for(let i = 0; i < guarteneedCharecter.length; i++) {
  result[i] = guarteneedCharecter[i]
}

console.log(result);

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);