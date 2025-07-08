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

