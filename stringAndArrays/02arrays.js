
let students = ["Dolores", "Gray", "Rocky"];

let nums = [2, 4, 6, 8];

let info = ["Salman", 25, 86];  // Mixed array

let empArr = [];  //  Empty Array




//// ------ Indexing ------------

nums = [2, 4, 6, 8];
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[3]);
console.log(nums[5]);
console.log(typeof nums)

info = ["Salman", 25, 86];
console.log(info[0][1])
console.log(info[0][4])
console.log(info[0].length)




//// ------- length ----------------

nums = [2, 4, 6, 8];
console.log(nums.length);
console.log([].length);
console.log([1, 2, 3, 4].length)




//// --------- Replace -------------

let fruits = ["Apple", "Mango", "Berry"];
fruits[0] = "Banana";   // changes the original array.
console.log(fruits);  
fruits[10] = "Litchi"   // It stores element at 10th index and remaining places remains as empty items.
console.log(fruits);
console.log(fruits.length);  // Empty elements are also counted in the length




//// ------ push method ------------

let cars = ["Audi", "BMW", "Maruti", "XUV"];
cars.push("Toyota");
console.log(cars);
cars.push("Ferrari");
console.log(cars);




//// ------ pop method ------------

cars = ["Audi", "BMW", "Maruti", "XUV","Toyota" ];
cars.pop();
console.log(cars);
console.log(cars.pop());
console.log(cars);


let followers = ['a', 'b', 'c'];
let blocked = followers.pop();
console.log(followers);
console.log(blocked);




//// ------ unshift method ------------

cars = ["Audi", "BMW", "Maruti", "XUV"];
cars.unshift("Toyota");
console.log(cars);
cars.unshift("Ferrari");
console.log(cars);




//// ------ shift method ------------

cars = [ 'Ferrari', 'Toyota', 'Audi', 'BMW', 'Maruti', 'XUV' ];
cars.shift()
console.log(cars);

followers = ['a', 'b', 'c'];
blocked = followers.shift();
console.log(followers);
console.log(blocked);




//// -------- Practice Ques -----------

//// start : ["January", "July", "March", "August"]
//// final : ["July", "June", "March", "August"]

let months = ["January", "July", "March", "August"];
months.shift();
let july = months.shift();
months.unshift("June");
months.unshift(july);
console.log(months);




//// ------ indexOf method ------------

cars = [ 'Ferrari', 'Toyota', 'Audi', 'BMW', 'Maruti', 'XUV' ];
console.log(cars.indexOf("Audi"));
console.log(cars.indexOf("Harley"));
console.log(cars.indexOf("maruti"));

marks = [99, 89, 67, 42, 100];
console.log(marks.indexOf(100));
console.log(marks.indexOf(97));




//// ------ includes method ------------

cars = [ 'Ferrari', 'Toyota', 'Audi', 'BMW', 'Maruti', 'XUV' ];
console.log(cars.includes("BMW"));
console.log(cars.includes("Harley"));




//// ------ concat method ------------

let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "violate"];

let finalColors = primary.concat(secondary);   // Creates a new Array.
console.log(finalColors);

let allColors = secondary.concat(primary);
console.log(allColors);




//// ------ reverse method ------------

cars = [ 'Ferrari', 'Toyota', 'Audi', 'BMW', 'Maruti', 'XUV' ];

cars.reverse();   // Changes the original array.
console.log(cars);


