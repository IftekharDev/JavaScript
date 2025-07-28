
//// ------- trim() method ------------

let str = "      Hello         ";
trimmedStr = str.trim();
console.log(str);
console.log(trimmedStr);

let msg = "    Hello      World     ";
trimmedMsg = msg.trim();
console.log(msg);
console.log(trimmedMsg);

let password = "   abcd   "
let newPassword = password.trim();
console.log(newPassword);




//// ------- toUpperCase() and toLowerCase() method ------------

let Name = "Arsalan Shaami";
let lowerCaseName = Name.toLowerCase();
let upperCaseName = Name.toUpperCase();
console.log(Name);
console.log(lowerCaseName);
console.log(upperCaseName);




//// ------- indexOf(arg) method ------------

msg = "ILoveCoding";
console.log(msg.indexOf("Love"));
console.log(msg.indexOf("love"));
console.log(msg.indexOf("o"));




//// ------- Method Chaining ------------

msg = "     Hello     ";
newMsg = msg.trim().toUpperCase();
console.log(newMsg);




//// ------- Slice method ------------

Name = "Arsalan Shaami";
console.log(Name.slice(0,7));
console.log(Name.slice(8, Name.length));
console.log(Name.slice(8));
console.log(Name.slice(-3))   // length -3




//// ------- Replace method ------------

Name = "Arsalan Shaami";
console.log(Name.replace("Arsalan", "Azlaan"));
console.log(Name);
console.log(Name.replace("a", "s"));




//// ------- Repeat method ------------

let fruit = "Mango";
console.log(fruit.repeat(3));




/// ----- Practice---------

Name = "ApnaCollege";
console.log(Name.slice(4).replace("l","t").replace("l", "t"));




//// ------- includes method ------------

str = "IloveCoding";
console.log(str.includes("love"))



//// ------- concat method ------------

str = "IloveCoding";
let str2 = ' and you';
let final = str.concat(str2)
console.log(final)