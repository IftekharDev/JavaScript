
console.log("Before my if statement");
let age = 23;
if (age >= 18) {
    console.log("You can vote")
    console.log("You can drive")
    let a = 5;
    console.log(5 * a);
};
if (age < 18) {
    console.log("You cannot vote")
}
if (age > 20) {
    console.log("You are in your 20s")
}
console.log("After if statement");

//// --------------------------------------

firstName = "Arsalan";
if (firstName == "Arsalan") {
    console.log(`Welcome ${firstName}`)
}

//// --------------------------------------

let color = "Red";

if (color == 'Red') {
    console.log("Stop")
};
if (color == "Yellow") {
    console.log("Get Started")
};
if (color == "Green") {
    console.log("Go")
};

//// --------------------------------------

age = 14;

if (age >= 18) {
    console.log("You can vote")
} else if (age <= 18) {
    console.log("You cannot vote")
}

//// --------------------------------------

marks = 75;

if (marks >= 80) {
    console.log("Your grade is: A+");
} else if (marks >= 60) {
    console.log("Your grade is: A");
} else if (marks >= 33) {
    console.log("Your grade is: B");
} else if (marks < 30) {
    console.log("Your grade is: F");
}

//// --------------------------------------

let month = "january";

if (month === "january") {
    console.log("Winter is here.");
} else if (month === 'april') {
    console.log("Summer is here.");
}

//// --------------------------------------

color = "Red";

if (color == 'Red') {
    console.log("Stop")
} else if (color == "Yellow") {
    console.log("Get Started")
} else if (color == "Green") {
    console.log("Go")
};

//// --------------------------------------

age = 14;

if (age >= 18) {
    console.log("You can vote.");
} else {
    console.log("You cannot vote.");
}

//// --------------------------------------

let size = "XL";

if (size == "XL") {
    console.log("Price is Rs. 250");
} else if (size == 'L') {
    console.log("Price is Rs. 200");
} else if (size == 'M') {
    console.log("Price is Rs. 100");
} else {
    console.log("Price is Rs. 50");
}

//// --------------------------------------

marks = 65;

if (marks >= 33) {
    console.log("Pass")
    if (marks >= 80) {
        console.log("Grade: O")
    } else {
        console.log("Grade: A")
    }
} else {
    console.log("Better luck next time!")
}




//// -------- Switch Statement -----------------

color = "green";

switch(color) {
    case 'red':
        console.log("Stop");
        break;
    case 'yellow':
        console.log("Start");
        break;
    case 'green':
        console.log("Go");
        break;
    default :
        console.log("Broken Light");
}

//// --------------------------------------

day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7 :
        console.log("Sunday");
        break;
    default :
    console.log("Wrong Day")
}



//// -----------------Practice Questions-------------

let num = 73;

if (num % 10 == 0) {
    console.log("good");
} else {
    console.log("bad");
}

//// --------------------------------------

let quarter = 2;

switch (quarter) {
    case 1:
        console.log("Months in Quarter 1 : January, Febrauary, March");
        break;
    case 2:
        console.log("Months in Quarter 2 : April, May, June");
        break;
    case 3:
        console.log("Months in Quarter 3 : July, August, September");
        break;
    case 4:
        console.log("Months in Quarter 4 : October, November, December");
        break;
    default:
        console.log("Not a valid quarter.");
}

//// --------------------------------------

string = 'Abracadabra'

if ((string[0] === 'a' || string[0] === 'A') && string.length >= 5) {
    console.log("golden string")
} else {
    console.log("Not a golden string")
}

//// --------------------------------------

num1 = 12;
num2 = 31;
num3 = 24;

if ((num1 > num2) && (num1 > num3)) {
    console.log(`${num1} is the greatest number`);
} else if (num2 > num3) {
    console.log(`${num2} is the greates number`);
} else {
    console.log(`${num3} is the greatest number`)
}

//// --------------------------------------

num1 = 32;
num2 = 47852;

if (num1 % 10 == num2 % 10) {
    console.log("Both number have same last digit")
} else {
    console.log("Both number doesn't have same last digit")
}