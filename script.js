

var charlen
var specialchar = ["!","@","#","$","%","^","&","*","(",")"]
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lowercaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;//this will write to page

}

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
};

function issuePrompts(){
   characterLengthPrompt();
   //asked for character type???

}

function characterLengthPrompt(){
  //at least 8 characters and no more than 128 characters???
  //ask for input
  charlen = parseInt(prompt("How many characters is your password? This password must be 8 characters and no more than 128 characters."));
  while(charlen < 8 || charlen > 128){
      alert("This password has the incorrect amount of characters")
      charlen = parseInt(prompt("Please choose a passowrd that has characters between 8 and 128."));
  }

function characterTypePrompt(){
    //does this password have any special characters?
    //for input


    
}

  
}
function confirmLowercase(){
  // confirm whether or not to include lowercase, ???
}
function confirmUppercase(){

}
function confirmNumber(){

}


function valideateUserChoice(){
  //make sure that at least one character type should be selected
}