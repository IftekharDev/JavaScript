
const stu1 = {
    name: "Adam",
    age : 22,
    marks : 98,
    getMarks : function() {
        return this.marks;
    }
};

const stu2 = {
    name: "Eve",
    age : 21,
    marks : 96,
    getMarks : function() {
        return this.marks;
    }
};

const stu3 = {
    name: "Ford",
    age : 25,
    marks : 99,
    getMarks : function() {
        return this.marks;
    }
};

let arr = [1, 2, 3];
let arr2 = [1, 2, 3];
arr.sayHello = function() {
    console.log("Hello");
}

console.log(arr.__proto__);




//// ----------- Factory functions------------------

function personMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hii my name is ${name}`);
        }
    };
    return person;
}

let p1 = personMaker("Uthred", 30);  //copy
console.log(p1);
p1.talk();

let p2 = personMaker("Zoya", 28);    //copy and p1.talk != p2.talk




//// ------------- New Operator -----------------

////Constructors - doesn't return anything and starts with capital letter

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function(){
    console.log(`Hi, my name is ${this.name}`);
}

p1 = new Person("Sam", 23);
p2 = new Person("Wong", 28);

console.log(p1.talk === p2.talk);



////--------- Classes --------------

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

p1 = new Person("Sam", 23);
p2 = new Person("Wong", 28);

console.log(p1);
p1.talk();
console.log(p1.talk === p2.talk);




//// ---------- Inheritance --------------

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        return (`Hi, my name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, age, marks) {
        super(name, age);           //parent class constructor is being called
        this.marks = marks;
    }
}

class Teacher extends Person{
    constructor(name, age, subject) {
        super(name, age); 
        this.subject = subject;
    }
}

let stud1 = new Student("Bob", 12, 79);
console.log(stud1.marks, stud1.age, stud1.talk());


let t1 = new Teacher("Gwen", 34, "English");
console.log(t1, t1.talk());


class Mammal {
    constructor (name) {
        this.name = name;
        this.type = "warm-blooded";
    }

    eat() {
        return "I'm eating";
    }
}

class Dog extends Mammal {
    constructor(name) {
        super(name)
    }

    bark() {
        return "Wooof....";
    }

    eat() {
        return "Dog is eating";
    }
}

class Cat extends Mammal {
    constructor(name) {
        super(name)
    }

    meow() {
        return "Meow....";
    }
}

let dog1 = new Dog("Shera");
console.log(dog1, dog1.name, dog1.type, dog1.eat(), dog1.bark());


