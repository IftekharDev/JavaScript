
//// ------ Mouse_pointer events --------------

let btn = document.querySelector('button');
console.log(btn);
console.dir(btn);
console.log(btn.onclick);

btn.onclick = function () {
    alert('You have clicked the button.');
    console.log('button was clicked');
}

function sayHello() {
    alert("Hello!")
}

btn.onclick = sayHello;

let btns = document.querySelectorAll('button');
console.log(btns);

function sayHello() {
    alert("Hello");
    console.log('You liked it');
}

for(btn of btns) {
    btn.onclick = sayHello;

    btn.onmouseenter = function() {
        console.log("You entered the button");
    }
}




//// ---------- addEventListner --------

btns = document.querySelectorAll('button');

function sayHello() {
    alert("Hello");
}

function sayName() {
    alert('David');
    console.log("David");
}

for(btn of btns){
    // btn.addEventListener('click', sayHello);
    // btn.addEventListener('click', sayName);
    btn.addEventListener('dblclick', function() {
        console.log("You double clicked me.");
    })
}


//// -------------------------

// let h2 = document.querySelector('h2');
// let colorButton = document.querySelector('#color');
// let innerDiv = document.querySelector(".inner-div");

// function activity() {
//     let red = Math.floor(Math.random()*256);
//     let green = Math.floor(Math.random()*256);
//     let blue = Math.floor(Math.random()*256);

//     h2.innerText = `rgb(${red},${green}, ${blue} )`;
//     innerDiv.style.backgroundColor = `rgb(${red},${green}, ${blue} )`;
// }

// colorButton.addEventListener('click', activity);


//// ---- another implementation ----------

colorButton = document.querySelector('#color');

colorButton.addEventListener('click', function() {
    let h2 = document.querySelector('h2');
    let randomColor = getRandomColor();
    h2.innerText = randomColor;

    let div = document.querySelector(".inner-div");
    div.style.backgroundColor = randomColor;

    console.log('Color updated');
});

function getRandomColor() {
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    
    let color = `rgb(${red},${green}, ${blue} )`;
    return color;
}


let p = document.querySelector('p');

p.addEventListener('click' , function() {
    console.log("Para was clicked");
})


let box = document.querySelector(".box");

box.addEventListener('mouseenter', function() {
    console.log("mouse inside the box");
})


//// ---- this in Event Listner ------------

let btn2 = document.querySelector(".btn2");

btn2.addEventListener('click', function() {
    console.log(this);
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
})

h1 = document.querySelector(".head2");

h1.addEventListener('click', function() {
    console.log(this);
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
})

h3 = document.querySelector(".h32");

h3.addEventListener('click', function() {
    console.log(this);
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
})

para2 = document.querySelector(".para2");

para2.addEventListener('click', function() {
    console.log(this);
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
})


//// ---- good practice for same -------

btn2 = document.querySelector(".btn2");
h1 = document.querySelector(".head2");
h3 = document.querySelector(".h32");
para2 = document.querySelector(".para2");

function addColor() {
    console.log(this);
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
}

btn2.addEventListener('click', addColor);

h1.addEventListener('click', addColor);

h3.addEventListener('click', addColor);

para2.addEventListener('click', addColor);


////--------Keyboard Events -----------

btn = document.querySelector(".btn3");

btn.addEventListener('click', function(event) {
    console.log(event);
    console.log('button clicked');
})

btn.addEventListener('dblclick', function(event) {
    console.log(event);
    console.log('button clicked');
})


let inp = document.querySelector('input');

inp.addEventListener('keydown', function(event) {
    console.log(event);
    console.log("key = ", event.key);
    console.log("code = ", event.code);
    console.log("Key was pressed");
})

inp.addEventListener('keyup', function() {
    console.log("Key was released");
})


inp = document.querySelector('input');

inp.addEventListener('keydown', function(event) {
    console.log("code = ", event.code);
    if(event.code == "ArrowUp") {
        console.log("Character moves forward");
    } else if(event.code == "ArrowDown") {
        console.log("Character moves backward");
    } else if(event.code == "ArrowRight") {
        console.log("Character moves right");
    } else if(event.code == "ArrowLeft") {
        console.log("Character moves left");
    }
})


//// --------- form events -----------------

let form = document.querySelector("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("form submitted");
})



//// ------ Extracting form data -----------

form = document.querySelector("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let inp = document.querySelector("#inp2");

    console.log(inp);
    console.dir(inp);
    console.log(inp.value);
})


form = document.querySelector("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let user = document.querySelector("#inp2");
    let pass = document.querySelector("#pass");

    console.log(user.value);
    console.log(pass.value);
    alert(`Hi, ${user.value} your password is ${pass.value}`);
})


form = document.querySelector("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(form);
    console.dir(form);

    console.log(form.elements);
    console.log(form.elements[1]);

    let user = this.elements[0];
    let pass = this.elements[1];

    console.log(user.value);
    console.log(pass.value);
    alert(`Hi, ${user.value} your password is ${pass.value}`);

})



//// ---- change and input ----------

form = document.querySelector("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();
})
let user = document.querySelector("#user");

user.addEventListener('change', function () {
    console.log("change event");
    console.log("final value = ", this.value);
})

user.addEventListener('input', function () {
    console.log("input event");
    console.log("final value = ", this.value);
})


para = document.querySelector("#para3");
textInp = document.querySelector("#text");

textInp.addEventListener('input', function() {
    para.innerText = this.value;
})



//// ------- practice qs---------

//// Create a button on the page using JavaScript. Add an event listener to the button
//// that changes the button’s color to green when it is clicked.

btn = document.querySelector('#btn4');

btn.addEventListener('click', function () {
    this.style.backgroundColor = "yellow";
})

btn.addEventListener('mouseout', function () {   //// triggers when pointer comes on the element and leaves
    this.style.backgroundColor = "green";
})

btn.addEventListener('keypress', function () {    //// triggers when any key is pressed
    this.style.backgroundColor = "red";
})



////Create an input element on the page with a placeholder ”enter your name” and an H2 heading on the page inside HTML.
////The purpose of this input element is to enter a user’s name so it should only inputletters from a-z, A-Z 
//// and space (all other characters should not be detected). Whenever the user inputs their name, 
//// their input should be dynamically visible inside the heading.
////[Please note that no other character apart from the allowed characters should be visible in the heading]


h2 = document.querySelector('#name1');
inp = document.querySelector("#yourname")



inp.addEventListener('input', function () {
    allowedChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "
    ]

    console.log(this.value);

    filteredName = "";

    for(i of this.value){
        if(allowedChars.includes(i.toLowerCase())){
            filteredName +=i;
        }
    }

    console.log("Filtered Name ", filteredName);

    h2.innerText = filteredName;

})

