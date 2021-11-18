// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [0,1,2,3,4,5,6,7,8,9];

// keep adding symbols 
var symbols = ["!", ];

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// make sure to create uppercase letters also 

var upperMaker = function(x) {
  return x.toUpperCase();

}; 
var bigLetters = letters.map(upperMaker);


// Write password to the #password input
function writePassword() {
  // var password = generatePassword();

  var passwordText = document.querySelector("#password");

  var passwordLength; 
  
  var specialChar; 

  var upperCase; 

  var lowerCase; 

  var numerals; 
  

  passwordText.value = password;

  passwordLength = parseInt(prompt("Enter a number between 8 and 128"));

  if( !passwordLength ){
    alert("Choose a number of characters between 8 and 128")

  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Choose a number of characters between 8 and 128");
    return; 
  } else {
    specialChar = confirm("Do you want special characters?");

    upperCase = confirm("Do you want upper case letters?");

    lowerCase = confirm("Do you want lower case letters?");

    numerals = confirm("Do you want numbers?");

  }; 

  for (var i = 0; i < passwordLength; i++) {
    // have to change characters.length 
    var randomNumber = Math.floor(Math.random() * characters.length);
    password + characters.substring(randomNumber, randomNumber +1);
  }
  
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
