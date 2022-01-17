// Creates a variable for the button in the html
const btn = document.getElementById('generate');

// Creates a variable for the password display area in the html
const passwordDisplay = document.getElementById('password');

// Declares variables for each parameter as the arrays for each set of ascii characters (see function on line 56)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));

// This event listener creates the parameter prompts for the password when the button is pressed
btn.addEventListener('click', e => {
    const passwordLength = window.prompt('How long would you like your password to be? Choose a number between 8 and 128.');
    console.log(passwordLength);

    const passwordCase = window.confirm('Would you like to include uppercase letters?');
    console.log(passwordCase);

    const passwordNumb = window.confirm('Would you like to include numbers in your password?');
    console.log(passwordNumb);

    const passwordSymbol = window.confirm('Would you like to include special characters in your password?');
    console.log(passwordSymbol);

    // Declares the password variable as the generatePassword function and passes in the parameters from above
    const password = generatePassword(passwordLength, passwordCase, passwordNumb, passwordSymbol);

    // Displays the password in the password display area in the html
    passwordDisplay.innerText = password;
});

// This function creates the password based off of the parameters
function generatePassword(passwordLength, passwordCase, passwordNumb, passwordSymbol) {
    // Makes lowercase letters the default for the password
    let charCodes = LOWERCASE_CHAR_CODES;

    // Adds or omits uppercase, numbers, and symbols respectively based on their boolean value
    if (passwordCase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    if (passwordNumb) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
    if (passwordSymbol) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);

    // Chooses the characters from above at random and pushes them to the empty array passwordCharacters  
    const passwordCharacters = [];
    for (let i = 0; i < passwordLength; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
    }

    // Turns the passwordCharacters array into a string
    return passwordCharacters.join('');
}

// Loops through and creates an array for the ascii character codes
function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }

    return array;
}