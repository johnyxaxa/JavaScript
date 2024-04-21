// Function that takes one number and return that number + 7

function add7(x) {
    return X + 7 ;
}

add7(3);

// Function called multioly that takes 2 numbers and returns thier product. 

function multiply(x,y) {
    return x*y;         
}   

multiply(3,7);

// Function called capitalize that takes a string and returns that string with only first
// letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTH.

function capitalize(anyString) {
    return anyString.charAt(0).toUpperCase() + anyString.slice(1);
}

let string = "capitalize 1st c";
let capitalizedString = capitalize(string);
console.log(capitalizedString);