// Assignment Code
var generateBtn = document.querySelector("#generate");

var object = {
  numbers: [0,1,2,3,4,5,6,7,8,9],

  symbols: ["!", "#", "$", "%","&","(",")","*", "-"],

  letters: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
}

function writePassword() {
  var password = "";

  var passwordText = document.querySelector("#password");

  var passwordLength; 
  
  var specialChar; 

  var upperCase; 

  var lowerCase; 

  var numerals; 
  
  passwordLength = parseInt(prompt("Enter a number between 8 and 128"));

  if( !passwordLength ){
    alert("Choose a number of characters between 8 and 128")

  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Choose a number of characters between 8 and 128");
    return; 
  } else {

    specialChar = confirm("Do you want special characters?");

      if(!specialChar){
        delete object.symbols;
      }

    upperCase = confirm("Do you want upper case letters?");

      if(upperCase){
        var upperMaker = function(x) {

          return x.toUpperCase();
        
        }; 
        object.letters = object.letters.map(upperMaker);
      }

    lowerCase = confirm("Do you want lower case letters?");
      if(lowerCase){

        var lowerMaker = function(x){

          return x.toLowerCase();
        }
      }

    numerals = confirm("Do you want numbers?");
      if(!numerals){

        delete object.numbers;
      }

  };
  

  for (var i = 0; i < passwordLength; i++) {
     
    var keys = Object.keys(object);

    var randomKey = Math.floor(Math.random() * keys.length)
        
    var key = keys[randomKey]

    var randomNumber = Math.floor(Math.random() * object[key].length);

    password += object[key][randomNumber];
    
  }
  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
