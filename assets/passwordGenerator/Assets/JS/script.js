// universal variables
var UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var numbers = '1234567890'
var symbols = '!@#$%^&*=+-_`~'
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// randomPosition1 = typeMasterArray[6][Math.floor(Math.random())]
function generatePassword() {

// Psuedocode
// Present user series of prompts/confirms
    // javascript prompt - lookup!
    //length prompt - var lengthChoice
        //write variable declaration/function declaration here
var lengthChoice = prompt('Please enter a the length of your password.  A minimum of 8 and maximum of 128 characters')
    console.log('User wants ' + lengthChoice + ' characters.');
    if (lengthChoice >= 8 && lengthChoice <= 128)  {
        var allChoices = '';
        var finalPassword = '';
        var lowercaseChoice = confirm('Do you need lowercase letters in your Password?')
            if (lowercaseChoice == true) {
                console.log('User would like lowercase letters');
                //+= is when you add on to something
                //a variable to hold all the possible choices
                allChoices += lowerCase; 
                finalPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
                }
            else {
                console.log('User does NOT want lowercase letters')
            }
//upper case confirm - upperCaseChoice
        var uppercaseChoice = confirm('Do you need UPPERCASE letters in your Password?')
            if (uppercaseChoice == true) {
                console.log('User would like uppercase letters');
                allChoices += UpperCase
                    finalPassword += UpperCase[Math.floor(Math.random() * UpperCase.length)];    
                }
            else {
                console.log('User does NOT want uppercase letters')
            }
//numbers confirm - numbersChoice
            var numChoice = confirm('Do you need numbers (1,2,3,etc.) in your Password?')
                if (numChoice == true) {
                    console.log('User would like numbers');
                    allChoices += numbers
                    var buildPassword3 = '';
                        finalPassword += numbers[Math.floor(Math.random() * numbers.length)];    
                    }
                else {
                    console.log('User does NOT want numbers')
                }        
//special confirm - specialChoice
        var symChoice = confirm('Do you need special characters or symbols in your Password?')
        if (symChoice == true) {
            console.log('User would like Symbols');
            allChoices += symbols
            finalPassword += symbols[Math.floor(Math.random() * symbols.length)];    
            }
        else {
            console.log('User does NOT want Symbols')
            
        }
        console.log('this is the final password, ' + finalPassword)
        console.log('The user has picked ' + allChoices);
        for (i = finalPassword.length; i < lengthChoice; i++) {
            finalPassword += allChoices[Math.floor(Math.random() * allChoices.length)]
        }
        console.log('final password after for loop is ' + finalPassword);
        //spread operator - tutor helped me with this - coverting a string to an array
        finalPassword = [...finalPassword]
        var mixPassword = '';
        var finalLength = finalPassword.length;
        for (i = 0; i < finalLength; i++) {
            console.log('hello')
            var randomPosition = Math.floor(Math.random() * finalPassword.length);
            // not using slice because we have put finalPassword into an array
            mixPassword += finalPassword.splice(randomPosition, 1)
        }
        console.log(mixPassword);
        return mixPassword;
    //If the user does not pick a number from 8-128
    } else window.alert('You must select a number between 8 and 128'); {
// what if user selects none of the above
if (uppercaseChoice == false && lowercaseChoice == false && numChoice == false && symChoice == false) {
    window.alert ('You must select "ok" for at least one option');
}
    }
return;
}


    //javascript confirm "confirm("press a button")"


// length prompt / number between 8-128
    //if/conditional check if length is between 8-128
        //if true continue to confirms. false ask length again
            //[continue in loop back to length prompt].

//confirm for lowercase, uppercase, numbers, and special characters
// input validation - correct length numbers, at least one character chosen
    //if conditional check using '||' (or) true continue to generate, falsk ask confirm again
// randomly generatepassword string from choices
    //arrays of lower, upper, nums, and special
    // array of all chosen characters, concat method?
        //check with methods you use 
    //choose from the 'all options' array of characters required (length prompt)
      //for loop, run based on length prompt
      //function called math.random to choose index positions from array
      // grab from our chosen array, add to password array
      // convert array to string
      //return string
// display password in text box - write to page
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
