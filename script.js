const passField = document.querySelector("#password");
const copyButton = document.querySelector("#copy");
const passLength = document.querySelector("#length");
const upperCase = document.querySelector("#upper");
const lowerCase = document.querySelector("#lower");
const number = document.querySelector("#number");
const symbol = document.querySelector("#symbol");
const generatePass = document.querySelector("#generate")
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$^&*()_+=|";

// get random lowerCase letter
function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

// get random upperCase letter
function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

// get random number
function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

// get random symbol
function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)] 
}

function generatePassword() {
    const len = passLength.value;
    let password = "";
    for(let i = 0; i < len; i++) {
        const x = generateX();
        password += x;
    }
    passField.innerText = password;
}

function generateX() {
 const xs = [];
 if (upperCase.checked) {
    xs.push(getUpperCase());
 }
 if (lowerCase.checked) {
    xs.push(getLowerCase());
 }
 if (number.checked) {
    xs.push(getNumber());
 }
 if (symbol.checked) {
    xs.push(getSymbol());
 }

 if (xs.length === 0 ) return "";
 return xs[Math.floor(Math.random() * xs.length)];
}

generatePass.addEventListener("click", generatePassword);

copyButton.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = passField.innerText;
    if(!password){
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("password copied to clipboard");
});