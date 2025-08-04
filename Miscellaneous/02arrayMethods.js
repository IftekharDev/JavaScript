
//// ---------- forEach -------------

let arr = [1,2,3,4,5];

function print(el) {
    console.log(el);
}

arr.forEach(print);


arr.forEach(function (el) {
    console.log(el);
})


arr.forEach((el)=> {
    console.log(el);
})


arr = [
    {
        name : "David",
        marks : 98
    },
    {
        name : "Sydney",
        marks : 96
    },
    {
        name : "Faruk",
        marks : 97
    }
];

arr.forEach((student) => {
    console.log(student);
})

arr.forEach((student) => {
    console.log(student.marks);
})




//// ----------------- Map -----------------------

let num = [1,2,3,4,5];

doubledNum = num.map((el)=> {
    return el*2;
})

console.log(doubledNum);


let student = [
    {
        name : "David",
        marks : 98
    },
    {
        name : "Sydney",
        marks : 96
    },
    {
        name : "Faruk",
        marks : 97
    }
];

let gpa = student.map((student) =>{
    marks = student.marks;
    marksToGpa = marks/10;
    return marksToGpa;
})

console.log(gpa);




//// --------------- Filter --------------------------

let nums = [1,32,,43,23,65,34,7,9,8,63,62,10,3,546,32,3];

let evens = nums.filter((el)=> (el%2==0));
console.log(evens);


nums = [1,32,,43,23,65,34,7,9,8,63,62,10,3,546,32,3];

let ans = nums.filter((x) => {
    return x<56;
})
console.log(ans);




//// ---------- Every (Similar to logical AND) -------------

let result = [2,4,6].every((x) => x%2==0);
console.log(result);

result1 = [2,4,6,8,9].every((x) => x%2==0);
console.log(result1);

result2 = [3,5,7,13,9].every((x) => x%2!=0);
console.log(result2);




//// ---------- Some (Similar to logical OR) -------------

result = [2,4,6].some((x) => x%2==0);
console.log(result);

result = [2,4,6,8,9].some((x) => x%2==0);
console.log(result);

result = [3,5,7,13,9].some((x) => x%2==0);
console.log(result);




//// ------------- Reduce -----------------

nums = [1,3,5,6,7]
let add = nums.reduce((res,el) => {
    console.log(res);
    return res+el;
});
console.log(add);


nums = [1,3,5,6,7]
add = nums.reduce((res,el) => res+el);
console.log(add);


nums = [1,3,5,6,7]
let mul = nums.reduce((x,y) => x*y);
console.log(mul);


nums = [1,32,,43,23,65,34,7,9,8,63,62,10,3,54,32,3];

max = nums.reduce((x,y) => {
    x = (x>y)? x:y;
    return x;
});
console.log(max);


nums = [1,32,,43,23,65,34,7,9,8,63,62,10,3,56,32,3];

max = nums.reduce((x,y) => {
    if (x>y){
        return x;
    } else {
        return y;
    }
});
console.log(max);




//// -------- Practice Qs---------

nums = [10,20,60,3370,6580,82630,2620,3720,266390];

isMultipleOf10 = nums.every((x)=> x%10==0);
console.log(isMultipleOf10);


nums = [137,220,605,337,658,82,630,162,372,266,397];

function getMin(arr) {
    min = arr.reduce((x,y) => {
    if (x<y){
        return x;
    } else{
        return y
    }
})
    return min
}

console.log(getMin(nums));



