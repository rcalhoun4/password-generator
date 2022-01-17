// Get references to the #generate element
const btn = document.getElementById('generate');
const passwordDisplay = getElementById('password');

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));

// This event listener creates the parameter prompts for the password
btn.addEventListener('click', e => {
    const passwordLength = window.prompt('How long would you like your password to be? Choose a number between 8 and 128.');
    console.log(passwordLength);

    const passwordCase = window.confirm('Would you like to include uppercase letters?');
    console.log(passwordCase);

    const passwordNumb = window.confirm('Would you like to include numbers in your password?');
    console.log(passwordNumb);

    const passwordSymbol = window.confirm('Would you like to include special characters in your password?');
    console.log(passwordSymbol);

    //const password = generatePassword(passwordLength, passwordCase, passwordNumb, passwordSymbol);
    //passwordDisplay.innerText = password;
});

// This function creates the password based off of the parameters
function generatePassword(passwordLength, passwordCase, passwordNumb, passwordSymbol) {
    let charCodes = LOWERCASE_CHAR_CODES;
    if (passwordCase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    if (passwordNumb) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
    if (passwordSymbol) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);

    const passwordCharacters = [];
    for (let i = 0; i < passwordLength; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * passwordLength)];
        passwordCharacters.push(String.fromCharCode(characterCode));
    }

    return passwordCharacters.join('');
}

function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }

    return array;
}