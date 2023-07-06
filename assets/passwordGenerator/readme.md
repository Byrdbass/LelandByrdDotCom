# Password Generator

## First Steps
I have used some psuedo code from my professor to help get started on creating the `prompt()` method and `confirm()` methods.  I also have been using w3 schools as reference for how to employ these answers into conditional statements.  I have been sure to log all of these prompts and confirm messages into the console so that I am able to see what data is being held inside of the variables and move on with the function.  I did quite a bit of research on how to generate random strings of letters, numbers, and symbols.  I used a seperate 
html document called random.html to store some of these experiments to see how the code would function with different methods.  After looking at the more complex versions of using ASCII code, I decided to use `Math.Random` to keep things more simple.

## Possible scenarios in the first steps
If the user picks all 4 options, then that will be the easiest type of code to start with.  I would create an object in an array and generate random letters, numbers, and symbols based off the length of said array.  In an attempt to play with random strings of the four options (lowercase, uppercase, symbols, and numbers) a second javascript file will be created called "random.js"

## Help from Tutor
In the tutorials, I was able to narrow down how to go through each choice and use the `+=` function.  I realized this is how we continue to concatenate on to an existing variable.  I also learned that the empty string with `''` would allow me to add different charcters at any stage in building of the password. Finally, I discovered that not all the choices of characters would appear in the final password every time.  For example, if I selected lowercase, uppercase, numbers, and symbols, at times not every choice would appear in my final password.  The tutor helped me realize the spread operator `finalPassword = [...finalPassword]` was the way to convert a string into an array.  I then used the `splice()` method to force the final password to include AT LEAST one of the choices in characters.  We also employed the use of console logs to trouble shoot the if statements and for loops to debug some of the problems with building the final stages of the code.

![gif of the password generator](Assets/images/Password-Generator.gif)

## Additional Fancy things to possibly add
-a message that confirms how many numbers they want
-a selector confirm message that allows them to pick yes or no to the options of lowercase, Uppercase, numbers, and symbols


## Resources used
[https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript]
---
[https://www.ascii-code.com/]
---
[https://www.tutorialspoint.com/difference-between-var-and-let-in-javascript]
---
[https://codehandbook.org/generate-random-string-characters-in-javascript]
