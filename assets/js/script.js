var generateBtn = document.querySelector("#generate");


var passwordTypes = [];
var isLowerTrue = false;
var isUpperTrue = false;
var isNumberTrue = false;
var isSpecialTrue = false;

// Character code randomizer functions
function randomLow() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
function randomSpecial() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
};
// Write password to the #password input w/ nested functions.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function generatePassword() {
    var generatedPassword = "";

    collectDataTypes();
    var passwordLength = lengthPrompt();

    if (passwordLength !== 0){                                
      for (let i = 0; i < passwordLength; i = i) {            
        var pass = Math.floor(Math.random() * 4);                   
        if(pass === 0 && isLowerTrue === true) {              
          generatedPassword += randomLow();                   
          i ++;
        } else if (pass === 1 && isUpperTrue === true) {      
          generatedPassword += randomUpper();                       
          i ++;
        } else if (pass === 2 && isNumberTrue === true) {
          generatedPassword += randomNumber();
          i ++;
        } else if (pass === 3 && isSpecialTrue === true) {
          generatedPassword += randomSpecial();
          i ++;
        }
      }
    }
  return generatedPassword;                                  
  };
};

function collectDataTypes() {                                                          
  lowerConf = window.confirm("Include lowercase characters? Press OK for yes, and CANCEL for no.");
  if(lowerConf !== null) {                                   
    if(lowerConf === true) {                                 
      isLowerTrue = true;                                    
    };
  };
  
  upperConf = window.confirm("Include uppercase characters? Press OK for yes, and CANCEL for no. ");
  if(upperConf !== null) {                                  
    if(upperConf === true) {                                
      isUpperTrue = true;                                   
    };
  };
  
  numericConf = window.confirm("Include numbers in your password? Press OK for yes, and CANCEL for no.");
  if(numericConf !== null) {                                
    if(numericConf === true) {                              
      isNumberTrue = true;                                  
    };
  };

  specialConf = window.confirm("Include special characters? Press OK for yes, and CANCEL for no. ");
  if(specialConf !== null) {                                
    if(specialConf === true) {                              
      isSpecialTrue = true;                                 
    };
  };                                                        
  if(passwordTypes.length === 0 && (isUpperTrue || isLowerTrue || isNumberTrue || isSpecialTrue) === false) {
    window.alert("You must enter atleast one valid selection");
    return collectDataTypes();
  };
};

function lengthPrompt() {                                  
  passwordLength = window.prompt("How long would you like your password? Min 8 characters, Max 128 characters. ");
  if(passwordLength !==null) {                             
    passwordLength = parseInt(passwordLength);
    if(isNaN(passwordLength) || (passwordLength < 8 || passwordLength > 128)) {
      window.alert("Invalid length input, please input a number between 8-128.");
      lengthPrompt();                
    }
    return passwordLength;                                 
  } else {
    return;
  }
};

generateBtn.addEventListener("click", writePassword);
