let num = 123;
console.log("Hello", "World", num, (1 + 5));


let a = 10;
let b = 5;
console.log("Sum is: ", a + b);




//// -------- Template Literals -----------------

let pencilPrice = 10;
let eraserPrice = 5;
let output = "The total price is: " + (pencilPrice + eraserPrice) + " Rupees";
console.log(output);
console.log("The total price is: ", (pencilPrice + eraserPrice) , "Rupees");
console.log(typeof output);
console.log(typeof("The total price is: ", (pencilPrice + eraserPrice) , "Rupees"));
output = `The total price is: ${pencilPrice + eraserPrice} Rupees.`
console.log(output)




//// -------- Arthimetic Operators -----------------

a = 10;
b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);




//// -------- Unary Operators -----------------

a = 10;
console.log(a++);
console.log(++a);

let year = 2002;
year++  // increment
console.log(year)

year--  //decrement
console.log(year)

let age1 = 25;
--age1  //available in another form too
console.log(age1)
++age1  
console.log(age1)

let age2 = 10;
let newAge = ++age2;  //first change, then use
console.log(age2);
console.log(newAge);

let year1 = 2000;
let newYear = year1++  //first use, then change
console.log(year1)
console.log(newYear)

let n = 55;
++n
console.log(n)

b = 5;
b++
console.log(b)




//// -------- Assignment Operators -----------------

a = 10;
b = 5;
b = a;
console.log(b);
a += 2;
console.log(a);
a -=4;
console.log(a);
a*=2;
console.log(a);
a/=4;
console.log(a)
a%=3;
console.log(a);




//// -------- Comparision Operators -----------------

let age = 16;
console.log(age > 18);
console.log(age >= 18);
console.log(age < 18);
console.log(age <= 18);
console.log(age > 18);
console.log(age == 18);
console.log(age != 18);

n = 5;
let str = '5';
console.log(typeof n);
console.log(typeof str);
console.log(n == str);
console.log(4 != str);

console.log(n === str);

console.log(1 == '1');
console.log(0 == '');
console.log(0 == false);
console.log(null == undefined);

console.log(1 === '1');
console.log(0 === '');
console.log(0 === false);
console.log(null == undefined);




//// -------- Comparision for Non-numbers -----------------

console.log('a' < 'A');
console.log('a' < 'b');
console.log("P" < 'p');
console.log('a' < "B");
console.log("*" > '&');




//// -------- Logical Operators -----------------

/// && - Logical AND operator

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log((5 > 3) && (3 > 1));
console.log((5 > 3) && (3 < 1));
console.log((5 < 3) && (3 > 1));
console.log((5 < 3) && (3 < 1));


marks = 90;

if (marks >= 33 && marks >= 80) {
    console.log("Pass")
    console.log("A+")
}


/// || - Logical NOT operator

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


/// ! - Logical NOT operator

console.log(!true);
console.log(!false);
console.log(!(5 > 3));


marks = 75;

if ((marks > 33 && marks <= 80) || !false) {
    console.log("Pass");
}



//// -------- Logical Operators -----------------

/// Qs. A "good string" is a string that starts with the letter 'a' & has a length > 3. Write a program to find if a string is good or not.


string = "a boy is there"

if ((string[0] ==='a') && (string.length >3)) {
    console.log("good String")
} else {
    console.log("Not a good string")
}




//// -------- Truthy & falsy -----------------

if (true) {
    console.log("It has true value.")
} else {
    console.log("It has false value.")
}

if (0) {
    console.log("It has true value.")
} else {
    console.log("It has false value.")
}

if (1) {
    console.log("It has true value.")
} else {
    console.log("It has false value.")
}

if ("") {
    console.log("It has true value.")
} else {
    console.log("It has false value.")
}

if (null) {
    console.log("It has true value.")
} else {
    console.log("It has false value.")
}

if (undefined) {
    console.log("It has true value.")
} else {
    console.log("It has false value.")
}

num = 0;

if (num) {
    console.log("num is not 0");
} else {
    console.log("num is 0")
}

