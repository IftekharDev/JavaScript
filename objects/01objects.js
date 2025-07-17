
//// ------- Creating Object ---------

const student = {
    name : "Yusuf",
    age : 25,
    marks : 76
};
console.log(student);

const item = {
    price : 99.99,
    discount : 20,
    colors : ["Green", "Yellow"]
}
console.log(item);

const post = {
    username : "@iamift",
    content : "Enjoy the view",
    likes : 23,
    reposts : 12,
    tags : ["@elon", "@trump", "@warren"]
}
console.log(post);




//// ----- Get Values -----------

student = {
    name : "Yusuf",
    age : 25,
    marks : 76,
    friends : ["John", "Mark"]
};
console.log(student["name"]);
console.log(student["marks"]);
console.log(student.age);
console.log(student.friends[0]);




//// ---- Conversion in Get values ---------

const obj = {
    1 : "a",
    2 : "b",
    true : "c",
    null : "d",
    undefined : 'e'
};
console.log(obj[1]);
console.log(obj[true]);
console.log(obj[null]);
console.log(obj[undefined]);
console.log(obj.true);




//// ---------Add/Update values-----------

student = {
    name : "Steve",
    age : 14,
    marks : 98.9,
    city : "New York"
};

student.city = "Chicago";
console.log(student);

student.gender = "Male";
console.log(student);

student.marks = "A+";
console.log(student);




//// ---------Delete values-----------

const student = {
    name : "Steve",
    age : 14,
    marks : 98.9,
    city : "New York"
};

delete student.marks
console.log(student);




//// -------- Nested Objects ----------

const classInfo = {
    Tony : {
        grade : 'A+',
        city : "New York"
    },
    Bucky : {
        grade : "A",
        city : "Manhattan"
    },
    Charles : {
        grade : "A+",
        city : "New York"
    }
};

console.log(classInfo);
console.log(classInfo.Tony);
console.log(classInfo.Bucky.grade);

classInfo.Bucky.city = "Wakanda";
console.log(classInfo);



