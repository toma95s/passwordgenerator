var charlen = 0;
var specialchar = ["!","@","#","$","%","^","&","*","(",")"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowercaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// Assignment Code
var generateBtn = document.querySelector("#generate");
var confirmSpecial1;
var confirmLower;
var confirmUpper;
var confirmNumber1; 
var userChoice = [];

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
  if(validateUserChoice()){
    let finalpassword = ""
    for(let i= 0; i<charlen; i++){
      let  passwordlengthrand = Math.floor(Math.random()* userChoice.length);
      finalpassword += userChoice[passwordlengthrand];
    }    //console.log(passwordlengthrand);
    return finalpassword;
  }
   else{
    return finalpassword += userChoice
   }
};

function issuePrompts(){
    characterLengthPrompt();
    confirmSpecial();
    confirmLowercase();
    confirmUppercase();
    confirmNumber();

};


function characterLengthPrompt(){
  //at least 8 characters and no more than 128 characters???
  //ask for input
  
 
  charlen = parseInt(prompt("How many characters is your password? This password must be 8 characters and no more than 128 characters."));
  while(charlen < 8 || charlen > 128){
      alert("This password has the incorrect amount of characters");
      charlen = parseInt(prompt("Please choose a number between 8 and 128"));
  };
};

function confirmSpecial(){
    //does this password have any special characters?
    //for input
    var confirmSpecial1 = confirm("Press OK if this has any special characters");
   if(confirmSpecial1){
     alert("You have added special characters to your password");
     userChoice = userChoice.concat(specialchar);
   }
   else{
     alert("No special characters will be added");
     return false;
   }

};

function confirmLowercase(){
  // confirm whether or not to include lowercase, ???
  confirmLower = confirm("Press OK if this password has any lowercase letters");
  if(confirmLower){
    alert("You have added lowercase letters to your password");
    userChoice = userChoice.concat(lowercaseChar);
  }
  else{
    alert("No lowercase letters will be added");
    return false;
  }
};
function confirmUppercase(){
    confirmUpper = confirm("Press OK if this password has any uppercase letters");
    if(confirmUpper){
      alert("You have added uppercase letters to your password");
      userChoice = userChoice.concat(uppercaseChar);
    }
    else{
      alert("No uppercase letters will be added");
      return false;
    }

};
function confirmNumber(){
    confirmNumber1 = confirm("Press OK if this password has any numbers"); 
    if(confirmNumber1){
      alert("You have added numbers to your password");
      userChoice = userChoice.concat(number);
    }
    else{
      alert("No numbers will be added");
      return false;
    }
    
};


function validateUserChoice(){
  //make sure that at least one character type should be selected
  if (confirmSpecial1 && confirmLower && confirmUpper && confirmNumber1 === false){
    userChoice = "You must choose at least 1 character type that must be selected.";
    return userChoice;
  }
};
