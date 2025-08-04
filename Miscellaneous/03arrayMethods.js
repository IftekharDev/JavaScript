
//// --------- Spread -------------

// arr = [137,220,605,337,658,82,630,162,372,266,397,1,32,43,23,65,34,7,9,8,63,62,10,3,56,32,3]
// console.log(...arr);


// arr = [137,220,605,337,658,82,630,162,372,266,397,32,43,23,65,34,798,63,621, 56,32]
// console.log(Math.min(1,2,3));
// console.log(Math.min(...arr));


// console.log(..."Arsalan");


// arr = [1,2,3,4,5];

// newArr = [...arr];
// console.log(arr);
// console.log(newArr);

// newArr.push(6);
// console.log(newArr);
// console.log(arr);


// let chars = [..."Hello"];
// console.log(chars);


// let evens = [2,4,6,8];
// let odds = [1,3,5,7,9];

// let numbers = [...evens, ...odds];
// console.log(numbers);


// let data = {
//     email : "ift1234@gmail.com",
//     password : "1234"
// };

// let dataCopy = {...data, id : 124, country : "India"};
// console.log(dataCopy);


// arr = [1,2,3,4,5,6];

// let obj1 = {...arr};
// console.log(obj1);


// let obj2 = {..."Hello"};
// console.log(obj2);



//// ------- Rest ----------------------

// function printElements(...args) {
//     for(let i =0; i<args.length; i++) {
//         console.log(args[i]);
//     }
// }

// printElements(1,2,39,56,47,564,34,2, "Hello", "Arsalan", "Solomon");


// function add(...args) {
//     sum = args.reduce((x,y) => x+y);
//     return sum;
// }

// console.log(add(1,2,3,4,5,6,34,234,3,53,23,23,232,67,45,4,23));


// function min(){
//     console.log(arguments);
//     console.log(arguments.length);
// }

// min(1,2,3,4);


// function min(msg, ...args) {
//     console.log(msg);
//     return args.reduce((x,y) => {
//         if(x<y) {
//             return x;
//         } else {
//             return y;
//         }
//     })
// }

// console.log(min("hello", 237,423,235,546,796,676,423,676,));




//// ------- Destructuring -------------

// let names = ["tony", "bruce", 'peter', "natasha", 'Wanda', "T'chala"];

// let winner = names[0];
// let runnerup = names[1];
// console.log(winner, runnerup);

// [winner, runnerup, ...others] = names;
// console.log(winner, runnerup);
// console.log(others);


// let student = {
//     name : "Harvard",
//     age: 15,
//     class : 9,
//     subjects : ["Physics", "Chemistry", "Maths"],
//     username : "harvard@123",
//     password : "abc123"
// };

// let {username , password, class: room, city= "New York"} = student;
// console.log(username);
// console.log(password);
// console.log(room, city);





//// ------- Practice Question ---------

//// Qs1. Square and sum the array elements using the arrow function and then find the average of the array.

// array = [2,3,5,7,8,3,9,4,2];

// sq = array.map((x) => x*x)
// console.log(sq);

// sum = sq.reduce((x,y) => x+y);
// console.log(sum);

// avg = sum/array.length;
// console.log(avg);


//// Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.

// array = [2,3,5,7,8,3,9,4,2];

// newArray = array.map((x) => x+5);
// console.log(newArray);



//// Qs3. Create a new array whose elements are in uppercase of words present in the original array.

// stringArray = ["Tony", "Steve", "Shahrukh", "Stark", "Siraj"];

// upperCaseArray = stringArray.map((x) => x.toUpperCase());
// console.log(upperCaseArray);



//// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
//// variable number of arguments. The function should return a new array with the original
//// array values and all of the additional arguments doubled.



// function doubleAndReturnArgs(arr, ...args) {
//     newArray = [...arr, ...args.map((x)=> x*2)];
//     return newArray;
// }

// nums = [5,7,8,3,9,4,2]

// console.log(doubleAndReturnArgs(nums, 235,546,796,676,423));



//// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
//// object which contains all the keys and values of the first object and second object.

// function mergeObjects(obj1, obj2) {
//     return {...obj1, ...obj2};
// }

// obj1 = {
//     name : "Tony",
//     marks : 98
// };

// obj2 = {
//     class : 9,
//     subject : "Physics"
// }

// result = mergeObjects(obj1, obj2);
// console.log(result);
