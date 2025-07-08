console.log("Hello World");



//// --------- Alerts & Prompts-------

alert("Warning, Something is Wrong!")  // can be used after linking to an html file and rendering to browser.

console.error('This is an error msg');
console.warn('This is a warning msg');

let firstName = prompt("Enter your first name: ")
let lastName = prompt("Enter your last name: ")
let fullName = firstName + " " + lastName
console.log(fullName)



let name = prompt("Enter your name: ")
let age = prompt("Enter your age: ")
let msg = `${name} is ${age} years old`
alert(msg)