
//// ---- Array of objects ----------

// classInfo = [
//     {
//         name : "Tony",
//         grade : "A+",
//         city : "New York"
//     },
//     {
//         name : "Bucky",
//         grade : "A",
//         city : "Hells Kitchen"
//     },
//     {
//         name : "T'challa",
//         grade : "A",
//         city : "Wakanda"
//     }
// ]

// console.log(classInfo);
// console.log(classInfo[1]);
// console.log(classInfo[0].city);




//// ---- Math Object ------

// console.log(Math.E);
// console.log(Math.PI);

// console.log(Math.abs(12.5));
// console.log(Math.abs(-12));

// console.log(Math.pow(3, 3));

// console.log(Math.floor(5));  // round offs to the nearest smaller integer
// console.log(Math.floor(5.2));
// console.log(Math.floor(5.5));
// console.log(Math.floor(5.8));
// console.log(Math.floor(-5));
// console.log(Math.floor(-5.2));

// console.log(Math.ceil(5));
// console.log(Math.ceil(5.2));  // round offs to the nearest larger integer
// console.log(Math.ceil(5.5));
// console.log(Math.ceil(5.8));
// console.log(Math.ceil(-5));
// console.log(Math.ceil(-5.2));

// console.log(Math.random());  // Gives a random value between 0 & 1(exclusive).
// console.log(Math.random());
// console.log(Math.random());

// let step1 = Math.random();
// let step2 = step1 * 10;
// let step3 = Math.floor(step2);
// console.log(step3);

// console.log(Math.floor(Math.random() * 10) + 1) ;
// console.log(Math.random());

// console.log(Math.floor(Math.random() * 100) + 1);
// console.log(Math.floor(Math.random() * 5) + 1);
// console.log(Math.floor(Math.random() * 5) + 21);




//// ------ Practice Qs ------------

//// Create a program that generates a random number representing a dice roll. [The number should be between 1 and 6].

// diceNumber = Math.floor(Math.random() * 6) + 1;
// console.log(diceNumber);



//// Create an object representing a car that stores the following properties for the car: name, model, color.
//// Print the car’s name.

// const car = {
//     name : "BMW",
//     model : "IDK",
//     color : "White"
// };
// console.log(car.name);



//// Create an object Person with their name, age and city.
//// Edit their city’s original value to change it to “New York”.
//// Add a new property country and set it to the United States.

// const person = {
//     name : "Ben",
//     age : 23,
//     city : "Miami"
// };

// person.city = "New York";
// person.country = "America";
// console.log(person);