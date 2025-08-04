
//// ------- Methods -----------

let calculator = {
    add : function(a,b) {
        return a + b;
    },
    sub : function(a,b) {
        return a - b;
    },
    mul : function(a,b) {
        return a*b;
    }
}

console.log(calculator.add(2,5));
console.log(calculator.mul(3,76));


calculator = {
    add(a,b) {
        return a + b;
    },
    sub(a,b) {
        return a - b;
    },
    mul(a,b) {
        return a*b;
    }
}

console.log(calculator.sub(3,7));


//// ----- Practice Ques------------


//// Qs1. Write a JavaScript function that returns array elements larger than a number.

let number = 54;
let array = [21,45,87,96, 79, 42, 9,76,62 ]

function greaterElements(arr, number) {
    let result = []

    for(num of arr) {
        if (num>=number) {
            result.push(num)
        }
    }

    return result;
}

console.log(greaterElements(array, number));



//// Qs2. Write a JavaScript function to extract unique characters from a string. 
////  Example: str = “abcdabcdefgggh” ans = “abcdefgh”

let str = "abcdabcdefgggh";

function uniqueChar(string) {
    let uniqueStr = "";

    for (char of string) {
        if (!(uniqueStr.includes(char))) {
            uniqueStr+=char;
        }
    }

    return uniqueStr
}

console.log(uniqueChar(str));



//// Qs3. Write a JavaScript function that accepts a list of country names as input 
//// and returns the longest country name as output.
//// Example : country = ["Australia", "Germany", "United States of America"] output : "United States of America"


let country = ["Australia", "Germany", "United States of America"];

function longestContName(array) {
    let longestName = array[0];

    for (let i = 0; i<array.length; i++) {
        if (array[i].length > longestName.length) {
            longestName = array[i];
        }
    }

    return longestName;
}

console.log(longestContName(country));



//// Qs4. Write a JavaScript function to count the number of vowels in a String argument.

let String = "Hey, Today is Tuesday. Lets go and play some football.";

function vowelCounter(str) {

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCounts = 0;

    for (char of str) {
        if (vowels.includes(char.toLowerCase())) {
            vowelCounts+=1;
        }
    }

    return vowelCounts
}

console.log(vowelCounter(String));



//// Qs5. Write a JavaScript function to generate a random number within a range (start, end).


function range(start, end) {
    let randomNumber = Math.floor(Math.random()*end) + 1;

    while(randomNumber<start) {
        randomNumber = Math.floor(Math.random()*end) + 1;
    }

    return randomNumber;
}

console.log(range(5,15));


let start = 100; 
let end = 200; 
function generateRandom(start, end) { 
    let diff = end - start; 
    return Math.floor(Math.random() * diff) + start; 
}



//// -------- Default Parameters ---------

function sum(a, b= 5) {
    return a+b;
}

console.log(sum(5));
console.log(sum(4,6));
