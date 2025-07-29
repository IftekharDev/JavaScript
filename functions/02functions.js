
//// -------- Scope -------------

function calSum (a,b) {
    let sum = a + b;
}

calSum();
// console.log(sum);  //// not accessible outside the function


sum = 54;  // Global scope

function calSum(a,b) {
    let sum = a + b;  // function scope
    return sum;
}

console.log(sum);
console.log(calSum(2,5));



//// --------- Block scope ------------

{
    let a = 5;
}
// console.log(a);


{
    const a = 5;
}
// console.log(a);


{
    var a = 5;   // Not good to use var for declaring a variable.
}
console.log(a);


for (let i =1; i<=5; i++) {
    console.log(i);   // i is block scoped.
}

// console.log(i);


let age = 34;

if (age>=18) {
    let str = "Adult";
}

// console.log(str);




//// ------- Lexical Scope -----------

function outerFunc() {
    let x = 5;
    let y = 4;

    function innerFunc() {
        console.log(x);
    }

    innerFunc()
}

outerFunc()


function outerFunc() {
    let x = 5;
    let y = 4;

    function innerFunc() {   // innerFunc() has function scope.
        let a = 7;
        console.log(x);
    }

    innerFunc()
    // console.log(a);

}

outerFunc()




////  ----- Function Expression ---------

let sumFunc = function(a,b) {
    return a + b;
}

console.log(sumFunc(3,4));


let helloFunc = function() {
    console.log("Hello");
}

helloFunc();




//// ------ High Order Functions ------------


let greet = function() {
    console.log("Hello");
}

function multipleGreet (func, n) {
    for (let i = 1; i<=n; i++) {
        func()
    }
}

multipleGreet(greet, 3)


function oddEvenTest (req) {
    if (req == 'odd') {
        return function(n) {
            console.log(n%2!=0);
        }
    } else if (req == 'even') {
        return function(n) {
            console.log(n%2==0);
        }
    } else {
        console.log("Wrong request");
    }
}

odd = oddEvenTest('odd')
odd(4)
