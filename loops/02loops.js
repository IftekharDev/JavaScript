
//// ------ Break ------------

i = 1;

while (i<=5) {
    if (i==3) {
        break;
    }
    console.log(i);
    i++
}


let movie = "Avengers";
let guess = '';

while ((guess != movie)) {
    guess = prompt("Guess my favourite movie or type quit to exit: ")

    if (guess == movie) {
        console.log("Congratulations You've won the game");
    } else if (guess == "quit") {
        console.log("Good bye");
        break;
    } else {
        console.log("Wrong Guess!. Give it another try.");
    }
}




//// ------ Loops with Arrays ------------

let fruits = ["mango 🥭", "apple 🍎", "banana 🍌", "litchi", "papaya"];
fruits.push("pineapple 🍍");

for (i =0; i<fruits.length ; i++) {
    console.log(i, fruits[i]);
}


for (i= (fruits.length-1); i>=0; i-- ) {
    console.log(i, fruits[i]);
}




//// ------ Loops with Nested Arrays ------------

let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonderwoman", "flash"]];

for (i = 0; i<heroes.length; i++) {
    for(j = 0; j<heroes[i].length; j++) {
        console.log(heroes[i][j]);
    }
}


let students = [["Clark", 95], ["Loius", 96], ["Ben", 77]];

for (i= 0; i<students.length; i ++) {
    for (j = 0; j<students[i].length; j++) {
        console.log(students[i][j]);
    }
}




//// ------ for of loop ------------

fruits = ["mango 🥭", "apple 🍎", "banana 🍌", "litchi", "papaya"];

for (fruit of fruits) {
    console.log(fruit);
}


for (char of "Arsalan") {
    console.log(char);
}




//// ------Nested for of loop ------------

heroes = [["ironman", "spiderman", "thor", "captain america"], ["superman", "wonderwoman", "flash"]];

for (list of heroes) {
    for (hero of list) {
        console.log(hero);
    }
}




////-------- Practice Qs.--------------------

//// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.

arr = [1, 2, 3, 4, 5, 6, 2, 3];
num = 2;

while (arr.indexOf(num) != -1) {
    numIndex = arr.indexOf(num);
    arr.splice(numIndex, 1);
}

console.log(`all occurance of ${num} removed from the array`);
console.log(arr);


//// Qs2. Write a JS program to find the no of digits in a number.

let number = 287152;
let count = 0;

let stringNum = String(number)

for (char in stringNum) {
    count+=1;
}
console.log(count);


//// Qs3. Write a JS program to find the sum of digits in a number.

number = 287152;
let sum = 0;

stringNum = String(number)

for (char in stringNum) {
    remainder = number%10;  //2, 
    quotient = Math.floor(number/10);  //
    number= quotient;
    sum = sum + remainder;
}
console.log(sum);


//// Qs. 4. Print the factorial of a number n.

factorial = 1;

for (i = 1; i<=5; i++) {
    factorial*=i
}
console.log(factorial);


//// Qs 5. Find the largest number in an array with only positive numbers.

arr = [23, 42, 27, 56,86, 65, 9];

let greatest = arr[0];

for (num of arr){
    if (num > greatest) {
        greatest = num;
    }
}
console.log(greatest);