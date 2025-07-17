
const maxNumber = prompt("Enter the max number: ")
const randomNumber = Math.floor(Math.random() * maxNumber) + 1;

let userInput = prompt("Enter your guess: ")

while (true) {
    if (userInput == "quit") {
        break;
    }

    if (userInput != randomNumber) {
        if (userInput < randomNumber) {
            userInput = prompt("You were close try a greater number: ")
        } else {
            userInput = prompt("You were close try a smaller number: ")
        }
        // userInput = prompt("You're wrong please try again.")
    } else {
        console.log("Congrats, you've guessed the right number. random number was" , randomNumber);
        break;
    }
}

