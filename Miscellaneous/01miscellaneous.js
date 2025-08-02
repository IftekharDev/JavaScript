
// ------ this keyword -------------

let student = {
    name : "David",
    age : 28,
    maths : 95,
    physics : 98,
    chemistry : 92,
    getAvg() {
        console.log(this);
        avg = (this.maths + this.physics + this.chemistry) /3;
        console.log(`${this.name} got average of ${avg} marks.`);
    }
}

student.getAvg();


function getAvg() {
    console.log(this);
}

getAvg();




//// -------- try & catch -----------

console.log("Hello");
console.log("Hello");

try {
    console.log(a);
} catch(err) {
    console.log("An error occured... a is not defined.");
    console.log(err);
}

console.log("Hello2");
console.log("Hello2");
console.log("Hello2");




//// ---- Arrow Functions ---------

let sum = (a, b) => {
    console.log(a + b);
}                               // Arrow function

sum(2,4);


function sum2(a, b) {  
    console.log(a + b);
}                               // function

sum2(2,4);


const sum3 = function (a,b) {
    console.log(a + b);
}                               // function expression

sum3(2, 4);


let cube = n => {
    return n**3;
}

console.log(cube(4));


const pow = (a,b) => {
    return a**b;
}

console.log(pow(4,4));




//// ------- Implicit return in arrow function -----------

const mul = (a,b) => (a*b);
console.log(mul(3,4));

sum = (a,b) => a + b;
console.log(sum(5,6));

cube = (a) => a**3;
console.log(cube(6));




//// --------- Set Timeout function -------------

console.log("Hi There!");

setTimeout(() => {
    console.log("UniVerse...");
}, 3000)

console.log("Welcome to ");




//// ---- Set Interval function ---------


// console.log("Hii There!");

// let id = setInterval(() => {
//     console.log("David");
// }, 1000)

// setTimeout(() => {
//     clearInterval(id)
// }, 5000);



//// ------- this with arrow function ------

student = {
    name : "David",
    marks: 98,
    prop : this,  // global scope
    getName : function () {
        console.log(this);
        return (this.name)
    },
    getMarks : () => {
        console.log(this);  // parent's scope - window  
        return(this.marks)
    },
    getInfo1 : function () {
        setTimeout(() => {  // student
            console.log(this);
        }, 2000)
    },
    getInfo2 : function () {
        setTimeout(function () {   // window
            console.log(this);
        }, 2000)
    }
}

console.log(student.prop);
console.log(student.getName());
console.log(student.getMarks());

console.log(student.getInfo1());
console.log(student.getInfo2());



//// --------- Practice qs----------

const sq = (n) => n**2;
console.log(sq(12));


let counter = 0;

id = setInterval(() => {
    console.log("Hello World");
    counter++;

    if (counter==5) {
        clearInterval(id);
    }
},2000)



id = setInterval(() => {
    console.log("Hello World");
}, 2000)

setTimeout(() => {
    clearInterval(id);
    console.log("Clear Interval has stopped the set Interval.");
}, 11000)



//// Write an arrow function named arrayAverage that accepts an array of numbers
//// and returns the average of those numbers.

const arrayAverage = (arr) => {
    let total = 0;

    for(ele of arr) {
        total+=ele;
    }

    let avg = total/arr.length;
    return avg;
}

let numbers = [2,3,5,6,8,5,6,5];
console.log(arrayAverage(numbers));



const isEven = (n) => {
    even = (n%2==0)? "even" : "not even";
    return even;
}

console.log(isEven(8));