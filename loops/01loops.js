
//// ------ For Loop ------------

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);


for (let i =1 ; i<= 5; i++) {
    console.log(i);
}


for (i = 10; i>=5; i--) {
    console.log(i);
}


for (i = 10; i>=1; i=i-3) {
    console.log(i);
}


for (i = 1; i<= 15; i = i + 2) {
    console.log(i);
}


for (i = 15; i>=1; i = i -2){
    console.log(i);
}


for (i = 2; i <= 20; i = i + 2) {
    console.log(i);
}


for (i = 20; i >= 2; i = i - 2) {
    console.log(i);
}




//// ------ Infinite Loop ------------

// for (i= 1; i>=0 ; i++) {
//     console.log(i);
// }


// for (i = 1; i<= 2; i--) {
//     console.log("This is an infinite loop");
// }


// for (i =1; ; i++) {
//     console.log("This is an infinite loop too");
// }


// for (i=1 ; i<=10; i++) {
//     console.log(`5 * ${i} = ${5*i}`);
// }


// for (i=5; i<=50; i = i + 5) {
//     console.log(i);
// }


// for (i = 1; i<=3; i++) {
//     for(j = 1; j<=3; j++) {
//         console.log(j);
//     }
// }




//// ------ While Loop ------------

let i = 1;

while (i<=5) {
    console.log(i);
    i++;
}


i = 5;

while (i>=1) {
    console.log(i);
    i--;
}


i = 0;

while (i<=20) {
    console.log(i);
    i++;
}


i = 0;

while (i<=20) {
    console.log(i);
    i=i+2;
}


let movie = "Avengers";
let guess = '';

while ((guess != movie) && (guess != "quit")) {
    guess = prompt("Guess my favourite movie or type quit to exit: ")

    if (guess == movie) {
        console.log("Congratulations You've won the game");
    } else if (guess == "quit") {
        console.log("Good bye");
    } else {
        console.log("Wrong Guess!. Give it another try.");
    }
}

