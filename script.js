// Assignment code here
var generateBtn= document.querySelector("#generate");

var passwordLenth;
var confirmLower;
var confirmUpper;
var confirmSpecial;
var userChoices;

var lowercase= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers=[0,1,2,3,4,5,6,7,8,9];
var special=["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

//-- var to ensure upper case value--//

var blankupper=[];
var toUpper = function (x){
  return x.toUpperCase();
};
uppercase = lowerCase.map(toUpper);

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

// Start Function
function generatePassword() {
  // Ask for user Input
  passwordLength = prompt("How many characters would you like your password to be? Choose lenght between 9 and 100");
  console.log("Password length " + passwordLength);
  
  if(!passwordLength) {
    alert("Required value");

  } else if (passwordLength < 9 || passwordLength > 100) {
    passwordLength = prompt("You must choose between 9 and 100");
    console.log("Password length " + passwordLength);
  
  } else { 
    confirmLower = confirm("Will the password contain lower case letters?");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Will the password contain upper case letters?");
    console.log("Upper case " + confirmUpper);
    confirmNumber = confirm("Will the password contain numbers?");
    console.log("Number " + confirmNumber);
    confirmSpecial = confirm("Will the password contain special characters?");
    console.log("Special Character " + confirmSpecial);

  };

  // if no response then
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    userChoices = alert("Please input any criteria");
  // 4 true options
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers, special);
    console.log(userChoices);
  }
  // 3 true options
  else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmUpper && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, special);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(numbers, special);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = upperCase.concat(numbers, special);
    console.log(userChoices);
  }
  // 2 true options
  else if (confirmLower && confirmUpper) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmSpecial) {
    userChoices = lowerCase.concat(special);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmSpecial) {
    userChoices = upperCase.concat(special);
    console.log(userChoices);
  }
  else if (confirmNumber && confirmSpecial) {
    userChoices = numbers.concat(special);
    console.log(userChoices);
  }
  // 1 true option
  else if (confirmLower) {
    userChoices = lowerCase;
    console.log(userChoices);
  }
  else if (confirmUpper) {
    userChoices = blankUpper.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmNumber) {
    userChoices = numbers;
    console.log(userChoices);
  }
  else if (confirmSpecial) {
    userChoices = special;
    console.log(userChoices);
  };

  // Empty variable for the password lenght
  var passwordBlank = [];
  
  // Loop for random selection of passowrk
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // Return the user's password 
  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
  
}

//end of Mahoney edits