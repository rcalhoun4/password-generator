# Password Generator

I created a random password generator that asks the user how long they want their password to be, and whether they want to include uppercase letters, numbers, and special characters. To do this I:

1) Cloned the starter code that was provided which had the HTML and CSS files setup already but the JavaScript file was not filled out
2) Created variables in JS for the Generate Password button and the Password Display Area
3) Created variables for the uppercase, number, and symbol ascii character codes that use the function arrayFromLowToHigh which takes the lowest and highest value for each set of character codes and creates arrays for the values inbetween
4) Created an Event Listener for when the Generate Password button is clicked that prompts the user on the desired length and whether they want to include uppercase letters, numbers, and special characters in their password; calls the generatePassword function and passes in the user's parameters; and displays the password in the Password Display Area 
5) Created the function generatePassword that sets the default password to lowercase letters; adds or omits uppercase letters, numbers, and symbols based on the user's parameters; and randomly loops through each set of characters for the desired length of the password, pushes this loop to an empty array, and then turns that array into a string which is then displayed

---
## Project Link
