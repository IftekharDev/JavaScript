//// ------ slice method ------------

cars = [ 'Ferrari', 'Toyota', 'Audi', 'BMW', 'Maruti', 'XUV' ];
console.log(cars.slice());
console.log(cars.slice(2));
console.log(cars.slice(2,3));
console.log(cars.slice(cars.length - 1));
console.log(cars.slice(12));  // Empty array.
console.log(cars.slice(-2));
console.log(cars.slice(-3));
console.log(cars.slice(-7));




//// ------ splice method ------------

cars = [ 'Ferrari', 'Toyota', 'Audi', 'BMW', 'Maruti', 'XUV' ];
console.log(cars.splice(5));
console.log(cars);
console.log(cars.splice(0,1));
console.log(cars);
console.log(cars.splice(1,2));
console.log(cars);
console.log(cars.splice(0,0,"XUV", "Ferrari", "Audi", "BMW"));
console.log(cars);
console.log(cars.splice(1,0,"Mercedes"));
console.log(cars);
console.log(cars.splice(1,1,"Thar"));
console.log(cars);




//// ------ sort method ------------

cars = [ 'Ferrari', 'Toyota', 'Audi', 'BMW', 'Maruti', 'XUV' ];
cars.sort()    // Changes the original list
console.log(cars);

let chars = ['b', 'q', 'g', 'y', 'a', 'f'];
chars.sort();
console.log(chars);

marks = [99, 89, 67, 42, 100];
marks.sort();   // Doesn't works for numbers.
console.log(marks);




//// -------- Practice Ques -----------

//// start : ["January", "July", "March", "August"]
//// final : ["July", "June", "March", "August"]

months = ["January", "July", "March", "August"];

console.log(months.splice(0, 2, "July", "June"));
console.log(months);

let languages = ['c', "c++", "html", "javascript", "python", "java", "c#", "sql"];
console.log(languages.reverse().indexOf("javascript"));




//// -------- Array reference -----------

let arr = ['a', 'b', 'c', 'd'];
let arrCopy = arr;   // reference which arr contained has stored in arrCopy too.
console.log(arr == arrCopy);
console.log(arr === arrCopy);
arr.push('e');
console.log(arrCopy);




//// -------- Constant Array -----------

const g = 10;
g = 9.8;  // will throw an error
console.log(g);

arr = [1,2,3];
arr.push(4);   // This can be done.
console.log(arr);
arr.pop();   // This can also be done.
console.log(arr);

arr = [1,2,3,4];  // This can't be done.
console.log(arr);




//// -------- Nested Arrays -----------

nums = [[2,4], [3,6], [4,8]];
console.log(nums.length);
console.log(nums[0]);
console.log(nums[0].length);
console.log(nums[0][0]);
console.log(nums[2][0]);




//// -------- Practice Ques -----------

let arr_2D = [["X", null, "O"], [null , "X", null], ["O", null, "X"]];
console.log(arr_2D);
arr_2D[0][1] = "O";
console.log(arr_2D);