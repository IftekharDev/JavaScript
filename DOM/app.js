
//// ------- getElementById---------

// let image = document.getElementById("mainImg");
// console.log(image);
// console.log(image.src);



////------ getElementsByClassName --------------

// let smallImages = document.getElementsByClassName("oldImg");

// console.log(smallImages);

// for(let i=0; i<smallImages.length; i++) {
//     console.dir(smallImages[i].src);
// }

// for(let i = 0; i<smallImages.length; i++) {
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`src for ${i} is changed`);
// }



//// ------ getElementsByTagName -------------

// let paras = document.getElementsByTagName("p");
// console.log(paras);

//// document.getElementsByTagName("p")[0].innerText = "abc";



//// ------- Query Selectors -----------

// console.dir(document.querySelector('h1'));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelector("div a"));

// console.dir(document.querySelectorAll("div a"));

// console.dir(document.querySelectorAll("p"));



//// --------- Setting content in objects -------------

// let para = document.querySelector("p");
// console.log(para);

// console.dir(para);

// console.log(para.innerText);
// console.log(para.innerHTML);
// console.log(para.textContent);

// para.innerText = 'abc';
// para.innerText = "Hi, I'm Peter Parker!";

// para.innerText = "Hi, I'm <b> Peter Parker! </b>";

// para.innerHTML = "Hi, I'm <b> Peter Parker! </b>";


// let heading = document.querySelector("h1");

// console.log(heading.innerText);

// heading.innerHTML = "<u>Spider Man </u>";

// heading.innerHTML = `<u>${heading.innerText}</u>`;



//// ------- Manipulating Attributes -------------

// let img = document.querySelector("img");

// console.log(img);

// console.log(img.getAttribute('id'));

// img.setAttribute('id', "spidermanImg");

// console.log(img.getAttribute('class'));

// img.setAttribute("class", "spiderman");

// console.log(img.getAttribute("class"));



//// ---------- Manipulating style ---------------

// img = document.querySelector("img");

// console.log(img);
// console.log(img.style);

// heading = document.querySelector("h1");

// console.log(heading.style);

// heading.style.color = "purple";

// heading.style.backgroundColor = "yellow";


// let links = document.querySelectorAll("div a");

// for(let i =0; i<links.length; i++) {
//     links[i].style.color = "green";
// }

// for(i of links) {
//     i.style.color = "green";   // inline style
// }


// let box = document.querySelector('.box');

// console.log(box.style);  // This method can't access the css styling it only accesses inline styling.


 //// --------- classList -------------

// img = document.querySelector('img');

// console.log(img.classList);


// heading = document.querySelector("h1");

// console.log(heading.classList);

// heading.classList.add("abc");
// console.log(heading.classList);

// heading.classList.add("green");
// heading.classList.add("underline");

// heading.classList.remove("green");

// heading.setAttribute("class", "green");

// console.log(heading.classList);

// console.log(heading.classList.contains("green"));
// console.log(heading.classList.contains("underline"));

// heading.classList.toggle("green");
// console.log(heading.classList);

// heading.classList.toggle("underline");
// console.log(heading.classList);

// heading.classList.toggle("green");
// console.log(heading.classList);


// box = document.querySelector(".box");
// console.log(box.classList);

// box.classList.add("yellowBg");
// console.log(box.classList);



//// --------- Navigation --------

// let h4 = document.querySelector('h4');

// console.log(h4.parentElement);
// h4.parentElement

// console.log(h4.children);


// box = document.querySelector(".box");

// console.log(box.children);
// console.log(box.childElementCount);


// let ul = document.querySelector("ul");
// console.log(ul.parentElement);
// console.log(ul.children);
// console.log(ul.childElementCount);

// console.log(ul.children);
// console.log(ul.children[0]);
// console.log(ul.children[1]);
// console.log(ul.children[2]);

// console.log(ul.children[2].previousElementSibling);
// console.log(ul.children[1].previousElementSibling);
// console.log(ul.children[1].nextElementSibling);


// img = document.querySelector("img");

// console.log(img.previousElementSibling);
// console.log(img.previousElementSibling.style);

// img.previousElementSibling.style.color = "green";



////--------- Adding Elements on page -------------

// let newP = document.createElement("p");

// console.log(newP);

// newP.innerText = "Hi, I'm a new p."

// console.log(newP);
// console.log(newP.innerText);

// let body = document.querySelector('body');

// body.appendChild(newP);

// box = document.querySelector(".box");
// box.appendChild(newP);


// let btn = document.createElement('button');
// btn.innerText = "Click Me!";

// box = document.querySelector(".box");
// box.appendChild(btn);


// newP.append("This is new text.");
// newP.append(btn);
// newP.append("Do not click this button.");


// box.prepend(newP);



// let btn = document.createElement('button');
// btn.innerText = "NEW BUTTON!!!";

// p = document.querySelector("p");

// p.insertAdjacentElement('beforebegin', btn);
// p.insertAdjacentElement('afterbegin', btn);
// p.insertAdjacentElement('beforeend', btn);
// p.insertAdjacentElement('afterend', btn);


//// ------- Removing Elements -------------

// body = document.querySelector('body');
// body.removeChild(btn);

// p.insertAdjacentElement('afterend', btn);
// btn.remove;



//// --------- Practice Qs ----------

body = document.querySelector('body');

let para = document.createElement('p');
para.innerText = "Hey, I'm red!";
body.appendChild(para);

// para.style.color = "red";

para.classList.add('red')



let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
body.appendChild(h3);
h3.style.color = "blue";


div = document.createElement("div");
body.appendChild(div);

// div.style.border = "black";
// div.style.backgroundColor = 'pink';

let head1 = document.createElement('h1');
head1.innerText = "I'm in a div";
div.appendChild(head1);

let para1 = document.querySelector("p");
para1.innerText = "ME TOO";
div.appendChild(para1);

div.classList.add("box2");


//// Qsl. Create a new input and button element on the page using JavaScript only. 
// Set the text of button to "Click me'


let input = document.createElement("input");
let btn3 = document.createElement("button");

btn3.innerText = "Click me";

body = document.querySelector('body');
body.appendChild(input);
body.appendChild(btn3);


////Qs2. Add following attributes to the element :
//// Change placeholder value of input to "username"
//// Change the id of button to "btn'.

input.setAttribute('placeholder', "username");

btn3.setAttribute('id','btn');


//// Qs3. Access the btn using the querySelector and button id. 
//// Change the button background color to blue and text color to white.

butto = document.querySelector('button');
butto2 = document.getElementById("btn");

btn3.classList.add('butto');



//// Qs4 Create an hl element on the page and set its text to "DOM Practice" underlined. Change its color to purple.

let hdg1 = document.createElement('h1');

hdg1.innerText = "DOM Practice";
hdg1.style.textDecoration = "underline purple"

body = document.querySelector('body');

body.appendChild(hdg1);


