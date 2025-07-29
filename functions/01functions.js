
//// ------ Functions ---------

function hello() {
    console.log("Hello");
}

hello();


function printName() {
    console.log("Arsalan Shaami");
}

printName();


function print1to5() {
    for(let i=1; i<=5; i++) {
        console.log(i);
    }
}

print1to5();


function isAdult () {
    let age = 26;

    if (age>=18) {
        console.log("Adult");
    } else {
        console.log("Not Adult");
    }
}

isAdult();


function poem() {
    console.log("Twinkle twinkle little star");
}

poem();


function dice() {
    randomNumber = Math.random();
    diceNumber = Math.floor((randomNumber*6)) + 1;

    console.log(diceNumber);
}

dice();




//// ------- Functions with Arguments -----------

function printName(name) {
    console.log(name);
}

printName("Arsalan");


function printInfo(name, age) {
    console.log(`${name}'s age is ${age}`);
}

printInfo("Arsalan", 23)
printInfo("Reed")


function sum(a, b) {
    console.log(a+b);
}

sum(2,3);


function average(a, b, c) {
    avg = (a+b+c)/3;
    console.log(avg);
}

average(2,3,4);


function table(num) {
    for (let i= 1; i<=10; i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
}

table(17);
table(19);
table(23);




//// ---------- Return Keyword -------------

function sum(a , b) {
    return a + b;
}

let s = sum(4,5);
console.log(s);

let ss = sum(sum(2,5), 7);
console.log(ss);


function isAdult(age) {
    if(age>=18) {
        return "adult";
    } else {
        return "not adult";
    }
    console.log("Bye bye");
}

console.log(isAdult(23));


function sum1ton(n) {
    let sum = 0;
    for (let i = 1; i<=n; i++) {
        sum+=i;
    }
    return sum
}

console.log(sum1ton(25));


function stringconcat (array) {
    let finalString = "";

    for (ele of array) {
        finalString+=ele;
    }
    
    return finalString;
}

console.log(stringconcat(["Apple", "Mango", "Banana"]));
