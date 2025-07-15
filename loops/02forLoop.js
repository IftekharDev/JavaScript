
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

// let fruits = ["mango 🥭", "apple 🍎", "banana 🍌", "litchi", "papaya"];
// fruits.push("pineapple 🍍");

// for (i =0; i<fruits.length ; i++) {
//     console.log(i, fruits[i]);
// }

// for (i= (fruits.length-1); i>=0; i-- ) {
//     console.log(i, fruits[i]);
// }




//// ------ Loops with Nested Arrays ------------

// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonderwoman", "flash"]];

// for (i = 0; i<heroes.length; i++) {
//     for(j = 0; j<heroes[i].length; j++) {
//         console.log(heroes[i][j]);
//     }
// }

// let students = [["Clark", 95], ["Loius", 96], ["Ben", 77]];

// for (i= 0; i<students.length; i ++) {
//     for (j = 0; j<students[i].length; j++) {
//         console.log(students[i][j]);
//     }
// }




//// ------ for of loop ------------

// fruits = ["mango 🥭", "apple 🍎", "banana 🍌", "litchi", "papaya"];

// for (fruit of fruits) {
//     console.log(fruit);
// }

// for (char of "Arsalan") {
//     console.log(char);
// }




//// ------Nested for of loop ------------

// heroes = [["ironman", "spiderman", "thor", "captain america"], ["superman", "wonderwoman", "flash"]];

// for (list of heroes) {
//     for (hero of list) {
//         console.log(hero);
//     }
// }