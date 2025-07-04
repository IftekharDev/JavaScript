a = 10
console.log(a)

b = 5
console.log(b)

Name = "Tony"
console.log(Name)

console.log(a+b)

a = 10
console.log(typeof(a))

age = 25
console.log(typeof(age))

name = "Tony Stark"
console.log(typeof(name))

console.log(typeof(5.9))
console.log(typeof("a"))




//// `Numbers in JS`

a = 16
console.log(typeof(a))

price = 99.99
console.log(typeof(price))

displacement = -25
console.log(typeof(displacement))


a = 10
b = 5

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(10+5)


a = 0.999999999
console.log(a)  // output - same

a = 0.9999999999999999999
console.log(a)  // output - 1 (cause there is a limit) - rounded off to nearest integer value




//// `Operations in JS`

a = 10
b = 20

sum = a + b
diff = a - b
mul = a * b
div = a / b

console.log(sum)
console.log(diff)
console.log(mul)
console.log(div)

console.log(9 % 2)  // This operator is known as modulo
console.log(8 % 2)

console.log(2**3)  // This operator is known as Exponentiation or power operator

a = 2
b = 3
console.log(a**b)




//// `NaN in JS`

console.log(0 / 0)
console.log(typeof(0 / 0))

console.log(NaN + 1)
console.log(NaN - 1)
console.log(NaN * 1)
console.log(NaN * NaN)




//// `Operator Precendence`

console.log((5+2)/7+1*2)

console.log((2+1)*3)  //9
console.log(3/1+2**2)  //7
console.log(4+1*6/2)  //7




//// `Practice QS`

//// `Qs. What is the value of age after this code runs?`

let age = 23;
console.log(age + 2)
console.log(age)


//// What is the value of avg after this code runs?

let hindi = 80;
let eng = 90;
let math = 100;
let avg = (hindi + eng + math)/3
console.log(avg)




//// Assignment Operators

let a = 5;
let b = a;
console.log(b)

let age_ = 23;
age +=2;
console.log(age_);

age*=2;
console.log(age)




//// Unary Operators

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



//// Practice Qs
//// Qs. What is the value of each variable in each line of code?

let num = 5;
let newNum = num++;  //newNum = 5, num = 6
console.log(newNum, num)
newNum = ++num;  // newNum = 7, num = 7
console.log(newNum, num)




//// Identifier Rules

let price1;
let price123;
let price$;
let price_;
let oldPrice;

let age4
let _age
let $age

let price = 5;
console.log(price)
console.log(Price)  // price and Price are not same (case sensitive)




//// Boolean in JS

let age3 = 13;
let isAdult = false;

age = 25;
isAdult = true;
console.log(isAdult)
console.log(typeof(isAdult))

isAdult = 'True';
console.log(typeof(isAdult))  //string

let a2 = 5;
console.log(typeof(a2))  //number

a = true;
console.log(typeof(a))  // boolean - its possible to change the type of variable in js




//// String in JS

let firstName = "Tony";
console.log(firstName);
console.log(typeof(firstName));

let lastName = 'Stark';
console.log(lastName)
console.log(typeof(lastName))

let char = 'a';
console.log(char)
console.log(typeof(char))

let num1 = '10';
console.log(num1)
console.log(typeof(num1))  // string anything inside quotes is string

let emp = " ";
console.log(typeof(emp))

str = "bdjhd  yahk!@   #$%&12356709]"
console.log(str)
console.log(typeof(str))

sentence = 'This is "apple"'
console.log(sentence)




//// String Indices

let name = "Tony Stark"
console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name.length)
console.log(name[name.length - 1])
console.log("Arsalan"[1])




//// String Concatenation

let firstName1 = "Tony";
let lastName1 = "Stark"

fullName = firstName1 + " " + lastName1
console.log(fullName)

console.log(firstName1 + 1)  // Number also gets concatenated to the string as a string





//// Null & Undefined in JS

let name3;
console.log(name3);
console.log(typeof(name3));

name = "Noor";
console.log(name[10000])


let a5 = null;
console.log(a5)

let year2 = null;
year2 = 2000;
console.log(year2)




//// Practice Qs

name = "Iftekhar";
console.log(name.length)


firstName = "Iftekhar"
console.log(firstName[0])
console.log(firstName[firstName.length -1])

console.log(''.length)
console.log(" ".length)