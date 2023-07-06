var randomsymbol = Symbol ();
console.log (randomsymbol);
randomNumdec = Math.random();
console.log (randomNumdec);
randomNum = Math.random().toString().replace('0.','');
console.log (randomNum);
//creates a string of lower case letters and numbers
passLowerNum = Math.random().toString(36).replace('0.','');
console.log (passLowerNum);
//another way to create a random string of letters without replacement
//FROM CODEHANDBOOK: The ascii code for a to z is 97 to 122. 
//So, the logic will be to select random ascii code from 97 to 122 
//and create random string character based on the length of the string.
function GenLowerCaseString(stringLength) {
    let lowerCaseString = '';
    let random_ascii
    for (let i = 0; i < stringLength; i++) {
        random_ascii = Math.floor((Math.random() * 25) +97);
        lowerCaseString+= String.fromCharCode(random_ascii)
    }
    return lowerCaseString
}
console.log(GenLowerCaseString(128));
//creates a string of Uppercase only
function GenUpperCaseString(stringLength) {
    let random_string = '';
    let random_ascii
    let ascii_low = 65;
    let ascii_high = 90
    for(let i = 0; i < stringLength; i++) {
        random_ascii = Math.floor((Math.random() * (ascii_high - ascii_low)) + ascii_low);
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string
}
console.log(GenUpperCaseString(128))
// passUpperLowerNum = 
function GenUpperLowerCaseString(stringLength) {
    let random_string = '';
    let random_ascii
//need to pick ascii values in between 65-90 AND 97-122
    let ascii_low = 65;
    let ascii_midhigh = 90
    let ascii_midlow = 97
    let ascii_high = 122
    for(let i = 0; i < stringLength; i++) {
        random_ascii = Math.floor((Math.random() * ((ascii_midhigh - ascii_low) + ascii_low) + ((ascii_high - ascii_midlow) + ascii_midlow)));
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string
}

//MAKE A STRING AN ARRAY
//MAKE A STRING AN ARRAY
console.log(GenUpperLowerCaseString(128))