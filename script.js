

var charlen;
var specialchar = ["!","@","#","$","%","^","&","*","(",")"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowercaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// Assignment Code
var generateBtn = document.querySelector("#generate");
var confirmSpecial1
var confirmLower
var confirmUpper 
var confirmNumber1 
var userChoice

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;//this will write to page

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  // THEN I am presented with a series of prompts for password criteria
    //issue prompts to user
    issuePrompts()
      //prompted for the length
        //at least 8 characters and no more than 128 characters
      //asked for character type
        // confirm whether or not to include lowercase, 
        // uppercase, 
        // numeric, 
        // and/or special characters
      //Input should be validated 
        //at least one character type should be selected
      //a password is generated that matches the selected criteria
        //How?
    var passwordlengthrand = ""
    for(var i= 0; i<charlen; i++){
      var  passwordlengthrand = userChoice[Math.floor(Math.random()* userChoice.length)];
       console.log(passwordlengthrand);
    }
    return passwordlengthrand;
};

function issuePrompts(){
   characterLengthPrompt();
   confirmSpecial();
   confirmLowercase();
   confirmUppercase();
   confirmNumber();
   validateUserChoice();
   

};

function characterLengthPrompt(){
  //at least 8 characters and no more than 128 characters???
  //ask for input
  charlen = parseInt(prompt("How many characters is your password? This password must be 8 characters and no more than 128 characters."));
  while(charlen < 8 || charlen > 128){
      alert("This password has the incorrect amount of characters")
      charlen = parseInt(prompt("Please choose a passowrd that has characters between 8 and 128."));
  };
}

function confirmSpecial(){
    //does this password have any special characters?
    //for input
    confirmSpecial1 = confirm("Press OK if this has any special characters");
};

function confirmLowercase(){
  // confirm whether or not to include lowercase, ???
  confirmLower = confirm("Press OK if this password has any lowercase letters");
};
function confirmUppercase(){
    confirmUpper = confirm("Press OK if this password has any uppercase letters");

};
function confirmNumber(){
    confirmNumber1 = confirm("Press OK if this password has any numbers"); 
};


function validateUserChoice(){
  //make sure that at least one character type should be selected

  //4
  if(confirmSpecial() && confirmLowercase() && confirmUppercase() && confirmNumber()){
    userChoice = specialchar.concat(number,lowercaseChar,uppercaseChar);
  }

  //3
  else if (confirmSpecial() && confirmLowercase() && confirmUppercase()){
      userChoice = specialchar.concat(lowercaseChar,uppercaseChar);
  }
  else if (confirmSpecial()&& confirmLowercase() && confirmNumber()){
      userChoice = specialchar.concat(lowercaseChar,number);
  }
  else if (confirmSpecial() && confirmNumber() && confirmUppercase()){
      userChoice = specialchar.concat(number,uppercaseChar);
  }
  else if (confirmLowercase() && confirmUppercase() && confirmNumber()){
      userChoice = lowercaseChar.concat(uppercaseChar,number);
  }
  //2

  else if (confirmSpecial() && confirmLowercase){
      userChoice = specialchar.concat(lowercaseChar);
  }
  else if (confirmSpecial() && confirmUppercase()){
      userChoice = specialchar.concat(uppercaseChar);
  }
  else if (confirmSpecial() && confirmNumber()){
      userChoice = specialchar.concat(number);
  }
  else if (confirmLowercase() && confirmUppercase()){
      userChoice = lowercaseChar.concat(uppercaseChar);
  }
  else if (confirmLowercase() && confirmNumber()){
      userChoice = lowercaseChar.concat(number);
  }
  else if (confirmUppercase() && confirmNumber()){
      userChoice = uppercaseChar.concat(number);
  }

  //1

  else if (confirmSpecial()){
      userChoice = specialchar;
  }
  else if (confirmLowercase()){
      userChoice = lowercaseChar;
  }
  else if (confirmUppercase()){
      userChoice = uppercaseChar;
  }
  else if (confirmNumber()){
      userChoice = number;
  }
  else if (confirmSpecial() && confirmLowercase() && confirmUppercase() && confirmNumber() === false){
      userChoice = alert("You must choose at least 1 character type that must be selected.");
  }

};